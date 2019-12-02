import React from "react"
import PostCard from "./PostCard"
import postListStyles from "../css/PostList.module.css"
export default function PostList({ posts }) {
  return (
    <div className={postListStyles.wrapper}>
      {posts.map(({ node }, index) => {
        return <PostCard key={index} post={node}></PostCard>
      })}
    </div>
  )
}
