import { ContextWrapper } from "./context/state";
import HelloH1 from "@/app/react/components/HelloH1";
import HelloFriends from "@/app/react/components/HelloFriends";
import HelloButton from "@/app/react/components/HelloButton";
import HelloCheckbox from "@/app/react/components/HelloCheckbox";
import HelloCounter from "@/app/react/components/HelloCounter";
import HelloListAPI from "@/app/react/components/HelloListAPI";
import HelloRef from "./components/HelloRef";

export const metadata = {
  title: "IFC.js Frontend BIM App",
  description: "First steps towards a frontend BIM app with IFC.js",
};

export default function Home() {
  return (
    <ContextWrapper>
      <HelloH1 name="Joost Gevaert" />
      <div className="flex justify-between">
        <div className="max-w-prose mx-auto">
          <section>
            <HelloFriends />
          </section>
          <section>
            <HelloListAPI userCount={7} />
          </section>
        </div>
        <aside className="self-center flex flex-col space-y-3 items-center">
          <HelloButton name="Joop Gevaar" />
          <HelloCheckbox />
          <HelloCounter />
          <HelloRef />
        </aside>
      </div>
    </ContextWrapper>
  );
}
