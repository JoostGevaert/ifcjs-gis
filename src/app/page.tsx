import styles from "./page.module.css"
import HelloH1 from "@/components/HelloH1";
import HelloButton from "@/components/HelloButton";
import HelloCheckbox from "@/components/HelloCheckbox";

export const metadata = {
  title: "IFC.js Frontend BIM App",
  description: "First steps towards a frontend BIM app with IFC.js",
};

export default function Home() {
  return (
    <main>
      <HelloH1 name="Joost Gevaert" />
      <HelloButton name="Joop Gevaar" />
      <HelloCheckbox />
    </main>
  );
}
