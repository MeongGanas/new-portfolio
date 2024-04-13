import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="flex w-full items-center justify-between px-5 py-20 md:px-10">
      <div>
        <h2 className="text-xl font-extrabold uppercase">Contact Me</h2>
        <p>Here's all social media that you can use to contact me.</p>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="https://www.instagram.com/farreljaoharii/">
              <CiMail className="h-8 w-8 text-blue-500" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/farreljaoharii/">
              <FaInstagram className="h-7 w-7 text-blue-500" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/farreljaoharii/">
              <FaFacebook className="h-7 w-7 text-blue-500" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
