import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "./about";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
