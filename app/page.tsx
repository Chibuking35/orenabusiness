import ItemGrid from "@/components/ItemGrid";
import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
import { CgToolbarTop } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { GrCubes } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread, MdTrackChanges } from "react-icons/md";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Slider />

      <div className=" bg-white  flex flex-col  md:flex-row py-7 md:py-6">
        <div className=" w-full flex flex-col md:flex-row">
          <div className="w-full p-3 md:px-6 md:my-20">
            <ItemGrid />
          </div>
        </div>
      </div>
      <div className=" bg-white  flex flex-col  md:flex-row pb-4 md:pb-6">
        <div className="bg-gray-200 w-full flex flex-col md:flex-row">
          <div className="w-full ">
            <div className="flex w-full p-6 py-5 md:py-20 md:mt-10 md:p-10 flex-col md:flex-row ">
              <div className="flex-1">
                <div className="flex flex-col gap-6 md:px-7 md:py-0 py-6">
                  <h1 className=" text-2xl md:text-4xl text-red-500 font-bold">
                    Who we Are
                  </h1>
                  <p className="text-base text-justify text-gray-500 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-[0.8]">
                    Orena is a creative branding company dedicated to turning
                    everyday products into meaningful expressions of identity.
                    We specialize in custom t-shirts, personalized mugs
                    thoughtfully designed to reflect your values, vision, and
                    style. At Orena, branding goes beyond printing; it&apos;s
                    about telling your story through design.
                  </p>
                  <div className="flex justify-start">
                    <Link href="/contact">
                      <button className="px-4 py-2 bg-red-500 flex rounded  text-white text-sm">
                        Let&apos;s talk
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 ">
                <div className="relative flex p-4 w-full h-88 ">
                  <Image
                    src="/slider9.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-2xl z-0 "
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 gap-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl text-gray-700 md:text-5xl mb-2">
            Why Choose us
          </h1>
          <div className="flex flex-row text-sm text-gray-400 gap-1">
            <p className="flex flex-row gap-2 items-baseline">
              <GoDotFill size={10} />
              Quality
            </p>
            <p className="flex flex-row gap-2 items-baseline">
              <GoDotFill size={10} />
              Creativity
            </p>
            <p className="flex flex-row gap-2 items-baseline">
              <GoDotFill size={10} />
              Precision
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 my-5 text-gray-500">
          <div className="flex flex-col items-center  justify-center py-5">
            <MdTrackChanges size={50} className="mb-3" />
            <h3 className="font-bold mb-2">premium Design</h3>
            <p className="text-xs text-center w-[70%]">
              Crafted with precision, creativity, and attention to detail to
              elevate your brand.
            </p>
          </div>
          <div className="flex flex-col items-center  justify-center py-5">
            <GrCubes size={50} className="mb-3" />
            <h3 className="font-bold mb-2">Quality</h3>
            <p className=" text-center w-[70%] text-sm">From premium materials to flawless printing, every detail is crafted to last.</p>
          </div>
          <div className="flex flex-col items-center  justify-center py-5">
            <CgToolbarTop size={50} className="mb-3" />
            <h3 className="font-bold mb-2">Precision</h3>
            <p className="text-xs text-center w-[70%]">Exact detailing and flawless execution in every design and print, delivered with absolute precision.</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 flex items-center bg-amber-400 justify-center">
        <Image
          src="/shopp.jpg"
          alt="career"
          fill
          className="object-cover  z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="absolute z-20 text-2xl text-white font-bold">
          <div className="flex flex-col md:flex-row gap-3">
            <Link
              href="https://wa.me/2349161637046"
              className="flex flex-row items-center justify-center gap-1 text-black bg-white opacity-60 rounded-full hover:scale-105 duration-100 px-4 py-2"
            >
              <FaWhatsapp />{" "}
              <p className="text-sm font-light opacity-100">
                {" "}
                Chat on WhatsApp
              </p>
            </Link>
            <Link
              href="mailto:cnwigwe525@gmail.com"
              className="flex flex-row items-center justify-center gap-1 text-black bg-white opacity-60 rounded-full hover:scale-105 duration-100 px-4 py-2"
            >
              <MdOutlineMarkEmailUnread />{" "}
              <p className="text-sm font-light opacity-95"> Email Us</p>
            </Link>
            <Link
              href="tel:+2349161637046"
              className="flex flex-row items-center justify-center gap-1 text-black bg-white opacity-60 rounded-full hover:scale-105 duration-100 px-4 py-2"
            >
              <IoCallOutline />{" "}
              <p className="text-sm font-light opacity-95"> Call us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
