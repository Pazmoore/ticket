import Image from "next/image";
import React from "react";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container">
      <div className="home_info">
        <h1 className="one">Movie Conference 2025:</h1>
        <h1 className="two">Celebrating the Art of Storytelling and Cinema 🎥✨</h1>
        <div className="banner">
          <p>Welcome to the **Movie Conference**, the ultimate gathering for film enthusiasts, industry professionals, 
            and creative minds passionate about cinema. This event is a celebration of storytelling, innovation, and the art
            of filmmaking. Dive into engaging panel discussions, inspiring keynote sessions, and hands-on workshops led by 
            industry leaders. Discover the latest trends in film production, directing, animation, and movie critique. 
            Whether you’re a filmmaker, critic, or movie lover, this conference offers endless opportunities to learn, 
            network, and be inspired. Join us as we explore the magic of movies and the power of visual storytelling. 🎬✨
          </p>
          <Image
            src="/images/banner.png"
            alt="logo"
            width={250}
            height={250}
            quality={100}
            className="img"
          />
        </div>
        <Link href="/event" className="btn"> Let&apos;s Get Started</Link>
      </div>
    </section>
  );
}
