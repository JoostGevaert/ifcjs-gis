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
    <main className="max-w-prose mx-auto">
      <HelloH1 name="Joost Gevaert" />
      <div className="flex justify-between">
        <div>
          <section className="">
            <HelloFriends />
          </section>
          <section>
            <HelloListAPI />
          </section>
        </div>
        <aside className="">
          <HelloButton name="Joop Gevaar" />
          <HelloCheckbox />
          <HelloCounter />
        </aside>
      </div>
    </main>
  );
}
