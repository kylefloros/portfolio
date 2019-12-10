import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function postTemplate({ data }) {
  const { title, date } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <section className="p-8">
        <div>
          <h1>{title}</h1>
          <h4>{date}</h4>
        </div>
        <Link
          className="flex justify-center items-center w-32 p-2 mb-8 shadow-lg 
      bg-ktan-400 text-black no-underline text-lg font-bold
      rounded border-solid border-2 border-tgray-400 hover:bg-ktan-600"
          to="/"
        >
          Back
        </Link>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
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
