"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
  return (
    <div className="container">
      <div className="lg:mb-[75px] mb-10">
        <div className="lg:mb-16 mb-9">
          <div className="lg:text-8xl text-4xl font-bold text-sky-800 mb-5 text-center">
            Exceptional Facilities
          </div>
          <div className="lg:text-xl text-md font-medium text-neutral-500 text-center">
            Our facilities have won several certifications. including a Quality
            department led by experts in hospital quality management, which
            ensures that each and every facility not just maintains but also
            upgrades its quality standards, time and again.
          </div>
        </div>
        <div className="">
          <Slider
            dots={false}
            centerMode={true}
            infinite={true}
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            centerPadding={"100px"}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1,
                  centerPadding: "20%",
                },
              },
            ]}
          >
            <div className="px-2.5">
              <img
                className="rounded-xl"
                src="/picture/202308031325_[fpdl 1 (1).png"
                alt=""
              />
            </div>
            <div className="px-2.5">
              <img
                className="rounded-xl"
                src="/picture/202308031325_[fpdl 1 (1).png"
                alt=""
              />
            </div>
            <div className="px-2.5">
              <img
                className="rounded-xl"
                src="/picture/202308031325_[fpdl 1 (1).png"
                alt=""
              />
            </div>
            <div className="px-2.5">
              <img
                className="rounded-xl"
                src="/picture/20230803132533_fpdl 1 (1).png"
                alt=""
              />
            </div>
            <div className="px-2.5">
              <img
                className="rounded-xl"
                src="/picture/20230803132533_fpdl 1 (1).png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
