import Packages from "@/components/common/Packages";
import Link from "next/link";
import React from "react";

let specialist = [
  {
    pic: "/picture/fpdl 1 (1).png",
    name: "Anesthesiology",
  },
  {
    pic: "/picture/fpdl 1 (1).png",
    name: "Anesthesiology",
  },
  {
    pic: "/picture/fpdl 1 (1).png",
    name: "Anesthesiology",
  },
  {
    pic: "/picture/fpdl 1 (1).png",
    name: "Anesthesiology",
  },
];

function Specialisations() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="lg:py-12 py-6 lg:mb-[75px] mb-10">
          <div className="lg:flex items-center justify-between gap-10">
            <div className="max-w-[856px]">
              <div className="lg:text-8xl text-4xl font-bold text-sky-800">
                Our Specialisations
              </div>
              <div className="lg:text-xl text-md font-medium text-neutral-500 lg:mb-20 mb-7">
                At Aster Hospital Oman we continue to follow the highest level
                of safety precautions as we treat our patients. We are strictly
                adhering to all ICMR & WHO mandated protocols, to keep you and
                your family safe & healthy.
              </div>
            </div>
            <div className="text-emerald-500 border-[3px] border-emerald-500 rounded-[20px] w-full max-w-[312px] hidden lg:block">
              <Link href={""}>
                <Packages name="View More" />
              </Link>
            </div>
          </div>
          <div className="lg:flex grid justify-between gap-7 mb-6 lg:mb-0">
            {specialist.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-[20px]">
                <div className="mb-5">
                  <img className="rounded-2xl w-screen" src={item.pic} alt="" />
                </div>
                <div className="text-2xl font-medium text-neutral-900 mb-14">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-emerald-500 border-[3px] border-emerald-500 rounded-[20px] w-full max-w-[312px] lg:hidden">
            <Link href={""}>
              <Packages name="View More" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialisations;
