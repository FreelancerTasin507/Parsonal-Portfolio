import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Wavify from "./components/Wave/Wavify";
import Skills from "./components/Recharts/Skills";


function App() {
  return (
    <>
      <NavBar></NavBar>

      <div className="flex">
        <div className="fixed top-48 ml-20 md:hidden lg:block hidden">
          <div className="bg-slate-400 p-3 rounded-3xl flex flex-col gap-5 mt-52">
            <a className="text-3xl text-black" href="https://www.facebook.com/tasin.shaike.1" target="_blank">
              <FaFacebook />
            </a>
            <a className="text-3xl text-black" href="https://twitter.com/tasinahammed001" target="_blank">
              <FaTwitter />
            </a>
            <a className="text-3xl text-black" href="https://www.instagram.com/tasinahammed01/" target="_blank">
              <FaInstagram />
            </a>
            <a className="text-3xl text-black" href="https://github.com/FreelancerTasin507" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <Banner></Banner>
          <Skills></Skills>
          <Projects></Projects>
          <Services></Services>
          <Contact></Contact>
          <Wavify></Wavify>
        </div>
      </div>
    </>
  );
}

export default App;
