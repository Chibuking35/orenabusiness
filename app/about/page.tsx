import { Link } from "lucide-react";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-64 relative flex items-center justify-center">
        <Image
          src="/a1.jpg"
          alt="contact background picture"
          fill
          className="object-cover object-[30%_60%] z-10"
        />

        <div className="absolute inset-0 bg-black/60 z-20" />

        <h1 className="absolute z-30 text-white text-2xl font-semibold">
          About Us
        </h1>
      </div>

      <div className=" bg-white  flex flex-col  md:flex-row pb-4 md:pb-6">
        <div className="bg-gray-200 w-full flex flex-col md:flex-row">
          <div className="w-full ">
            <div className="flex w-full p-6 py-5 md:py-20 md:mt-10 md:p-10 flex-col md:flex-row ">
              <div className="flex-1">
                <div className="flex flex-col gap-6 md:px-7 md:py-0 py-6">
                  <h1 className=" text-sm md:text-4xl text-red-500 font-bold">
                    About Us
                  </h1>
                  <p className="text-base text-justify text-gray-500 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-[0.8]">
                    Orena is a creative branding company that brings meaning to
                    everyday products. Through custom t-shirts and personalized
                    mugs, we help individuals and brands express their values,
                    vision, and style. For us, branding goes beyond ink on
                    materials—it &apos;s about telling your story through
                    design.
                  </p>

                  <p className="text-gray-500">
                    We work closely with individuals, businesses, and
                    organizations to create designs that connect, inspire, and
                    leave a lasting impression. From concept to final print,
                    every detail is carefully crafted to ensure quality,
                    creativity, and authenticity—helping your brand stand out
                    and be remembered.
                  </p>
                </div>
              </div>
              <div className="flex-1 ">
                <div className="relative flex  w-full h-88 ">
                  <Image
                    src="/slider6.jpg"
                    alt=""
                    fill
                    className="object-cover rounded z-0 "
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-white p-5  md:p-20">
        <div className="md:flex hidden flex-col md:flex-row gap-5 md:gap-10 w-full ">
          {/* the first box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-60">
            <Image src="/exp.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[70%] bg-black opacity-70" />
            <div className="absolute z-20 bottom-0 w-full p-5 h-[70%]">
              <h1 className="font-bold   text-gray-400 mb-2 text-sm">
                Start A Good Plan
              </h1>
              <p className="text-gray-400 md:text-[8px] lg:text-xs mb-3">
                Every successful brand begins with a clear plan. Taking time to
                understand your goals, audience, and message allows us to create
                branding and printing solutions that are focused and consistent.
                A well thought out plan acts as a roadmap, guiding every design
                and print decision to ensure your brand stands out with purpose.
              </p>
            </div>
          </div>

          {/* the second box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-60">
            <Image src="/plan.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[20%] bg-black opacity-70" />

            <h1 className="font-bold text-sm   text-gray-400 mb-2 absolute z-40 bottom-0.5 left-10 ">
              Turn your Idea into Reality
            </h1>
          </div>

          {/* the third box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-60">
            <Image src="/a1.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[20%] bg-black opacity-70" />

            <h1 className="font-bold text-[12px] lg:text-sm left-10  absolute z-30 bottom-0.5  text-gray-400 mb-2 ">
              Connect with Experts
            </h1>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-7  md:px-10 justify-center items-center">
        {/* the heading */}

        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="font-bold  text-xl text-red-500 ">Why Choose us?</h1>
          <p className="font-light text-sm md:w-120 mt-3 text-gray-600 text-center">
            Creativity is at the heart of everything we do. By blending original
            ideas with expert design and high quality printing, we create
            branding solutions that inspire, engage, and help your business make
            a lasting impression.
          </p>
        </div>
        {/* the body and image  */}

        <div className=" mt-20 flex w-[80%] mx-auto flex-col md:flex-row gap-10 md:gap-3">
          {/* Left text section */}

          {/* content */}
          <div className="flex-1 ">
            {/* number one  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-red-500">01</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-red-500">
                  Creative and Impactful Branding
                </h3>
                <p className="text-gray-500 text-sm">
                  We design and produce creative branding solutions tailored to
                  your business identity, ensuring every logo, print, and design
                  communicates your vision clearly and leaves a lasting
                  impression.
                </p>
              </div>
            </div>
            {/* number two  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-red-500">02</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-red-500">
                  High Quality Printing Solutions
                </h3>
                <p className="text-gray-500 text-sm ">
                  We deliver precise and vibrant printing services for products
                  like t-shirts, mugs, and promotional materials, using the best
                  techniques to ensure durability, clarity, and consistency
                  across all items.
                </p>
              </div>
            </div>
            {/* number three  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-red-500">03</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-red-500">
                  Professional and Thoughtful Designs
                </h3>
                <p className="text-gray-500 text-sm">
                  We combine creativity, strategy, and attention to detail to
                  craft designs that resonate with your audience, strengthen
                  your brand presence, and make your products stand out in the
                  market.
                </p>
              </div>
            </div>
          </div>

          {/* Right images section */}
          <div className="flex-1">
            <div className="relative w-full h-100">
              {/* Top image */}
              <Image
                src="/w1.jpg"
                alt="Top"
                width={300}
                height={300}
                className="absolute left-0 z-30 rounded"
              />

              {/* Bottom image */}
              <Image
                src="/w2.jpg"
                alt="Bottom"
                width={400}
                height={400}
                className="absolute bottom-0 md:bottom-15 lg:bottom-7 left-10 right-0 z-20 opacity-20 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
