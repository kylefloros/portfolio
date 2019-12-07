import React from "react"
import { Link } from "gatsby"

export default function PostCard({ post }) {
  const { title, date, slug } = post.childMdx.frontmatter
  return (
    <Link
      className="w-9/10 md:w-1/3 lg:w-1/4 p-2 m-2 shadow-lg bg-ktan-400 text-black no-underline  
      rounded border-solid border-2 border-tgray-400"
      to={slug}
    >
      <h2 className="text-lg my-1">{title}</h2>
      <div className="text-base">{date}</div>
    </Link>
  )
}
