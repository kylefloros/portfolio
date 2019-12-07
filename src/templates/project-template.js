import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"

export default function projectTemplate({ data }) {
  const { title, date } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <>
      <section>
        <Link to="/">Back to all posts</Link>
        <div>
          <h1>{title}</h1>
          <h4>{date}</h4>
        </div>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query getProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
      }
      body
    }
  }
`
