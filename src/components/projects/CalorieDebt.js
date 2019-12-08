import React from "react"
import ReactIcon from "../icons/ReactIcon"
import ReduxIcon from "../icons/ReduxIcon"
import NodeIcon from "../icons/NodeIcon"
import NginxIcon from "../icons/NginxIcon"
import MongoIcon from "../icons/MongoIcon"
const projectCardDefaultStyles =
  "cursor-pointer hover:bg-torange-600 bg-torange-400 w-8/10 p-2 m-2 shadow-lg text-black no-underline rounded border-solid border-2 border-tgray-400"
export default ({selectedProject, setSelectedProject}) => (
    <>
        <div onClick={()=>setSelectedProject('calorie-debt')}
        className={
            selectedProject === "calorie-debt"
            ? projectCardDefaultStyles + ""
            : projectCardDefaultStyles + ""
        }
        >
        <h2 className="text-lg my-1">Calorie Debt</h2>
        <div className="text-base">caloriedebt.com</div>
        </div>
        {selectedProject === "calorie-debt" && (
        <div className="w-full ml-4">
            <button
                    className="p-2 m-2 shadow-lg 
                bg-ktan-400 text-black   
                rounded border-solid border-2 border-tgray-400 font-bold"
                >
                    <a className="no-underline text-black text-lg" href="https://caloriedebt.com/" 
                  rel="noopener noreferrer" target="_blank">Check it out!</a>
                </button>
            <p className="ml-3 w-5/6">
            This app is a different take on calorie counting. Instead of
            counting your calories for the day, you count calories
            against the total number of calories you need to burn to
            reach your weight loss goal.  Lots of firsts on this project: First React/Redux app, first time setting up a server (nginx, express, mongodb).
            </p>
            <div className="flex">
            <ReactIcon />
            <ReduxIcon />
            <NodeIcon />
            <NginxIcon />
            <MongoIcon />
            </div>
        </div>
        )}
    </>
)