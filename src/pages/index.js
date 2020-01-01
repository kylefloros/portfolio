import React from "react"
import PostList from "../components/PostList"
import { graphql, useStaticQuery, Link } from "gatsby"
import indexStyles from "../css/Index.module.css"
import "../css/global.css"
import _ from "lodash"
import TwitterIcon from "../components/icons/TwitterIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import CalorieDebt from "../components/projects/CalorieDebt"
import SpotifyPlaylistTools from "../components/projects/SpotifyPlaylistTools"
import JamChords from "../components/projects/JamChords"
import { Helmet } from "react-helmet"

const width = 280

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  const [numBars, setNumBars] = React.useState(
    typeof window !== "undefined"
      ? Math.floor((window.innerWidth - width) / 48)
      : 0
  )
  const [selectedProject, setSelectedProject] = React.useState("")
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kyle's Portfolio</title>
      </Helmet>
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
        {/* <Link
          to="/resume"
          className="font-sans flex justify-center items-center text-lg bg-tgray-400 text-ktan-200 h-12 w-24 rounded border-none mt-4 ml-3 no-underline font-bold"
        >
          Resume
        </Link> */}
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col w-9/10">
          <div className="w-9/10 md:w-card ml-1">
            <p>
              Hi, I'm Kyle.  I am a software developer at Plexus Corp in Wisconsin working on the system integrations team.  I've been learning web development in my free time and focusing on React and GraphQL lately. Feel free to DM me on Twitter or LinkedIn!
            </p>
          </div>
          {/* Projects */}
          <div className="flex flex-col w-full md:w-card mt-5">
            <h1 className="text-2xl">Web Dev Projects:</h1>
            <div className="w-full">
              <CalorieDebt
                setSelectedProject={setSelectedProject}
                selectedProject={selectedProject}
              />
              <SpotifyPlaylistTools
                setSelectedProject={setSelectedProject}
                selectedProject={selectedProject}
              />
              <JamChords
                setSelectedProject={setSelectedProject}
                selectedProject={selectedProject}
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-card mt-10">
            <h1 className="text-2xl">Procreate Projects:</h1>
            
       <a
          className="no-underline p-2 m-2 shadow-lg bg-purple-600 hover:bg-purple-700 text-black no-underline rounded border-solid border-2 border-tgray-400"
          href="https://www.instagram.com/kylefloros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-lg my-1">View on Instagram</h2>
      <div className="text-base">instagram.com/kylefloros</div>
        </a>
          </div>
          {/* Posts */}
          <div className="flex flex-col w-full md:w-card mt-10">
            <h1 className="text-2xl">Notes:</h1>
            <PostList posts={posts}></PostList>
          </div>
          {/* Footer */}
          <div className="flex flex-col mt-8">
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
          </div>
        </div>
      </div>
    </>
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
