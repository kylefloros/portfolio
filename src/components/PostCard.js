import React from "react"
import { Link } from "gatsby"
import postCardStyles from "../css/PostCard.module.css"

export default function PostCard({ post }) {
  const { title, date, slug } = post.frontmatter
  return (
    <Link className={postCardStyles.card} to={slug}>
      <h2>{title}</h2>
      <h4>{date}</h4>
    </Link>
  )
}
