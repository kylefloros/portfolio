import React from "react"
import VueIcon from "../icons/VueIcon"
import SpotifyPlaylistToolsGif from "../../gifs/playlisttools.gif"

const projectCardDefaultStyles =
  "cursor-pointer hover:bg-torange-600 bg-torange-400 p-2 m-2 shadow-lg text-black no-underline rounded border-solid border-2 border-tgray-400"
export default ({ selectedProject, setSelectedProject }) => {
  const [showGif, setShowGif] = React.useState(false)

  return (
    <>
      <div
        onClick={() =>
          selectedProject === "spotify-playlist-tools"
            ? setSelectedProject("")
            : setSelectedProject("spotify-playlist-tools")
        }
        className={projectCardDefaultStyles}
      >
        <h2 className="text-lg my-1">Spotify Playlist Tools</h2>
        <div className="text-base">playlisttools.com</div>
      </div>
      {selectedProject === "spotify-playlist-tools" && (
        <div className="w-full ml-4">
          <div className="flex">
            <button
              className="p-2 m-2 shadow-lg 
            bg-ktan-400 text-black   
            rounded border-solid border-2 border-tgray-400 font-bold"
            >
              <a
                className="no-underline text-black text-lg"
                href="https://www.playlisttools.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Check it out!
              </a>
            </button>
            <button
              onClick={() => setShowGif(!showGif)}
              className="p-2 m-2 shadow-lg bg-ktan-400 text-black rounded border-solid border-2 border-tgray-400 font-bold no-underline text-black text-lg"
            >
              Preview
            </button>
          </div>
          {showGif && (
            <img
              className="w-5/6 rounded-lg ml-2 mt-2"
              src={SpotifyPlaylistToolsGif}
              alt="Calorie Debt Preview"
            ></img>
          )}
          <p className="ml-3">
            My first SPA! This app allows you to quickly add an artist's entire
            discography to a new or existing Spotify playlist. There are filters
            for album type (regular album, single, compilation), live albums,
            remixes, and more. In the Spotify app you have to drag each album
            over one by one--which can be painful if the artist has many albums.
            I like using this when exploring a new artist, so I can quickly add
            all their songs to a playlist and hit shuffle.
          </p>
          <div className="flex">
            <VueIcon />
          </div>
        </div>
      )}
    </>
  )
}
