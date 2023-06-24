import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="lg:flex md:flex mt-10 lg:mx-32 md:mx-10 mx-5">
      <div className="mr-32 md:hidden lg:block">
        <div className="bg-slate-700 p-3 rounded-3xl flex flex-col gap-5 mt-52">
          <a className="text-3xl" href="">
            <FaFacebook />
          </a>
          <a className="text-3xl" href="">
            <FaTwitter />
          </a>
          <a className="text-3xl" href="">
            <FaInstagram />
          </a>
          <a className="text-3xl" href="">
            <FaGithub />
          </a>
        </div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="lg:w-[1600px] md:w-[1500px] lg:mt-24 mt-5"
      >
        <h1 className="text-5xl font-bold  mt-5">Welcome !!</h1>
        <h1 className="lg:text-2xl text-xl font-bold mt-8">My name is,</h1>
        <h2 className="lg:text-6xl text-5xl font-bold mt-2"> Tasin Ahammed</h2>
        <p className="font-bold lg:text-3xl text-xl gap-5 mt-5">
          <TypeAnimation
            sequence={[
              // Same String at the start will only be typed once, initially
              "I am a Professional React JS Developer",
              1000,
              "I am a Professional Front End Developer",
              1000,
              "I am a Professional MERN Stack Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>

        <Button></Button>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="lg:w-[60%] md:w-[80%] mx-auto lg:mt-12 mt-5 md:mt-0 mr-0">
          <img
            className=" rounded-full mx-auto  lg:w-[70%] md:w-[40%] w-[50%] "
            src="
            https://i.ibb.co/QKWjPp7/Screenshot-2-removebg-preview-1.png
"
            alt=""
          />{" "}
          <div>
            <h1 className="text-2xl font font-semibold text-center">
              Tasin Ahammed
            </h1>
            <div className="flex gap-10  mt-2 justify-center ">
              <div>Followers : 100K</div>
              <div className="btn-outline border-2 w-1/4 border-cyan-200 text-center font-bold hover:text-black rounded-3xl px-1 cursor-pointer hover:scale-105 transition-transform duration-200 hover:bg-cyan-300">
                Follow
              </div>
            </div>
            <div className="text-center mt-3">
              <h1 className="text-xl font-bold">Bio</h1>
              <hr className="border-2 w-1/4 mx-auto" />
              <p className="mt-4">
                I am proficient in JavaScript, React, Node.js, and MongoDB, and
                I have a strong understanding of the MERN Stack architecture. I
                am also a team player and I am always willing to learn new
                things.
                <br />
                <span className="text-xl font-bold mt-2">
                  Lets Code Your Life !!
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <img className=" mt-20" src="https://i.ibb.co/C9D9q4W/Banner-photo.png" alt="" /> */}
    </div>
  );
};

export default Banner;
