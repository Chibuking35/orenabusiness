import CounterCard from "@/components/counterCard";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { MdIndeterminateCheckBox } from "react-icons/md";

const Service = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-60 relative flex items-center justify-center">
        <Image
          src="/sv1.jpg"
          alt="contact background picture"
          fill
          className="object-cover object-[30%_60%] z-10"
        />

        <div className="absolute inset-0 bg-black/70 z-20" />

        <h1 className="absolute z-30 text-white text-2xl font-semibold">
          What We Do
        </h1>
      </div>
      <div className="flex flex-col md:flex-row p-5 md:p-10  mt-4 md:mt-10">
        <div className="flex-1 ">
          <h1 className="text-start font-bold text-lg text-red-500 mb-4 md:mb-0">
            Who We Are?
          </h1>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 text-justify md:text-left">
            We are a tech company dedicated to building innovative software
            solutions while also sharing our knowledge with those who want to
            learn. Beyond creating technology, we provide practical, hands-on
            training in areas like coding, design, and digital tools, helping
            learners gain real-world skills. With a focus on growth and
            innovation, we aim to empower both our clients and learners to
            achieve success and unlock their potential.
          </p>
        </div>
      </div>

      <div className="py-5 md:py-10 px-3 md:px-10 mt-3 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl text-red-500 ">Facts about Us </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-5 py-5 md:py-10 mt-3 text-gray-500">
          <CounterCard label="Hours of training" suffix="+" endNumber={12000} />
          <CounterCard label="Student's Attention" suffix="%" endNumber={88} />
          <CounterCard label="Active mentors" suffix="+" endNumber={300} />
        </div>
      </div>

      <div className="flex w-full p-5 gap-10 py-10 mt-4 flex-col lg:flex-row">
        <div className="flex-1">
          <div className="inset-0 rounded-2xl bg-blue-950 p-5 md:p-8">
            <MdIndeterminateCheckBox size={30} className="text-white" />

            <div className="mt-3 text-xs text-gray-500">
              <span className="text-sm   text-gray-300">
                {" "}
                At our core, we are a technology company that builds powerful
                software to solve real-world challenges.
              </span>{" "}
              Beyond development, we extend our knowledge through training
              programs designed for anyone looking to grow in tech. From coding
              to design and digital tools, we combine practical experience with
              learning opportunities,
              <span className="text-sm  text-gray-300">
                {" "}
                ensuring both our clients and learners are prepared for success
                in a fast-changing digital world.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
<div className="relative w-full h-60 lg:h-[400px]">
  <Image
    src="/solve.jpg"
    alt="plan"
    fill
    className="object-cover rounded-2xl"
    priority
  />

  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <h1 className="px-10 py-2 rounded-full bg-white/50 backdrop-blur-sm text-sm text-blue-950">
      Empowering People
    </h1>
  </div>
</div>

        </div>
        <div className="flex-1">
          <div className="p-5 md:p-8 w-full h-full bg-gray-200 rounded-2xl">
            <h1 className="text-5xl text-gray-500 ">100+</h1>
            <h5 className="text-gray-500 text-sm font-bold pt-2">
              Pro Software Engineer
            </h5>
            <p className="font-light text-xs text-gray-500 py-2">
              Our Pro Software Engineers train learners in coding, design, and
              digital tools with real-world experience.
            </p>

            <div className="flex-row  flex mt-4 ">
              <div className="flex-col flex text-gray-600 text-sm gap-2">
                {/* beginners div  */}
                <div className="flex flex-row  justify-between items-center gap-4">
                  <div className="flex-1">
                    <div>Beginners</div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex flex-row gap-0.5">
                      {" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                    </div>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <h1 className="text-end font-bold">57</h1>
                  </div>
                </div>
                <div className="flex flex-row  justify-between items-center gap-4">
                  <div className="flex-1">
                    <div> Intermidiate</div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex flex-row gap-0.5">
                      {" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                    </div>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <h1 className="text-end font-bold">40</h1>
                  </div>
                </div>
                <div className="flex flex-row  justify-between items-center gap-4">
                  <div className="flex-1">
                    <div>Advanced</div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex flex-row gap-0.5">
                      {" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                    </div>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <h1 className="text-end font-bold">20</h1>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
