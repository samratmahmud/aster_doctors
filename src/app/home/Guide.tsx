import React from "react";

let Visitor = [
  {
    pic: "/picture/hospital 1.svg",
    name: "Plan your visit",
    title:
      "Know what to expect and get to tips to make your visit easy and comfortable",
  },
  {
    pic: "/picture/stethoscope 1.svg",
    name: "All about Appointment",
    title:
      "Know what to expect and get to tips to make your visit easy and comfortable",
  },
  {
    pic: "/picture/hospital 1 (1).svg",
    name: "Admission &  Discharge",
    title:
      "Know what to expect and get to tips to make your visit easy and comfortable",
  },
  {
    pic: "/picture/hospital 1 (2).svg",
    name: "Patient Rights & Responsibilities",
    title:
      "Know what to expect and get to tips to make your visit easy and comfortable",
  },
];

function Guide() {
  return (
    <div className="container">
      <div className="lg:py-12 py-6 lg:mb-[75px] mb-6">
        <div className="text-center lg:mb-12 mb-8">
          <div className="lg:text-7xl text-5xl font-bold text-sky-800 mb-1">
            Patient and Visitor Guide
          </div>
          <div className="lg:text-xl text-base font-medium text-neutral-500">
            Everything you need to know about getting care at Aster
          </div>
        </div>
        <div className="grid lg:grid-cols-2 justify-between gap-7">
          <div className="grid lg:grid-cols-2 gap-7">
            {Visitor.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 bg-sky-100 py-12 px-4"
              >
                <div>
                  <img src={item.pic} alt="" />
                </div>
                <div className="lg:text-2xl text-base font-semibold text-sky-800 min-h-[48px]">
                  {item.name}
                </div>
                <div className="text-md font-medium text-[rgba(30,_30,_30,_0.50)]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div>
            <img className="h-full" src="/picture/Rectangle 66.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
