import React from "react";

let asterNet = [
  {
    number: "127",
    name: "CLINICS",
  },
  {
    number: "26156",
    name: "ASTERIAN’S",
  },
  {
    number: "32",
    name: "HOSPITALS",
  },
  {
    number: "521",
    name: "PHARMACIES",
  },
  {
    number: "7",
    name: "COUNTRIES",
  },
];

function Network() {
  return (
    <div style={{backgroundImage: `url('/picture/Network.png')`}}>
      <div className="container lg:mb-[75px] mb-10">
        <div className="lg:flex justify-between items-center lg:py-16 py-7">
          <div className="lg:text-10xl text-5xl font-bold text-gray-50 max-w-[461px] flex-shrink-0 mb-6 lg:mb-0">
            Aster Global Network
          </div>
          <div className="grid lg:grid-cols-2 gap-7 max-w-[654px] w-full">
            {asterNet.map((item, index) => (
              <div className="lg:flex flex-col lg:last:col-span-2 lg:last:w-1/2 lg:last:mx-auto">
                <div
                  key={index}
                  className="bg-emerald-500 py-12 px-8 text-center rounded-xl"
                >
                  <div className="lg:text-8xl text-6xl font-bold text-gray-50 text-center">
                    {item.number}
                  </div>
                  <div className="lg:text-md text-sm font-semibold text-gray-50">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
