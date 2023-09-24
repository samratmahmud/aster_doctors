import Navbar from "@/components/global/Navbar";
import React from "react";
import DrProfile from "./DrProfile";
import Sliders from "@/components/global/Sliders";
import Career from "@/components/global/Career";
import Footer from "@/components/global/Footer";
import AllDoctors from "../home/AllDoctors";

function Page() {
  return (
    <div>
      <Navbar />
      <DrProfile />
      <AllDoctors />
      <Sliders />
      <Career />
      <Footer />
    </div>
  );
}

export default Page;
