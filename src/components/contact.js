import React from "react"
import "../styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Contact Me</h3>

      <a href="https://www.facebook.com/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>

      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a href="https://www.facebook.com/" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.facebook.com/" className="email social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.facebook.com/" className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  )
}
