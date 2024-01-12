import { GetServerSideProps } from "next";
import styles from "./page.module.css";

export default function Home({ message }: { message: string }) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{message ?? "Hello! I am Traitor!"}</p>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      message: process.env.NEXT_PUBLIC_MESSAGE,
    },
  };
};
