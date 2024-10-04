import React from "react";
import styles from "../../styles/Home.module.css"; 
import { Header } from "../../components/Header";
import { Home } from "../../components/Home"; 

export default function layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Home /> {/* Your home content goes here */}
        <section className={styles.contentSection}>
          <h2>All Models</h2>
          {/* Add content for models */}
        </section>
        <section className={styles.contentSection}>
          <h2>Contact</h2>
          {/* Add contact information */}
        </section>
      </main>
    </>
  );
}
