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
    <div>
      <HelloH1 name="Joost Gevaert" />
      <div className="flex justify-between">
        <div className="max-w-prose mx-auto">
          <section>
            <HelloFriends />
          </section>
          <section>
            <HelloListAPI />
          </section>
        </div>
        <aside className="self-center">
          <HelloButton name="Joop Gevaar" />
          <HelloCheckbox />
          <HelloCounter />
        </aside>
      </div>
    </div>
  );
}
