"use client";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

let allLink = [
  {
    name: "Patient Portal",
    url: "/",
  },
  {
    name: "About Us",
    url: "/",
  },
  {
    name: "Appointment",
    url: "/",
  },
  {
    name: "E Consult",
    url: "/",
  },
  {
    name: "Home Care",
    url: "/doctorsPortal",
  },
  {
    name: "Specialities",
    url: "/profile",
  },
  {
    name: "Facilities",
    url: "/listing",
  },
  {
    name: "Location",
    url: "/",
  },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  let toggle = () => setOpen((prev) => !prev);

  return (
    <div className="container">
      <div className="flex justify-between items-center lg:gap-5 gap-3 py-4">
        <div className="md:flex-shrink-0">
          <Link href={"/"}>
            <img src="/picture/Aster_Pharmacy__1___1_ 1.svg" alt="" />
          </Link>
        </div>
        <div className="hidden xl:block">
          <div className="flex gap-5 flex-shrink-0">
            {allLink.map((item, index) => (
              <div key={index}>
                <Link
                  className="text-xs font-bold text-gray-800"
                  href={item.url}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center">
            <div className="text-sm font-bold text-white bg-sky-800 md:py-2.5 py-1.5 md:px-7 px-4 rounded-full cursor-pointer">
              EN
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <div>
                  <Link href={`https://web.whatsapp.com/`}>
                    <img src="/picture/image 13.svg" alt="" />
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="cursor-pointer">
                    <img src="/picture/image 12.svg" alt="" />
                  </div>
                  <div className="text-sky-800 text-sm font-semibold underline">
                    +961 2461 8900
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <Link href={"/doctorsPortal"}>
                <img src="/picture/wheelchair 1.svg" alt="" />
              </Link>
            </div>
          </div>
          <div
            onClick={toggle}
            className="xl:hidden cursor-pointer flex-shrink-0"
          >
            <img src="/picture/icons8-menu-58.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <Drawer open={open} onClose={toggle} direction="left">
          <div className="p-5 h-screen flex flex-col justify-between">
            <div>
              <div className="flex-shrink-0 mb-7">
                <Link href={"/"}>
                  <img src="/picture/Aster_Pharmacy__1___1_ 1.svg" alt="" />
                </Link>
              </div>
              <div className="grid gap-5 flex-shrink-0">
                {allLink.map((item, index) => (
                  <div key={index}>
                    <Link
                      className="text-md font-bold text-gray-800"
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex gap-2 items-center mb-5">
                <div className="cursor-pointer">
                  <img src="/picture/image 12.svg" alt="" />
                </div>
                <div className="text-sky-800 text-sm font-semibold underline">
                  +961 2461 8900
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div>
                  <Link href={`https://web.whatsapp.com/`}>
                    <img className="w-8" src="/picture/image 13.svg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link href={"/"}>
                    {" "}
                    <img
                      className="w-8"
                      src="/picture/wheelchair 1.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-[10px]">
              MOH License Number - Y91IAI04-120722© 2023 Aster Pharmacy. All
              rights reserved.
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
