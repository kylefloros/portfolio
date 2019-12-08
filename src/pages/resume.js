import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default () => (
    <div className="m-8">
        <div className="mb-8 text-4xl font-bold text-torange-400">[Under Construction]</div>
        <Link className="flex justify-center items-center w-32 p-2 mb-8 shadow-lg 
        bg-ktan-400 text-black no-underline  
        rounded border-solid border-2 border-tgray-400" to="/">Back</Link>
    </div>
)
