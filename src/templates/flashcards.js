import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Flashcard from "../components/Flashcard"
import {ch1Terms, ch2Terms, ch3Terms} from "../../static/keyterms"
import {ch1Defs, ch2Defs, ch3Defs} from "../../static/defs"



const flashcardsTemplate = (
                            { 
                              data: { previous, next, site, markdownRemark: post } ,
                              location ,
                            }
                         ) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  //var currentChapterTerms = post.frontmatter.slug === "chapter-1"? ch1Terms: post.frontmatter.slug === "chapter-2"? ch2Terms: null
  //var currentChapterDefs = post.frontmatter.slug === "chapter-1"? ch1Defs: post.frontmatter.slug === "chapter-2"? ch2Defs: null

  var currentChapterTerms = post.frontmatter.slug === "chapter-1"? ch1Terms: post.frontmatter.slug === "chapter-2"? ch2Terms: post.frontmatter.slug === "chapter-3"? ch3Terms: null

  var currentChapterDefs = post.frontmatter.slug === "chapter-1"? ch1Defs: post.frontmatter.slug === "chapter-2"? ch2Defs: post.frontmatter.slug === "chapter-3"? ch3Defs: null

  var terms_and_defs = currentChapterTerms.map((id, index) => {
      return {
        id: id,
        term: currentChapterTerms[index],
        def: currentChapterDefs[index]
      }
    })
  console.log(terms_and_defs)

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>

      {/*<section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />*/}
        <section className="grid-container p-0">
               { terms_and_defs.map((term, idx) => <Flashcard key={idx} frontSide={term.term} backSide={term.def}/>)  }
        </section>

      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default flashcardsTemplate

export const pageQuery = graphql`
  query FlashcardsBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
