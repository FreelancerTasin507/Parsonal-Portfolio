import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-20">
      <div className="ml-10">
        <a className="btn btn-ghost normal-case lg:text-4xl md:text-3xl text-4xl  font-bold">
          Tasin Ahammed
        </a>
        <p>
          Tasin Ahammed
          <br />
          Providing reliable tech since 2023
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Web Development</a>
        <a className="link link-hover">React Js Development</a>
        <a className="link link-hover">Project Manager</a>
        <a className="link link-hover">PSD To React</a>
      </div>
      
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
