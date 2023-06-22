import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="md:w-[1600px] md:mt-24 mt-5"
      >
        <h1 className="text-5xl font-bold  mt-5">Welcome !!</h1>
        <h1 className="md:text-2xl text-xl font-bold mt-8">My name is,</h1>
        <h2 className="md:text-6xl text-5xl font-bold mt-2"> Tasin Ahammed</h2>
        <p className="font-bold md:text-3xl text-xl gap-5 mt-5">
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
    </div>
  );
};

export default Banner;
