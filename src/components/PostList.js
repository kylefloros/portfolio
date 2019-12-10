import React from "react"
import PostCard from "./PostCard"
export default function PostList({ posts }) {
  return (
    <div className="flex flex-col">
      {posts.map(({ node }, index) => {
        return <PostCard key={index} post={node}></PostCard>
      })}
    </div>
  )
}
