import styles from "./page.module.css";
import HelloH1 from "@/components/HelloH1";
import HelloFriends from "@/components/HelloFriends";
import HelloButton from "@/components/HelloButton";
import HelloCheckbox from "@/components/HelloCheckbox";
import HelloCounter from "@/components/HelloCounter";

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
          </section>
          <section className={styles.section}>
            <h3>Some other section</h3>
            <p>Some content for the next section</p>
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
