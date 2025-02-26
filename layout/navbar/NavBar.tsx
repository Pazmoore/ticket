import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";


const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/images/navbar/logo.png"
          alt="logo"
          width={50}
          height={50}
          quality={100}
          className={styles.img}
        />
        <Link href="/"><h1>Movie Fest</h1></Link>
      </div>
      <Link href="/event">Events</Link>
      <Link href="/event"> Tickets</Link>
    </nav>
  )
}

export default NavBar