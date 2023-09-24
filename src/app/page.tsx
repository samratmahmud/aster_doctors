import Navbar from "@/components/global/Navbar";
import Header from "./home/Header";
import Safety from "./home/Safety";
import HealthCare from "./home/HealthCare";
import Guide from "./home/Guide";
import Specialisations from "../components/global/Specialisations";
import AllDoctors from "./home/AllDoctors";
import Sliders from "../components/global/Sliders";
import Network from "./home/Network";
import BlogPost from "./home/BlogPost";
import Career from "@/components/global/Career";
import Footer from "@/components/global/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Safety />
      <HealthCare />
      <Guide />
      <Specialisations />
      <AllDoctors />
      <Sliders />
      <Network />
      <BlogPost />
      <Career />
      <Footer />
    </div>
  );
}
