import styles from "./components.module.css"

export default function HelloWorld({ name }: { name: string }) {
  return <h1 className={styles.helloH1}>Hello {name}!</h1>;
}
