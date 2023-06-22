import React from "react";

const Button = () => {
  return (
    <button 
    class="relative mt-10 border-2 rounded-3xl border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 bg-cyan-500 before:bg-cyan-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
      button one
    </button>
  );
};

export default Button;
