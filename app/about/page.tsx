import { Link } from "lucide-react"
import Image from "next/image"
import { IoMdArrowDropright } from "react-icons/io"

const About =()=> {
    return (
        <div className="min-h-screen bg-white" >


 
  <div className="w-full h-56 relative flex items-center justify-center">
        <Image
          src="/a1.jpg"
          alt="contact background picture"
          fill
          className="object-cover object-[30%_60%] z-10"
        />

        <div className="absolute inset-0 bg-black/70 z-20" />

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
        
      <div className="w-full  bg-white p-5  md:p-20">
        <div className="md:flex hidden flex-col md:flex-row gap-5 md:gap-10 w-full ">
          {/* the first box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-60">
            <Image src="/a1.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[70%] bg-blue-950 opacity-80" />
            <div className="absolute z-20 bottom-0 w-full p-5 h-[70%]">
              <h1 className="font-bold   text-gray-400 mb-2 text-sm">
                Start A Good Plan
              </h1>
              <p className="text-gray-400 md:text-[8px] lg:text-xs mb-3">
                Every successful journey begins with a well-thought-out plan.
                Taking time to outline your goals, resources, and possible
                challenges helps you stay focused and organized. A good plan
                acts as a roadmap,
              </p>
              <Link
                href="/read-more"
                className="flex flex-rowv justify-start items-center cursor-pointer"
              >
                <h3 className="font-bold  text-gray-400 flex underline text-sm">
                  Read More
                </h3>{" "}
                <IoMdArrowDropright className="flex  text-gray-400" size={13} />
              </Link>
            </div>
          </div>

          {/* the second box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-60">
            <Image src="/a1.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[20%] bg-blue-950 opacity-80" />

            <h1 className="font-bold text-sm   text-gray-400 mb-2 absolute z-40 bottom-0.5 left-10 ">
              Set Clear Goals
            </h1>
          </div>

          {/* the third box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-60">
            <Image src="/a1.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[20%] bg-blue-950 opacity-80" />

            <h1 className="font-bold text-[12px] lg:text-sm left-10  absolute z-30 bottom-0.5  text-gray-400 mb-2 ">
              Connect with Experts
            </h1>
          </div>
        </div>
      </div>






       <div className="py-5 md:py-7  md:px-10 justify-center items-center">
        {/* the heading */}

        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="font-bold  text-xl text-blue-950 ">Why Choose us?</h1>
          <p className="font-light text-sm md:w-120 mt-3 text-gray-500 text-center">
            Creativity is at the heart of everything we do. By combining fresh
            ideas with innovative technology, we design solutions that inspire,
            engage, and drive real business growth.
          </p>
        </div>
        {/* the body and image  */}

        <div className=" mt-20 flex w-[80%] mx-auto flex-col md:flex-row gap-10 md:gap-3">
          {/* Left text section */}

          {/* content */}
          <div className="flex-1 ">
            {/* number one  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-blue-950">01</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-blue-950">
                  Creative and Responsive Software
                </h3>
                <p className="text-gray-500 text-xs">
                  We build creative and responsive software solutions tailored
                  to your business needs, ensuring seamless performance,
                  scalability, and an engaging user experience.
                </p>
              </div>
            </div>
            {/* number two  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-blue-950">02</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-blue-950">
                  Advanced Security Solutions
                </h3>
                <p className="text-gray-500 text-xs ">
                  We embed cybersecurity into every stage of our process,
                  delivering enterprise-grade solutions that protect sensitive
                  data, defend against evolving threats, safeguard critical
                  operations, and ensure business continuity with confidence and
                  resilience.
                </p>
              </div>
            </div>
            {/* number three  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-blue-950">03</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-blue-950">Professional & Detailed</h3>
                <p className="text-gray-500 text-xs">
                  We deliver software development solutions that combine
                  creativity, innovation, and technical expertise to build
                  applications that enhance productivity, streamline operations,
                  and drive measurable business results.
                </p>
              </div>
            </div>
          </div>

          {/* Right images section */}
          <div className="flex-1">
            <div className="relative w-full h-100">
              {/* Top image */}
              <Image
                src="/a1.jpg"
                alt="Top"
                width={300}
                height={300}
                className="absolute left-0 z-30 rounded"
              />

              {/* Bottom image */}
              <Image
                src="/a1.jpg"
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
    )
}
export default About