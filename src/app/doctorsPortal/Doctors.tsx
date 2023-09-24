import Link from "next/link";
import React from "react";

let doctorsList = [
  {
    pic: "/picture/image 25.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "General Practitioner Dental",
    btn: "Book an Appointment",
    call: "/picture/image 28.svg",
  },
  {
    pic: "/picture/image 25.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "General Practitioner Dental",
    btn: "Book an Appointment",
    call: "/picture/image 28.svg",
  },
  {
    pic: "/picture/image 25.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "General Practitioner Dental",
    btn: "Book an Appointment",
    call: "/picture/image 28.svg",
  },
  {
    pic: "/picture/image 25.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "General Practitioner Dental",
    btn: "Book an Appointment",
    call: "/picture/image 28.svg",
  },
  {
    pic: "/picture/image 25.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "General Practitioner Dental",
    btn: "Book an Appointment",
    call: "/picture/image 28.svg",
  },
  {
    pic: "/picture/image 25.png",
    name: "Dr. Hatim Ali Al Lawati",
    title: "General Practitioner Dental",
    btn: "Book an Appointment",
    call: "/picture/image 28.svg",
  },
];

let specility = [
  {
    name: "SPECIALITY",
    dot: ":",
    workLang: "Cardiology",
  },
  {
    name: "Nationality",
    dot: ":",
    workLang: "Omani",
  },
  {
    name: "Languages",
    dot: ":",
    workLang: "English, Arabic",
  },
];

function Doctors() {
  return (
    <div>
      <div
        className="bg-100 mb-6
      "
      >
        <div className="container">
          <div className="text-4xl font-bold text-gray-50 lg:py-12 py-5">
            Our Doctors
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:py-[75px] py-8">
          <div>
            <div className="lg:mb-[75px] mb-10 lg:flex justify-between gap-5 items-center">
              <div className="mb-5 lg:mb-0">
                <div className="flex justify-between items-center gap-5 mb-1">
                  <div>Doctor's</div>
                  <select className="focus:outline-none" name="text" id="">
                    <option value="text"></option>
                    <option value="text">Dr. Hatim</option>
                  </select>
                </div>
                <hr className="h-1 bg-sky-100 w-full" />
              </div>
              <div className="mb-5 lg:mb-0">
                <div className="flex justify-between items-center gap-5 mb-1">
                  <div>Specialities</div>
                  <select className="focus:outline-none" name="text" id="">
                    <option value="text"></option>
                    <option value="text">Cardiology</option>
                  </select>
                </div>
                <hr className="h-1 bg-sky-100 w-full" />
              </div>
              <div className="mb-5 lg:mb-0">
                <div className="flex justify-between items-center gap-5 mb-1">
                  <div>Location</div>
                  <select className="focus:outline-none" name="text" id="">
                    <option value="text"></option>
                    <option value="text">Bangaldesh</option>
                  </select>
                </div>
                <hr className="h-1 bg-sky-100 w-full" />
              </div>
              <div className="mb-5 lg:mb-0">
                <div className="flex justify-between items-center gap-5 mb-1">
                  <div>Languages</div>
                  <select className="focus:outline-none" name="text" id="">
                    <option value="text"></option>
                    <option value="text">Bangla</option>
                    <option value="text">English</option>
                  </select>
                </div>
                <hr className="h-1 bg-sky-100 w-full" />
              </div>
              <Link href={""}>
                <button className="text-base font-semibold capitalize bg-emerald-500 rounded-full py-2 px-8">
                  Search
                </button>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 justify-between gap-7">
            {doctorsList.map((item, index) => (
              <div
                key={index}
                className="border-[3px] border-sky-100 rounded-2xl lg:p-7 p-2"
              >
                <div className="lg:flex gap-5 mb-7">
                  <div>
                    <img
                      className="lg:w-full w-screen mb-4 md:mb-0"
                      src={item.pic}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-sky-800">
                      {item.name}
                    </div>
                    <div className="text-md font-medium text-[rgba(30,_30,_30,_0.80)] mb-5">
                      {item.title}
                    </div>
                    <hr className="h-[3px] w-full bg-sky-100 mb-5" />
                    <div className="mb-5">
                      {specility.map((item, index) => (
                        <div key={index} className="flex gap-2.5">
                          <div className="min-w-[105px] text-sm font-medium text-[rgba(30,_30,_30,_0.80] uppercase">
                            {item.name}
                          </div>
                          <div>{item.dot}</div>
                          <div className="text-sm font-medium text-[rgba(30,_30,_30,_0.80] capitalize">
                            {item.workLang}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex lg:gap-7 gap-4">
                      <div className="lg:text-md text-sm font-bold text-gray-50 bg-emerald-500 py-2.5 px-5 rounded-full whitespace-nowrap">
                        <Link href={"/"}>{item.btn}</Link>
                      </div>
                      <div className="border-2 border-emerald-500 rounded-full flex-shrink-0">
                        <Link href={"/"}>
                          <img
                            className="py-3 px-3.5 flex-shrink-0"
                            src={item.call}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="h-[3px] w-full bg-sky-100 mb-7" />
                <div className="text-center">
                  <Link
                    href={""}
                    className="text-base font-medium text-emerald-500"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
