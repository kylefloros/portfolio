import React from "react"
import ProjectCard from "./ProjectCard"
export default function ProjectList({ projects }) {
  return (
    <div className="flex flex-col">
      {projects.map(({ node }, index) => {
        return <ProjectCard key={index} project={node}></ProjectCard>
      })}
    </div>
  )
}
