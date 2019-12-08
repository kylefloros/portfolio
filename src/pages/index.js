import React from "react"
import PostList from "../components/PostList"
import { graphql, useStaticQuery, Link } from "gatsby"
import indexStyles from "../css/Index.module.css"
import "../css/global.css"
import _ from "lodash"
import TwitterIcon from "../components/icons/TwitterIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import CalorieDebtGif from "../gifs/caloriedebt.gif"
import SpotifyPlaylistToolsGif from "../gifs/playlisttools.gif"
import JamChordsGif from "../gifs/jamchords.gif"
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
        <link rel="canonical" href="http://mysite.com/example" />
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
        <Link
          to="/resume"
          className="font-sans flex justify-center items-center text-lg bg-tgray-400 text-ktan-200 h-12 w-24 rounded border-none mt-4 ml-3 no-underline font-bold"
        >
          Resume
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-9/10">
          {/* Projects */}
          <h1 className="text-2xl">Projects:</h1>
          <div className="flex">
            <div className="w-full md:w-1/2 lg:w-2/5">
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
            <div className="hidden md:inline mt-2 ml-8 lg:ml-12 xl:ml-20">
              {selectedProject === "calorie-debt" && (
                <img
                  className="w-5/6 rounded"
                  src={CalorieDebtGif}
                  alt="Calorie Debt Preview"
                ></img>
              )}
              {selectedProject === "spotify-playlist-tools" && (
                <img
                  className="w-5/6  rounded"
                  src={SpotifyPlaylistToolsGif}
                  alt="Spotify Playlist Tools Preview"
                ></img>
              )}
              {selectedProject === "jam-chords" && (
                <img
                  className="w-5/6  rounded"
                  src={JamChordsGif}
                  alt="Jam Chords Preview"
                ></img>
              )}
            </div>
          </div>
          {/* Posts */}
          <div className="flex flex-col mt-8">
            <h1 className="text-2xl">Notes:</h1>
            <PostList posts={posts}></PostList>
          </div>
          <div className="flex flex-col mt-4">
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
      {/* Footer */}
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
