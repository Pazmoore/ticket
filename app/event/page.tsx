import React from "react";
import styles from "./page.module.scss";
import { eventData } from "@/data/event";
import ResourceCard from "@/components/buttons/event/EventCard";

const page = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Get Your Tickets Here</h1>
          <p className={styles.info}>
            &quot;Fill out the form with your details, select TEDx MovieFest, submit, and receive your personalized conference ticket instantly!&quot;
          </p>
      </header>
      <section className={styles.container}>
        <div className={styles.one}>
          {eventData.map((item) => (
            <ResourceCard
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              key={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
