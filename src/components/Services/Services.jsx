import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTItle/SectionTitle";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("ServiceData.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <div className="mt-40">
      <div>
        <SectionTitle title={"Services"}></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-48 mx-5">
        {servicesData.map((service) => (
          <div key={service.id} className="card-container">
            <div className="card w-96 h-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={service.image}
                  alt="Shoes"
                  className="rounded-xl w-[100px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
