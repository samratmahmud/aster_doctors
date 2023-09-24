import Packages from "@/components/common/Packages";
import React from "react";

let docslocation = [
  {
    pic: "/picture/Rectangle 55.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "Senior Consultant Cardiology",
  },
  {
    pic: "/picture/Rectangle 55.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "Senior Consultant Cardiology",
  },
  {
    pic: "/picture/Rectangle 55.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "Senior Consultant Cardiology",
  },
  {
    pic: "/picture/Rectangle 55.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "Senior Consultant Cardiology",
  },
];

function AllDoctors() {
  return (
    <div className="container lg:mb-[75px] mb-10">
      <div className="mb-12">
        <div className="text-sky-800 lg:text-7xl text-4xl font-bold text-center lg:mb-12 mb-6">
          Meet our Specialists
        </div>
        <div className="lg:flex grid gap-7 justify-between">
          {docslocation.map((item, index) => (
            <div key={index} className="">
              <div className="mb-5 p-2.5 border-[2px] border-emerald-500 rounded-2xl">
                <img className="rounded-md w-screen" src={item.pic} alt="" />
              </div>
              <div className="text-2xl font-semibold text-sky-800">
                {item.name}
              </div>
              <div className="text-sm font-medium text-[rgba(30,_30,_30,_0.80)]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-emerald-500 max-w-[306px] text-gray-50 rounded-xl m-auto text-center">
        <Packages name="View all Doctors" />
      </div>
    </div>
  );
}

export default AllDoctors;
