import React from "react";

const Recharts = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-40">Skills</h1>
      <div className="flex items-center gap-40">
        <div className="flex flex-col gap-3 mt-40 md:ml-56">
          <div className="flex items-center gap-[45px]">
            <p>HTML</p>
            <progress
              className="progress progress-primary w-96 h-3"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-14">
            <p>CSS</p>
            <progress
              className="progress progress-secondary w-96 h-3"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-[13px]">
            <p>Javascript</p>
            <progress
              className="progress progress-accent w-96 h-3"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-[24px]">
            <p>React JS</p>
            <progress
              className="progress progress-primary w-96 h-3"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-4">
            <p>MongoDB</p>
            <progress
              className="progress progress-primary w-96 h-3"
              value="30"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <div
              className="radial-progress bg-primary text-primary-content border-4 border-primary"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div>
              hello
            </div>
          </div>
          <div>
            <div
              className="radial-progress bg-secondary text-primary-content border-4 border-secondary"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div>
              hello
            </div>
          </div>
          <div>
            <div
              className="radial-progress bg-success text-primary-content border-4 border-success"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div>
              hello
            </div>
          </div>
          <div>
            <div
              className="radial-progress bg-accent text-primary-content border-4 border-accent"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div>
              hello
            </div>
          </div>
          <div>
            <div
              className="radial-progress bg-warning text-primary-content border-warning"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div>
              hello
            </div>
          </div>
          <div>
            <div
              className="radial-progress bg-sky-300 text-primary-content border-4 border-sky-300"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div>
              hello
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recharts;
