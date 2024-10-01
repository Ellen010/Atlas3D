import styles from '../styles/Home.module.css';
import { Header } from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to My3D!
          </h1>
        </main>
      </div>
    </>
  );
}

export default Home;
