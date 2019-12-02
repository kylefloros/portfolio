import React from "react"
import layoutStyles from "../css/Layout.module.css"
export default ({ children }) => {
  return <main className={layoutStyles.bg}>{children}</main>
}
