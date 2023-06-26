import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <div className="flex">
        <div className="fixed top-48 ml-20 md:hidden lg:block hidden">
          <div className="bg-slate-400 p-3 rounded-3xl flex flex-col gap-5 mt-52">
            <a className="text-3xl text-black" href="">
              <FaFacebook />
            </a>
            <a className="text-3xl text-black" href="">
              <FaTwitter />
            </a>
            <a className="text-3xl text-black" href="">
              <FaInstagram />
            </a>
            <a className="text-3xl text-black" href="">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <Banner></Banner>
          <Services></Services>
        </div>
      </div>
    </>
  );
}

export default App;
