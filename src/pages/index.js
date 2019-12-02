import React from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

import "../css/global.css"

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  return (
    <Layout>
      <h1>Kyle Floros</h1>
      <h3>Web dev project portfolio and notes</h3>
      <h3>Under construction [2019-12-01]</h3>
      <PostList posts={posts}></PostList>
    </Layout>
  )
}

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  }
`
