import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" min-h-screen bg-white">
      <div className="w-full h-40 relative flex items-center justify-center">
        <Image
          src="/contact.jpg"
          alt="contact background picture"
          fill
          className="object-cover object-[30%_60%] z-10"
        />

        <div className="absolute inset-0 bg-black/70 z-20" />

        <h1 className="absolute z-30 text-white text-2xl font-semibold">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row p-5 md:p-10 lg:p-30 mx-auto bg-white rounded shadow overflow-hidden  gap-8">
        {/* flex 1 */}
        <div className="flex-1 mb-30 md:mb-0">
          <div className=" h-full pr-10 md:pl-2 p-2 ">
            <h3 className="text-sm font-light mb-10 text-gray-500">
              Lets talk
            </h3>
            <h1 className=" mb-10 text-2xl first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-[0.8] text-red-500">
              We are always ready to assist you and provide clear guidance,
              ensuring your brand vision comes to life with precision and
              creativity.
            </h1>

            <h3 className="text-xs text-gray-600 mb-20">
              Providing you with impactful branding solutions begins with a
              simple conversation. Our team is dedicated to understanding your
              brand, addressing your questions, and creating innovative
              strategies at every stage. Contact us today to start elevating
              your brand experience.
            </h3>
            {/* the phone and location  div  */}
            <div className="flex flex-row mb-10 ">
              {/* first  */}
              <div className="flex-1">
                <h1 className="font-bold text-xl text-gray-500">Call Center</h1>
                <p className="font-light text-sm mt-2 text-gray-600">
                  <span className="font-bold">Phone: </span>
                  <br /> +234-916-163-7046
                </p>
              </div>
              {/* second  */}
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-500">
                  Our Location
                </h1>{" "}
                <p className="text-sm text-gray-500">
                  Imo State, Nigeria &#40;within the Federal University of
                  Technology Owerri&#41; PMB 1526, Owerri, Imo State, Nigeria
                  &#40;Postal Code: 460114&#41; Delivering premium branding
                  solutions and creative brand experiences worldwide.
                </p>
              </div>
            </div>
            {/* the email and social media div  */}
            <div className="flex flex-row ">
              {/* first  */}
              <div className="flex-1">
                <h1 className="font-bold text-xl text-gray-500">Email</h1>
                <p className="font-light text-sm mt-2 text-gray-600">
                  Orena@gmail.com
                </p>
              </div>
              {/* second  */}
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-500">Follow Us</h1>
                <div className="flex flex-row gap-4 justify-start items-center mt-2">
                  <Link href="https://web.facebook.com/?_rdc=1&_rdr#">
                    {" "}
                    <FaFacebook
                      className="text-gray-400
          "
                      size={20}
                    />{" "}
                  </Link>
                  <Link href="https://x.com/">
                    <FaSquareXTwitter
                      className="text-gray-400"
                      size={20}
                    />{" "}
                  </Link>

                  <Link href="https://www.instagram.com/accounts/login/?hl=en">
                    <FaInstagram className="text-gray-400" size={20} />{" "}
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="relative flex p-4 w-full h-96">
            <Image
              src="/c1.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl z-0 "
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
