import React from "react";
import logo from "../../../public/assets/OYO-logo.svg";
import Image from "next/image";
import Mission from "@/components/AboutComponents/Mission";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5">
        <Image src={logo} width={400} height={400} alt="" className="w-24" />
      </div>
      <div className="pt-10">
        <Mission />
      </div>
    </div>
  );
};

export default AboutPage;
