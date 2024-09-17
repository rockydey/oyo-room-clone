import React from "react";
import logo from "../../../public/assets/OYO-logo.svg";
import Image from "next/image";
import Mission from "@/components/AboutComponents/Mission";
import oyoGridImg from "../../../public/assets/oyogrid.jpeg";
import Details from "@/components/AboutComponents/Details";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5">
        <Image src={logo} width={400} height={400} alt="" className="w-24" />
      </div>
      <div className="pt-10">
        <Mission />
      </div>
      <div
        className="w-full min-h-screen flex justify-end items-center px-24"
        style={{
          backgroundImage: `url(${oyoGridImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-color4 text-4xl font-bold w-[45%] leading-snug">
          We strive to make the lives of our patrons easier by multiplying
          revenue channels and using our technological expertise to maximize
          demand.
        </h2>
      </div>
      <div className="pt-10">
        <Details />
      </div>
    </div>
  );
};

export default AboutPage;
