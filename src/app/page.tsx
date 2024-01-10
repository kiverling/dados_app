import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{process.env.NEXT_PUBLIC_MESSAGE ?? "Hello! I am Traitor!"}</p>
        <p>Nit</p>
      </div>
    </main>
  );
}
