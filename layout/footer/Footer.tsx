import React from 'react'
import styles from "./footer.module.scss";

import {
FaFacebookF,
FaInstagram,
FaLinkedin,
FaXTwitter,
} from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h1>MovieFest</h1>
        <div className={styles.info}>
            <p>Copyright 2024 MovieFest. All rights reserved</p>
            <span className={styles.span}>
            <FaXTwitter /> <FaLinkedin /> <FaInstagram /> <FaFacebookF />{" "}
            <PiYoutubeLogo />
            </span>
        </div>
    </footer>
  )
}

export default Footer