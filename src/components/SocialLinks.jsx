import React from 'react';
import './SocialLinks.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram,faLinkedin} from "@fortawesome/fontawesome-free-brands";

export default function SocialLinks() {
  return (
    <div>
        <ul className="social-links">
            <li>
              <a className="" href="index.html#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a className="" href="index.html#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a className="" href="index.html#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a className="" href="index.html#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a className="" href="index.html#">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
    </div>
  )
}
