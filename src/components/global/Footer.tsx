import Link from "next/link";
import React from "react";
import {idText} from "typescript";

const firstData = [
  "About Aster Pharmacy",
  "About Aster DM Healthcare",
  "Shop Online",
  "Our Services",
  "Store Locator",
  "Sitemap",
  "Aster Secure",
];

const secendData = [
  "Product Categories",
  "Partner with us",
  "Career",
  "News Room",
  "Health Library",
  "Contact Us",
];

function Footer() {
  return (
    <div className="bg-sky-800">
      <div className="container py-12">
        <div>
          <div className="lg:flex lg:justify-between grid md:grid-cols-2 lg:gap-5 gap-16 mb-[70px]">
            <div className="flex lg:gap-16 gap-5 justify-between col-span-1 md:col-span-2">
              <div className="">
                <div className="mb-9">
                  <img src="/picture/image 10.svg" alt="" />
                </div>
                <div className="flex flex-col gap-6">
                  {firstData.map((item) => (
                    <div className="lg:text-sm text-xs text-gray-400">
                      <Link href={"/"}>{item}</Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-[72px]">
                <div className="flex flex-col gap-6">
                  {secendData.map((item) => (
                    <div className="lg:text-sm text-xs text-gray-400">
                      <Link href={"/"}>{item}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-base font-semibold text-gray-50 mb-6">
                Latest News
              </div>
              <div className="max-w-[66px] h-[1px] bg-gray-50 mb-6"></div>
              <div className="flex gap-6 items-center mb-6">
                <div className="flex-shrink-0">
                  <img src="/picture/Rectangle 45.png" alt="" />
                </div>
                <div className="text-sm text-gray-400 capitalize md:max-w-[235px]">
                  Aster Pharmacy wins the Dubai Service Excellence Awards under
                  the Health & Wellness Sector.
                </div>
              </div>
              <div className="flex gap-6 items-center md:mb-[70px]">
                <div className=" flex-shrink-0">
                  <img src="/picture/Rectangle 46.png" alt="" />
                </div>
                <div className="text-sm text-gray-400 capitalize md:max-w-[242px]">
                  Aster Pharmacy Honoured with Mohammed Bin Rashid Al Maktoum
                  Business Innovation Award
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/picture/image 11.svg" alt="" />
              </div>
            </div>
            <div>
              <div className="text-base font-semibold text-gray-50 mb-6">
                Contact
              </div>
              <div className="max-w-[66px] h-[1px] bg-gray-50 mb-6"></div>
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <img src="/picture/phone-flip.svg" alt="" />
                </div>
                <div className="text-sm text-gray-400 capitalize">
                  800 700 600
                </div>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <img src="/picture/envelope.svg" alt="" />
                </div>
                <div className="text-sm text-gray-400 capitalize">
                  info@asterpharmacy.com
                </div>
              </div>
              <div className="flex gap-6 lg:mb-[70px] mb-8">
                <div className="flex-shrink-0">
                  <img src="/picture/marker.svg" alt="" />
                </div>
                <div className="text-sm text-gray-400 capitalize md:max-w-[242px]">
                  Aster Pharmacies Group LLC3rd Floor, A Block, Al Hudaiba
                  Awards Building, Jumeirah Road, Dubai, UAE
                </div>
              </div>
              <div className="flex gap-6">
                <Link href={""}>
                  <img src="/picture/Frame 4.svg" alt="" />
                </Link>
                <Link href={"/"}>
                  <img src="/picture/Frame 2.svg" alt="" />
                </Link>
                <Link href={""}>
                  <img src="/picture/Frame 1.svg" alt="" />
                </Link>
                <Link href={""}>
                  <img src="/picture/Frame 32.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-sm text-xs text-gray-50 capitalize text-center">
            MOH License Number - Y91IAI04-120722© 2023 Aster Pharmacy. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
