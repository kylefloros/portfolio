import React from "react"
import { Link } from "gatsby"

export default function ProjectList({ project }) {
  const { title, date, slug, quote } = project.childMdx.frontmatter
  return (
    <Link
      className="w-9/10 md:w-3/4 lg:w-1/2 max-w-xl p-2 m-2 shadow-lg text-black bg-torange-400 no-underline 
      rounded border-solid border-2 border-tgray-400"
      to={slug}
    >
      <h2 className="text-lg my-1">{title}</h2>
      <div className="text-base">{date}</div>
    </Link>
  )
}
