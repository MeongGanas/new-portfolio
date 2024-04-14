import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="container px-5 py-20 md:px-10" id="contact">
      <h2 className="mb-5 text-xl font-extrabold uppercase">Contact Me</h2>
      <div className="flex w-full items-center justify-between">
        <p>Here's all social media that you can use to contact me.</p>
        <ul className="flex items-center gap-5">
          <li className="transition-all duration-75 hover:-translate-y-1">
            <Link href="mailto:farreluken@gmail.com">
              <CiMail className="h-8 w-8 text-blue-500" />
            </Link>
          </li>
          <li className="transition-all duration-75 hover:-translate-y-1">
            <Link href="https://www.instagram.com/farreljaoharii/">
              <FaInstagram className="h-7 w-7 text-blue-500" />
            </Link>
          </li>
          <li className="transition-all duration-75 hover:-translate-y-1">
            <Link href="https://www.instagram.com/farreljaoharii/">
              <FaFacebook className="h-7 w-7 text-blue-500" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
