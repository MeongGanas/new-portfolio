import Image from "next/image";
import { GrLocationPin } from "react-icons/gr";

export default function About() {
  const skills = ["html", "css", "js", "ts", "tailwind", "react", "next"];
  return (
    <section className="container min-h-screen px-5 py-20 md:px-10" id="about">
      <div className="mb-10 flex w-full items-center gap-2 md:gap-5">
        <h1 className="text-center text-base font-semibold md:text-lg">
          My Skills
        </h1>
        <span className="font-semibold">|</span>
        <ul className="flex items-center gap-2 md:gap-5">
          {skills.map((skill, i) => (
            <li key={i}>
              <Image src={`/${skill}.png`} width={35} height={35} alt={skill} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="mb-5 flex w-full justify-center md:mb-0 md:w-1/2">
          <Image
            src={"/computer.png"}
            width={400}
            height={400}
            alt="computer"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-base font-extrabold uppercase">About Me</h2>
          <h1 className="my-4 text-xl font-extrabold md:text-3xl">
            Full-stack Web Developer{" "}
            <span className="block">
              based in Makassar, Indonesia <GrLocationPin className="inline" />
            </span>
          </h1>
          <p className="mb-3 text-sm md:text-base">
            Hey, my name is Farrel, and I'm a Fullstack Developer. My passion is
            to create and develop interface, databases and connecting interface
            with databases for my users.
          </p>
          <p className="text-sm md:text-base">
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
}
