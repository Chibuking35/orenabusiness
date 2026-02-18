'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


  

const Footer = () => {
    
    const router = useRouter();
  return (
    <div className="w-full px-10 md:px-10 pt-10 md:pt-10 pb-1  bg-gray-200 text-gray-500">
      <div className="justify-between flex flex-col md:flex-row gap-13 md:gap-0">
        {/* first div  */}
        <div className="flex-1 flex-col gap-5 md:gap-5">
          <div className="flex flex-row gap-1 justify-start items-baseline">
            <Image src="/logo.png" alt="orena logo" width={30} height={30} />

            <h1 className="text-xl font-semibold text-red-500 ">rena</h1>
          </div>
          <h1 className="text-base text-justify md:text-left mt-2 text-gray-500 max-w-md">
            Orena is a creative branding company committed to transforming
            everyday items into powerful expressions of identity. We specialize
            in personalized t-shirts, custom mugs, and unique accessories, each
            designed with intention and crafted to reflect your values, vision,
            and style. At Orena, customization goes beyond printing it&#39;s the
            art of storytelling through design.
          </h1>
          <div className="flex flex-col md:flex-row mt-8 gap-3 md:gap-5">
            <div className="flex flex-col">
              <h1 className="text-gray-600 text-base font-semibold">Email</h1>
              <h3 className="text-sm"> orena@gmail.com</h3>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-600 text-base font-semibold">Phone</h1>
              <h3 className="text-sm">+234-9161-6370-46</h3>
              <h3 className="text-sm">+234-902-250-9463</h3>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 flex gap-4 py-5 md:py-0">
          <h1 className="text-3xl text-red-500 justify-end">
            Get started with custom designs <br />that stand out.
          </h1>
          <Link href='/contact'  className="px-5 cursor-pointer py-2 rounded-2xl  text-gray-500 hover:text-white hover:bg-gray-600 bg-white text-center " >Contact now</Link>

              <div className="flex justify-center md:mt-10 flex-row gap-3 mt-4 items-center">
            <Link href="/contact" className=" mb-10">
              <FaWhatsapp size={22} />
            </Link>
            <Link href="/contact" className=" mb-10">
              <FaXTwitter size={22} />
            </Link>
            <Link href="/contact" className=" mb-10">
              <FaFacebookF size={22} />
            </Link>
            <Link href="/contact" className=" mb-10">
              <FaInstagram size={22} />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-5">
        &copy; {new Date().getFullYear()} Orena. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;