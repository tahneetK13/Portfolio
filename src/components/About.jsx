import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

//import MyImage from "../assets/tahneetk.png";

function About() {
  return (
    <div
      id="about"
      className=" group relative hero2-box w-full pt-20 h-screen bg-gradient-to-b from-purple via-black to-purple md:min-h-[75vh] "
    >
      <div className="relative flex flex-col md:flex-row items-center justify-center lg:mx-52 md:mt-20">
        <motion.Typography
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="shadow-lilic relative font-normal text-xl text-align: justify  text-sky  m-5 md:m-0 p-6 md:ml-5 mt-5 md:w-5/6 lg:w-4/5 xl:w-3/4 bg-blue-200 rounded-md shadow-2xl drop-shadow-sm backdrop-blur-md bg-opacity-20 max-h-[70vh] overflow-y-auto"
        >
          <Typography className=" text-5xl text-lightGreen  font-bold text-center mt-2 mb-5 border-b-2 border-light-blue-500">
            About Me
          </Typography>
          {/* <RxTriangleLeft className="absolute top-10 -left-10 text-white text-[70px] lg-max:hidden" /> */}
          I'm{" "}
          <span className="font-bold mx-2 text-lightGreen">
            Tahneet kanwal
          </span>, and I am a skilled frontend developer and technical writer based in
          India. I am passionate about creating innovative and scalable web
          applications, and I have hands-on experience in the digital realm.
          <br />
          <br />
          Currently, I work as a freelance technical writer at
          <span className="font-bold mx-2 text-lightGreen "> LambdaTest, </span>
          actively contributing my expertise to the dynamic tech landscape through articles read by millions.
          <br />
          <br />I hold a Bachelor of Technology (BTech) degree in Information
          Technology from the<span className="font-bold mx-2 text-lightGreen ">University College of Engineering and Technology </span>,
          Hazaribag, Jharkhand. If you would like to learn more about my
          diverse skill set and various projects, please feel free to
          explore my portfolio.
        </motion.Typography>
      </div>
    </div>
  );
}

export default About;
