import React from "react"
import { Link } from "gatsby"

export default function PostCard({ post }) {
  const { title, date, slug } = post.frontmatter
  return (
    <Link
      className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-ktan-400 text-black 
      no-underline shadow-xl rounded border-solid border-2 border-tgray-400 p-4 m-2"
      to={slug}
    >
      <h2 className="text-lg my-1">{title}</h2>
      <div className="text-base">{date}</div>
    </Link>
  )
}
