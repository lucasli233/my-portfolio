import React from "react"

import Header from "../components/header"
import "../styles.css"

export default function Blog() {
  return (
    <div>
      <Header />

      <div className="container">
        <h1>My Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          egestas elit a tellus porttitor, id finibus ligula pulvinar. Phasellus
          nec posuere nisl. Vivamus ac turpis a velit vestibulum lacinia eget ac
          dui. Nunc efficitur libero tortor, quis aliquam nunc tristique eu. In
          egestas lectus a porta imperdie
        </p>
      </div>
    </div>
  )
}
