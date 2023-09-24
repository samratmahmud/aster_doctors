import React from "react";
import Doctors from "./Doctors";
import Navbar from "@/components/global/Navbar";
import Sliders from "@/components/global/Sliders";
import Career from "@/components/global/Career";
import Footer from "@/components/global/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Doctors />
      <Sliders />
      <Career />
      <Footer />
    </div>
  );
}

export default page;
