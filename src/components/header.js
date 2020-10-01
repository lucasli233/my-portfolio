import React from "react"
import "../styles.css"
import { Link } from "gatsby" //import non-standard elements

export default function Home() {
  return (
    <div>
      <header>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </header>
    </div>
  )
}
