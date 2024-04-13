import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export default function About() {
  return (
    <section className="container min-h-screen px-5 md:px-10 py-20" id="about">
      <div className="w-full mb-10 flex gap-2 md:gap-5 items-center">
        <h1 className="text-base md:text-lg font-semibold text-center">
          My Skills
        </h1>
        <span className="font-semibold">|</span>
        <ul className="flex items-center gap-2 md:gap-5">
          <li>
            <Image src="/html.png" width={35} height={35} alt="html" />
          </li>
          <li>
            <Image src="/css.png" width={35} height={35} alt="css" />
          </li>
          <li>
            <Image src="/js.png" width={35} height={35} alt="js" />
          </li>
          <li>
            <Image src="/ts.png" width={45} height={45} alt="ts" />
          </li>
          <li>
            <Image src="/tailwind.png" width={35} height={35} alt="tailwind" />
          </li>
          <li>
            <Image src="/react.png" width={35} height={35} alt="react" />
          </li>
          <li>
            <Image src="/next.png" width={35} height={35} alt="next" />
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full mb-5 md:mb-0 flex justify-center md:w-1/2">
          <Image
            src={"/computer.png"}
            width={400}
            height={400}
            alt="computer"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-extrabold text-base uppercase">About Me</h2>
          <h1 className="font-extrabold text-xl md:text-3xl my-4">
            Full-stack Web Developer{" "}
            <span className="block">
              based in Makassar, Indonesia <FaLocationDot className="inline" />
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
