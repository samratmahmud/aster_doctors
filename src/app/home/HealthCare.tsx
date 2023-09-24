import HealthInfo from "@/components/template/HealthInfo";
import React from "react";

function HealthCare() {
  return (
    <div className="container">
      <div className="lg:flex justify-center items-center gap-[75px] p-5 border-[3px] border-sky-100 lg:mb-[75px] mb-6 rounded-[32px]">
        <div>
          <img
            className="w-full mb-7 lg:mb-0"
            src="/picture/Frame 88.png"
            alt=""
          />
        </div>
        <div>
          <div className="lg:text-9xl text-5xl font-black text-sky-800 max-w-[435px] mb-7">
            We’ll treat <span className="text-emerald-500">you well</span>
          </div>
          <div className="lg:text-xl text-md text-neutral-500 max-w-[615px] lg:mb-[70px] mb-7">
            That’s our simple promise, and one that makes life easy for our
            patients and their families, even when ailments and treatments may
            be complex. All our Hospital specialists and support staff work in a
            coordinated and compassionate manner, delivering the best and latest
            care for all medical conditions.
          </div>
          <div>
            <div className="mb-6">
              <HealthInfo name="Preventive Health Check Packages" />
            </div>
            <hr className="h-[3px] bg-sky-100 mb-6" />
            <div className="mb-6">
              <HealthInfo name="Immunisation Vaccination" />
            </div>
            <hr className="h-[3px] bg-sky-100 mb-6" />
            <div className="mb-6">
              <HealthInfo name="Home Care Services" />
            </div>
            <hr className="h-[3px] bg-sky-100 mb-6" />
            <div className="">
              <HealthInfo name="Aster Maternity Packages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCare;
