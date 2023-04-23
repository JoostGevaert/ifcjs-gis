export const metadata = {
  title: "Home | IFC.js Frontend BIM App",
  description: "First steps towards a frontend BIM app with IFC.js",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-prose">
      <h1>Welcome to my BIM app built with IFC.js!</h1>
      <p className="mt-3 text-justify">
        This web-app is the result of doing the IFC.js frontend course. The app
        is designed to make it easier for architects, engineers, and
        construction professionals to work with BIM data in a web browser. With
        this app, you can easily visualize and explore IFC models, extract
        information, and collaborate with team members by leaving comments.
      </p>
      <h1 className="mt-6">What is IFC.js?</h1>
      <p className="mt-3 text-justify">
        IFC.js is a library for working with Industry Foundation Classes (IFC)
        files in JavaScript. IFC is a file format used in the architecture,
        engineering, and construction (AEC) industry to exchange building
        information models (BIM). The library provides a way to read, write, and
        manipulate IFC files in a web browser or on a server using Node.js.
      </p>
      <h1 className="mt-6">Why IFC.js?</h1>
      <p className="mt-3 text-justify">
        The motivation behind IFC.js is to make it easier for web developers to
        work with BIM data. In recent years, there has been a growing interest
        in using BIM for building design and construction, and web technologies
        have become increasingly popular for creating applications and
        visualizations.
      </p>
      <p className="mt-3 text-justify">
        However, working with BIM data can be challenging because of the
        complexity of the IFC file format and the large amount of data involved.
        The IFC.js library aims to simplify this process by providing a way to
        read and write IFC files in JavaScript, a language that many web
        developers are familiar with.
      </p>
      <p className="mt-3 text-justify">
        Additionally, the library is designed to be modular and extensible, so
        that developers can add their own functionality and customize the
        library to their specific needs. This makes IFC.js a versatile tool for
        working with BIM data in a variety of contexts.
      </p>
    </section>
  );
}
