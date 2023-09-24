import Packages from "@/components/common/Packages";
import React from "react";

function DrListing() {
  return (
    <div>
      <div className="bg-sky-100 lg:mb-24 mb-7">
        <div className="container">
          <div className="text-4xl font-bold text-sky-800 lg:py-12 py-4">
            Our Doctors
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:py-12 py-6 lg:mb-[75px]">
          <div className="flex items-center gap-7 lg:mb-24 mb-7">
            <div className="flex-shrink-0">
              <img src="/picture/Group 5.svg" alt="" />
            </div>
            <div className="lg:text-base text-sm text-sky-800">
              / SPECIALISATION /{" "}
              <span className="font-medium">
                DEPARTMENT OF NUTRITION AND DIETETICS
              </span>
            </div>
          </div>
          <div className="lg:flex gap-12 lg:mb-[70px] mb-10">
            <div className="lg:text-xl text-md font-medium text-[rgba(30,_30,_30,_0.50)] lg:max-w-[655px] mb-7 lg:mb-0">
              The Nutrition and Dietetics Department at Aster DM Healthcare is
              committed to helping patients achieve and maintain optimal health
              through comprehensive dietary assessments, consultations, and
              education. Their highly qualified team of Dietitians and
              Nutritionists use the latest research and knowledge to provide
              specialized diets and meal plans to manage various health
              conditions, including diabetes, hypertension, obesity, gout,
              gastrointestinal, heart diseases and other conditions. In addition
              to medical nutrition therapy, they also offer services such as
              pediatric and geriatric nutrition, sports nutrition, weight
              management, disordered eating assessment and counseling, and
              management of food allergies and intolerances. With a focus on
              "Eat Well, Live Well," the department aims to provide the highest
              level of nutrition care to their patients.
            </div>
            <div>
              <img src="/picture/image 24.png" alt="" />
            </div>
          </div>
          <div className="bg-emerald-500 text-gray-50 rounded-[20px] max-w-[306px] m-auto text-center">
            <Packages name="View More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrListing;
