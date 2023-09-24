import Packages from "@/components/common/Packages";
import React from "react";

let contractSide = [
  {
    pic: "/picture/Vector.svg",
    title: "Book an Apoointment",
  },
  {
    pic: "/picture/Vector (1).svg",
    title: "E - Consult",
  },
  {
    pic: "/picture/Vector (2).svg",
    title: "Find a Doctor",
  },
  {
    pic: "/picture/Vector (3).svg",
    title: "Insurance Cover",
  },
];

function Header() {
  return (
    <div
      className=" bg-no-repeat bg-cover"
      style={{backgroundImage: `url('/picture/20230803132533_[fpdl 1.png')`}}
    >
      <div className="container">
        <div className="lg:py-[120px] py-10">
          <div className="text-gray-50 lg:text-4xl text-2xl capitalize font-bold mb-2.5">
            Aster Royal Hospital
          </div>
          <div className="lg:text-10xl text-[36px] font-bold text-gray-50 max-w-[768px] mb-10">
            The latest addition to the aster family
          </div>
          <div className="lg:mb-[120px] mb-10 text-gray-50 border-[3px] border-gray-50 rounded-xl max-w-[306px]">
            <Packages name="View Packages" />{" "}
          </div>
          <div className="">
            <div className="lg:text-3xl text-xl font-semibold text-gray-50 py-5 text-center bg-sky-800 rounded-t-3xl">
              How can we help you today?
            </div>
            <div className="lg:py-12 py-5 lg:px-24 px-7 bg-emerald-500 rounded-b-3xl lg:flex grid justify-between lg:gap-5 gap-8 items-center">
              {contractSide.map((item, index) => (
                <div key={index} className="m-auto text-center">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="mb-4">
                      <img className="min-h-[44px]" src={item.pic} alt="" />
                    </div>
                    <div className="text-md font-semibold text-gray-50">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
