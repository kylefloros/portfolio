import React from "react"
import ReactIcon from "../icons/ReactIcon"

const projectCardDefaultStyles =
  "cursor-pointer hover:bg-torange-600 bg-torange-400 w-8/10 p-2 m-2 shadow-lg text-black no-underline rounded border-solid border-2 border-tgray-400"
export default ({selectedProject, setSelectedProject}) => (
    <>
        <div onClick={()=>setSelectedProject('jam-chords')}
        className={
            selectedProject === "jam-chords"
            ? projectCardDefaultStyles + ""
            : projectCardDefaultStyles + ""
        }
        >
        <h2 className="text-lg my-1">Jam Chords</h2>
        <div className="text-base">jamchords.netlify.com</div>
        </div>
        {selectedProject === "jam-chords" && (
        <div className="w-full ml-4">
            <button
                className="p-2 m-2 shadow-lg 
            bg-ktan-400 text-black   
            rounded border-solid border-2 border-tgray-400 font-bold"
            >
                <a className="no-underline text-black text-lg" href="https://jamchords.netlify.com/" 
                  rel="noopener noreferrer" target="_blank">Check it out!</a>
            </button>
            <p className="ml-3">
                I built this while learning React Hooks and Context.  It displays the diatonic triads and seventh chords in any key.  Great for song-writing and jamming so you know what chords are available.
            </p>
            <div className="flex">
            <ReactIcon />
            </div>
        </div>
        )}
    </>
)