const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = async ({ graphql, actions, reporter }) => {
  const  {createPage}  = actions
  
  // Define a template for blog post
  const blogPost = path.resolve(`src/templates/blog-post.js`)
  const flashcards = path.resolve(`src/templates/flashcards.js`)

  // Get all markdown blog posts sorted by date

  const results = await graphql(
    `
      {
        blogPosts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, limit: 1000) {
                      nodes {
                        id
                        fields {
                         slug 
                        }
                        frontmatter {
                          template
                        }
                      }
        }
      }
    `
  )

  if (results.errors) {
    reporter.panicOnBuild( `There was an error loading your blog posts`,)
    return
  }

  const posts = results.data.blogPosts.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: post.frontmatter.template === "blogPost"?blogPost:flashcards,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

}

exports.onCreateNode = ({ node, actions, getNode }) => {

        // Gatsby uses Redux internally to manage state, When you impliment a Gatsby api, you are passed a collection of actions.
        exports.onCreateNode = ({ node, actions, getNode }) => {
          // Gatsby uses Redux internally to manage state, When you impliment a Gatsby api, you are passed a collection of actions.
          // The object actions contains the functions and these can be individually extracted using ES6 object destructuring

            if (node.internal.type === `MarkdownRemark`) {
              const relativeFilePath = createFilePath({
                  node,
                  getNode,
                  basePath: "src/pages",
              })

              actions.createNodeField({
                name: `slug`,
                node,
                value: `/pages${relativeFilePath}`,
              })
            }
        }


        // The object actions contains the functions and these can be individually extracted using ES6 object destructuring

}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      template: String
      slug: String
    }

    type Fields {
      slug: String
    }
  `)
}
