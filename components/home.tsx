import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <section
      className="container relative flex min-h-screen flex-wrap items-center bg-slate-50 px-5 pb-20 pt-28 md:px-10"
      id="home"
    >
      <div className="mb-5 w-full md:mb-0 md:w-1/2">
        <h1 className="text-4xl font-extrabold">Full-stack Web Developer</h1>
        <p className="my-4">
          Hello, my name is{" "}
          <span className="font-semibold">Farrel Giovanni Jaohari</span>. I am a
          full-stack web developer live in{" "}
          <Link
            href="https://maps.app.goo.gl/aUyoqNDT4U7uNFUm7"
            target="_blank"
            className="transition-all duration-75 hover:border-b-2 hover:border-b-black"
          >
            Makassar, Indonesia <FaLocationDot className="inline" />
          </Link>
        </p>
        <Button
          as={Link}
          href="#about"
          className="bg-black font-semibold text-white"
        >
          More about me
        </Button>
      </div>
      <div className="flex w-full justify-center md:w-1/2">
        <Image src={"/profile.svg"} width={300} height={300} alt="my-profile" />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce md:left-1/4">
        <Image
          src={"/scrollbar.png"}
          width={40}
          height={40}
          className=""
          alt="scroll"
        />
      </div>
    </section>
  );
}
