import Navbar from "@/components/global/Navbar";
import React from "react";
import DrListing from "./DrListing";
import Sliders from "@/components/global/Sliders";
import AllDoctors from "../home/AllDoctors";
import Career from "@/components/global/Career";
import Footer from "@/components/global/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <DrListing />
      <AllDoctors />
      <Sliders />
      <Career />
      <Footer />
    </div>
  );
}

export default page;
