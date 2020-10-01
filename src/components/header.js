import React from "react"
import { Link } from "gatsby" //import non-standard elements
import "../styles.css"

export default function Header() {
  return (
    <header>
      <p className="name">Lucas Li</p>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </header>
  )
}
