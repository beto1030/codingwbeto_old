module.exports = {
  siteMetadata: {
    title: `codingwbeto`,
    author: {
      name: `Alberto Alvarado`,
      summary: `, a self taught web developer from bay area california.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://beto1030.github.io/codingwbeto`,
    social: {
      twitter: `codingwbeto`,
    },
  },

  pathPrefix: "/codingwbeto",

  plugins: [
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/geology`,
        name: `geology`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-emotion`,

    `gatsby-plugin-smoothscroll`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
                     {
                       resolve: `gatsby-remark-images`,
                       options: {
                         maxWidth: 630,
                       },
                     },
                     {
                       resolve: `gatsby-remark-responsive-iframe`,
                       options: {
                         wrapperStyle: `margin-bottom: 1.0725rem`,
                       },
                     },
                     `gatsby-remark-prismjs`,
                     `gatsby-remark-copy-linked-files`,
                     `gatsby-remark-smartypants`,
                     `gatsby-remark-autolink-headers`,
        ],
      },
    },

    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

{
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Defaults used for gatsbyImageData and StaticImage
      defaults: {},
      // Set to none to allow builds to continue on image errors
      failOn: `none`,
      // deprecated options and their defaults:
      base64Width: 20,
      forceBase64Format: `png`, // valid formats: png,jpg,webp
      useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      stripMetadata: true,
      defaultQuality: 50,
    },
  },
  ],
}
