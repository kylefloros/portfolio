import React from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"
import indexStyles from "../css/Index.module.css"
import "../css/global.css"
import _ from "lodash"

export default () => {
  const response = useStaticQuery(getContent)
  const posts = response.allMdx.edges
  const [numBars, setNumBars] = React.useState(4)
  React.useEffect(() => {
    function handleResize() {
      if (typeof window !== undefined) {
        setNumBars(Math.floor((window.innerWidth - 274) / 48))
      }
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })
  return (
    <Layout>
      <div className={indexStyles.wrapper}>
        <div className="flex my-2">
          <div className={"mr-6 " + indexStyles.title}>
            <h1 className="text-2xl pt-2 pl-2 m-0">Kyle Floros</h1>
            <h2 className="text-base pt-2 pl-2 m-0">
              Web Dev Projects & Notes
            </h2>
          </div>
          <div className="flex">
            {_.times(numBars, i => {
              return <div key={i} className={indexStyles.parallelogram}></div>
            })}
          </div>
        </div>
        <div className="bg-tgray-400 mx-2 h-4"></div>
        <PostList posts={posts}></PostList>
        <p>
          <span>
            Built with Gatsby and MDX -
            <a
              className="no-underline"
              href="https://github.com/kylefloros/portfolio"
              target="_blank"
            >
              {" "}
              Repo
            </a>
          </span>
        </p>
      </div>
    </Layout>
  )
}

const getContent = graphql`
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
