import React from "react"
import PostList from "../components/PostList"
import ProjectList from "../components/ProjectList"
import { graphql, useStaticQuery } from "gatsby"
import indexStyles from "../css/Index.module.css"
import "../css/global.css"
import _ from "lodash"
import TwitterIcon from "../components/icons/TwitterIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"

const width = 280

export default () => {
  const response = useStaticQuery(getContent)
  const posts = response.posts.edges
  const projects = response.projects.edges
  const [numBars, setNumBars] = React.useState(
    typeof window !== "undefined"
      ? Math.floor((window.innerWidth - width) / 48)
      : 0
  )
  React.useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        setNumBars(Math.floor((window.innerWidth - width) / 48))
      }
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })
  return (
    <>
      {/* Header */}
      <div className="flex m-2">
        <div className="mt-3 ml-2 mr-6">
          <h1 className="text-2xl">Kyle Floros</h1>
          <h2 className="text-base">Web Dev Projects & Notes</h2>
        </div>
        <div className="flex">
          {_.times(numBars, i => {
            return <div key={i} className={indexStyles.parallelogram}></div>
          })}
        </div>
      </div>

      {/* Rail */}
      <div className="bg-tgray-400 h-4 mx-2"></div>

      {/* Icons */}
      <div className="flex">
        <a
          className="no-underline"
          href="https://www.linkedin.com/in/kylefloros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="no-underline"
          href="https://twitter.com/kylefloros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <button className="text-lg bg-tgray-400 text-ktan-200 h-12 w-24 rounded border-none mt-4 ml-3 font-bold">
          Resume
        </button>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col w-9/10  mt-1">
          {/* Projects */}
          <h1 className="text-2xl">Projects:</h1>
          <div>
            <ProjectList projects={projects}></ProjectList>
          </div>

          {/* Posts */}
          <div className="mt-4">
            <h1 className="text-2xl">Notes:</h1>
            <div>
              <PostList posts={posts}></PostList>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <p>
        <span>
          Built with Gatsby and MDX -
          <a
            className="no-underline"
            href="https://github.com/kylefloros/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Repo
          </a>
        </span>
      </p>
    </>
  )
}

const getContent = graphql`
  {
    projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          sourceInstanceName
          absolutePath
          childMdx {
            frontmatter {
              date(formatString: "MMM Do, YYYY")
              slug
              title
            }
          }
        }
      }
    }
    posts: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
      edges {
        node {
          sourceInstanceName
          absolutePath
          childMdx {
            frontmatter {
              date(formatString: "MMM Do, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  }
`
