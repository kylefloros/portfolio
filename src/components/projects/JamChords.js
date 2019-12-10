import React from "react"
import ReactIcon from "../icons/ReactIcon"
import JamChordsGif from "../../gifs/jamchords.gif"

const projectCardDefaultStyles =
  "cursor-pointer hover:bg-torange-600 bg-torange-400 p-2 m-2 shadow-lg text-black no-underline rounded border-solid border-2 border-tgray-400"
export default ({ selectedProject, setSelectedProject }) => {
  const [showGif, setShowGif] = React.useState(false)
  return (
    <>
      <div
        onClick={() =>
          selectedProject === "jam-chords"
            ? setSelectedProject("")
            : setSelectedProject("jam-chords")
        }
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
          <div className="flex">
            <button className="p-2 m-2 shadow-lg bg-ktan-400 text-black rounded border-solid border-2 border-tgray-400 hover:bg-ktan-600 font-bold">
              <a
                className="no-underline text-black text-lg"
                href="https://jamchords.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Check it out!
              </a>
            </button>
            <button
              onClick={() => setShowGif(!showGif)}
              className="p-2 m-2 shadow-lg bg-ktan-400 text-black rounded border-solid border-2 border-tgray-400 font-bold no-underline text-black text-lg hover:bg-ktan-600 cursor-pointer"
            >
              Preview
            </button>
          </div>
          {showGif && (
            <img
              className="w-5/6 rounded-lg ml-2 mt-2"
              src={JamChordsGif}
              alt="Jam Chords Preview"
            ></img>
          )}
          <p className="ml-3">
            I built this while learning the basics of React Hooks and Context.
            It displays the diatonic triads and seventh chords for different
            scales and keys. It's great for song-writing and jamming if your
            theory skills need some work (like me), so you know which chords are
            available in the key 😁
          </p>
          <div className="flex">
            <ReactIcon />
          </div>
        </div>
      )}
    </>
  )
}
