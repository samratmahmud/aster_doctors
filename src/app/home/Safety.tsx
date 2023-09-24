import Packages from "@/components/common/Packages";
import React from "react";

function Safety() {
  return (
    <div className="container">
      <div className="lg:flex justify-between gap-16 items-center lg:mt-24 mt-10 lg:mb-[75px] mb-10">
        <div className="mb-7 lg:mb-0">
          <div className="lg:text-7xl text-[36px] text-sky-800 font-bold max-w-[618px] lg:mb-10 mb-5">
            Committed to your Safety
          </div>
          <div className="text-neutral-500 lg:text-xl text-md font-medium max-w-[638px] lg:mb-10 mb-7">
            At Aster Hospital Oman we continue to follow the highest level of
            safety precautions as we treat our patients. We are strictly
            adhering to all ICMR & WHO mandated protocols, to keep you and your
            family safe & healthy.
          </div>
          <div className="bg-emerald-500 max-w-[306px] text-gray-50 rounded-xl">
            <Packages name="View More" />
          </div>
        </div>
        <div>
          <img className="w-full" src="/picture/Frame 83.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Safety;
