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

export default function React() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <HelloH1 name="Joost Gevaert" />
      <div className="flex justify-around space-x-4">
        <div className="max-w-prose">
          <section>
            <HelloListAPI userCount={7} />
          </section>
          <section>
            <h3 className="mt-2">Some useless content</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ea
              ipsa tempore ipsum eveniet facilis maxime nisi laboriosam
              repellendus nobis? Adipisci culpa impedit ipsa dignissimos
              repudiandae. Quasi quos in numquam voluptatum eligendi quod
              expedita? Dolorem, architecto ut quibusdam facere quisquam esse
              quo sint ullam dolor eum error asperiores natus, velit nesciunt
              officiis iure ex possimus perferendis voluptatem sapiente ratione.
              Earum nostrum iure mollitia? Tempore, animi. Repudiandae
              distinctio dignissimos placeat, est facere maxime hic ullam
              dolores ducimus voluptate dolor. At minima provident labore
              explicabo animi, esse exercitationem amet maiores velit? Placeat,
              sapiente eius. Possimus quasi enim illum tempore magni architecto
              nesciunt!
            </p>
          </section>
          <section>
            <HelloFriends />
          </section>
        </div>
        <aside className="flex flex-col items-center space-y-3 self-center">
          <HelloButton name="Joop Gevaar" />
          <HelloCheckbox />
          <HelloCounter />
          <HelloRef />
        </aside>
      </div>
    </div>
  );
}
