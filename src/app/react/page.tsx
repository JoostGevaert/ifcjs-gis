import styles from "./page.module.css";
import HelloH1 from "@/app/react/components/HelloH1";
import HelloFriends from "@/app/react/components/HelloFriends";
import HelloButton from "@/app/react/components/HelloButton";
import HelloCheckbox from "@/app/react/components/HelloCheckbox";
import HelloCounter from "@/app/react/components/HelloCounter";
import HelloListAPI from "@/app/react/components/HelloListAPI";

export const metadata = {
  title: "IFC.js Frontend BIM App",
  description: "First steps towards a frontend BIM app with IFC.js",
};

export default function Home() {
  return (
    <main>
      <HelloH1 name="Joost Gevaert" />
      <div className={styles.flexContainer}>
        <div>
          <section className={styles.section}>
            <HelloFriends />
            <HelloFriends />
          </section>
          <section className={styles.section}>
            <HelloListAPI />
          </section>
        </div>
        <aside className={styles.aside}>
          <HelloButton name="Joop Gevaar" />
          <HelloCheckbox />
          <HelloCounter />
        </aside>
      </div>
    </main>
  );
}
