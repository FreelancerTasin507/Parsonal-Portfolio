import React from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="mt-56">
      <div>
        <SectionTitle title={"Projects"}></SectionTitle>
      </div>
      <div>
        <nav className="projectNav text-center ">
          <a className="projectAncor mr-5" href="#home">
            HTML & CSS
          </a>
          <a className="projectAncor mr-5" href="#about">
            Tailwind CSS
          </a>
          <a className="projectAncor mr-5" href="#services">
            React Js
          </a>
          <a className="projectAncor mr-5" href="#contact">
            MERN Stack
          </a>
        </nav>
        <div className="mt-20">
          <div class="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-40">
            <a class="colmdx w-[70%] ml-10 h-[300px] lg:w-[70%] md:h-[300px] lg:h-[400px]"></a>
            <a class="colmdx w-[70%] ml-10 h-[300px] lg:w-[70%] md:h-[300px] lg:h-[400px]"></a>
            <a class="colmdx w-[70%] ml-10 h-[300px] lg:w-[70%] md:h-[300px] lg:h-[400px]"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
