import React from "react";

const PDF = () => {
  return (
    <div>
      <a href="../../../public/front end resume2.pdf" download>
        <button
          className="btn btn-outline duration-300 ml-4"
          onClick={generatePDF}
        >
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default PDF;
