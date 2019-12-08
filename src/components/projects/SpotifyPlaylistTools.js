import React from "react"
import VueIcon from "../icons/VueIcon"

const projectCardDefaultStyles =
  "cursor-pointer hover:bg-torange-600 bg-torange-400 w-8/10 p-2 m-2 shadow-lg text-black no-underline rounded border-solid border-2 border-tgray-400"
export default ({selectedProject, setSelectedProject}) => (
    <>
        <div onClick={()=>setSelectedProject('spotify-playlist-tools')}
        className={projectCardDefaultStyles}
        >
        <h2 className="text-lg my-1">Spotify Playlist Tools</h2>
        <div className="text-base">playlisttools.com</div>
        </div>
        {selectedProject === "spotify-playlist-tools" && (
        <div className="w-full ml-4">
            <button
                className="p-2 m-2 shadow-lg 
            bg-ktan-400 text-black   
            rounded border-solid border-2 border-tgray-400 font-bold"
            >
                <a className="no-underline text-black text-lg" href="https://www.playlisttools.com" 
                  rel="noopener noreferrer" target="_blank">Check it out!</a>
            </button>
            <p className="ml-3">
                This app allows you to quickly add an artist's entire discography to a new or existing Spotify playlist.  There are filters for album type (regular album, single, compilation), live albums, remixes, and more.  This was my first SPA and first experience with Vue/Vuex.
            </p>
            <div className="flex">
                <VueIcon />
            </div>
        </div>
        )}
    </>
)