import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";

export default function ProjectCard({
  name,
  desc,
  linkdemo,
  image,
  isOdd,
}: {
  name: string;
  desc: string;
  linkdemo: string;
  image: string;
  isOdd: boolean;
}) {
  return (
    <div className="mb-10 flex w-full flex-wrap items-center">
      {isOdd && (
        <>
          <div className="mb-3 w-full text-center md:mb-0 md:w-1/2">
            <h1 className="text-xl font-extrabold">{name}</h1>
            <p className="mt-3">{desc}</p>
            <Button
              as={Link}
              href={`${linkdemo}`}
              className="bg-transparent text-lg text-blue-600 underline"
            >
              Live demo <CiShare1 />
            </Button>
          </div>
          <div className="w-full pl-2 md:w-1/2">
            <Image
              src={`${image}`}
              width={200}
              height={200}
              className="w-full rounded-md shadow"
              alt={name}
            />
          </div>
        </>
      )}

      {!isOdd && (
        <>
          <div className="order-2 w-full pl-5 md:order-1 md:w-1/2">
            <Image
              src={`${image}`}
              width={200}
              height={200}
              className="w-full rounded-md shadow"
              alt={name}
            />
          </div>
          <div className="order-1 mb-3 w-full text-center md:order-2 md:mb-0 md:w-1/2">
            <h1 className="text-xl font-extrabold">{name}</h1>
            <p className="mt-3">{desc}</p>
            <Button
              as={Link}
              href={`${linkdemo}`}
              className="bg-transparent text-lg text-blue-600 underline"
            >
              Live demo <CiShare1 />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
