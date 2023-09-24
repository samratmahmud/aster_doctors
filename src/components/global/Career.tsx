import React from "react";
import Packages from "../common/Packages";

function Career() {
  return (
    <div className="bg-emerald-500">
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <div>
            <div className="lg:text-6xl text-[36px] font-black text-gray-50 max-w-[657px] mb-7">
              Join Us in Redefining Healthcare:
            </div>
            <div className="text-gray-50 border-[3px] border-gray-50 rounded-xl max-w-[306px]">
              <Packages name="CAREER" />
            </div>
          </div>
          <div className="lg:text-base text-sm font-medium text-[rgba(255,_255,_255,_0.80)]">
            Journey into the heart of healthcare innovation at Aster Pharmacy.
            Fueled by the desire to redefine Saudi Arabia's healthcare
            landscape, we blend innovation with compassion, crafting a healthier
            tomorrow for all. Our commitment to excellence, powered by
            state-of-the-art technology and patient-centered care, sets us on a
            transformative course.Our pharmacies are more than just healthcare
            outlets; they are community hubs. We believe that health is fostered
            through unity, which is why we're excited to become an integral part
            of your community. With every interaction, we aim to create lasting
            connections that transcend beyond prescriptions and medicines.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
