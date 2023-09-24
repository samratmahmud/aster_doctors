import Packages from "@/components/common/Packages";
import Link from "next/link";
import React from "react";

const blogContent = [
  {
    pic: "/picture/Rectangle 75.png",
    btn: "Dietetics",
    name: "Eat Right to Beat Tuberculosis",
    title:
      "Getting the right nutrition can help speed treatment and prevention includes healthy immunity.",
  },
  {
    pic: "/picture/Rectangle 75 (1).png",
    btn: "Dietetics",
    name: "Eat Right to Beat Tuberculosis",
    title:
      "Getting the right nutrition can help speed treatment and prevention includes healthy immunity.",
  },
  {
    pic: "/picture/Rectangle 75 (2).png",
    btn: "Dietetics",
    name: "Eat Right to Beat Tuberculosis",
    title:
      "Getting the right nutrition can help speed treatment and prevention includes healthy immunity.",
  },
];

function BlogPost() {
  return (
    <div className="container">
      <div className="lg:mb-[75px] mb-10">
        <div className="lg:text-7xl text-4xl font-bold text-sky-800 text-center">
          Health Library
        </div>
        <div className="lg:flex grid gap-7 lg:py-12 py-7">
          {blogContent.map((item, index) => (
            <div key={index} className="border-2 border-sky-100 rounded-[20px]">
              <div className="mb-10">
                <img className="w-full" src={item.pic} alt="" />
              </div>
              <div className="mb-24 px-6">
                <div className="text-base font-medium text-gray-50 bg-sky-800 py-1.5 px-2.5 max-w-[152px] mb-7">
                  {item.btn}
                </div>
                <div className="text-2xl text-sky-800 font-semibold mb-5 max-w-[305px]">
                  {item.name}
                </div>
                <div className="text-base font-medium text-[rgba(30,_30,_30,_0.50)] font-lato">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-emerald-500 border-[3px] border-emerald-500 rounded-[20px] max-w-[312px] m-auto text-center">
          <Link href={"/"}>
            <Packages name="View  More" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
