import Quality from "@/components/common/Quality";
import React from "react";

const profileComp = [
  "Complex coronary interventions (LM, CTO, plaque modification techniques; rotational atherectomy)",
  "Intravascular imaging (IVUS, OCT)",
  "Physiologic assessment of coronary lesions (FFR, iwFR)",
  "Transcatheter aortic valve implantation (TAVR)",
  "Mitral Balloon Valvuloplasty (BMV)",
  "Percutaneous closure of atrial septal defects (ASD) and patent foramen ovale (PFO)",
  "Echocardiography (transthoracic, transesophageal, dobutamine stress echocardiography)",
  "Critical care cardiology and cardiovascular hemodynamics",
];

function DrProfile() {
  return (
    <div>
      <div className="bg-100 lg:mb-24 mb-10">
        <div className="container">
          <div className="text-4xl font-bold text-gray-50 lg:py-12 py-4">
            Our Doctors
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:flex gap-12 lg:mb-12 mb-6">
          <div className="flex flex-col gap-12">
            <div className="border-2 border-emerald-500 rounded-xl lg:p-5 p-2">
              <img
                className="rounded-xl w-full"
                src="/picture/Rectangle 55.png"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:gap-10 gap-4 mb-10 lg:mb-0">
              <Quality name="LANGUAGES" title="English, Arabic" />
              <Quality
                name="EDUCATION"
                title="MD, FRCPC, ABIM, ABIM (CV), FACC, FSCAI"
              />
              <Quality name="SPECIALIZATION" title="Cardiology" />
              <Quality name="NATIONALITY" title="Omani" />
              <Quality
                name="LICENSE GRADE"
                title="Senior Consultant Cardiologist"
              />
              <Quality name="TYPE OF PHYSICIAN" title="Visiting" />
            </div>
          </div>
          <div>
            <div className="lg:text-5xl text-3xl font-bold text-sky-800 lg:mt-1 lg:mb-2.5 mb-3">
              Dr. Hatim Ali Al Lawati
            </div>
            <div className="lg:text-xl text-md font-medium text-[rgba(30,_30,_30,_0.50)]">
              Senior Consultant Cardiologist
            </div>
            <hr className="max-w-[329px] h-0.5 bg-emerald-500 lg:my-[100px] my-8" />
            <div className="lg:text-2xl text-base font-semibold text-sky-800 mb-7">
              PROFESSIONAL EXPERIENCE
            </div>
            <div className="lg:text-xl text-sm font-medium text-[rgba(30,_30,_30,_0.50)] max-w-[835px] lg:mb-[100px] mb-10">
              Dr. Hatim Ali Al Lawati completed his medical education at The
              Sultan Qaboos University Medical School in 2002, earning a
              B.Sc(H.Sc) and MD with high honors and distinction. He pursued
              further training through a Royal College accredited residency in
              internal medicine (2008) and adult cardiology (2011) at the
              University of Toronto. Dr. Al Lawati holds dual board
              certification from the Royal College of Physicians and Surgeons of
              Canada and the American Board of Medical Subspecialties in both
              specialties. Following his residency, he undertook a 2-year
              structured fellowship in Interventional Cardiology and Structural
              Heart Disease at St. Michael's Hospital in Toronto, Ontario,
              Canada.
              <h1>
                Upon returning to the Sultan Qaboos University Hospital in 2014,
                Dr. Al Lawati introduced several services in the catheterization
                laboratory and echocardiography laboratory. He has contributed
                to major cardiology journals, including publications in
                Circulation and the European Heart Journal. Dr. Al Lawati
                actively participates in local, regional, and international
                conferences as both a speaker and moderator, including events
                such as EuroPCR, GulfPCR, SCAI Gulf-Chapter, and GHA.
              </h1>
            </div>
            <div className="lg:text-2xl text-base font-semibold text-sky-800 lg:mb-7 mb-4">
              CLINICAL EXPERTISE & SERVICES OFFERED
            </div>
            <div className="max-w-[842px]">
              {profileComp.map((item) => (
                <div className="lg:text-xl text-sm font-medium text-[rgba(30,_30,_30,_0.50)] lg:mb-7 mb-2.5 last:mb-0">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrProfile;
