import React from "react";
import logo from "../../../public/assets/OYO-logo.svg";
import Image from "next/image";
import Mission from "@/components/AboutComponents/Mission";
import oyoGridImg from "../../../public/assets/oyogrid.jpeg";
import Details from "@/components/AboutComponents/Details";
import Members from "@/components/AboutComponents/Members";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5">
        <Image src={logo} width={400} height={400} alt="" className="w-24 px-5 lg:px-0" />
      </div>
      <div className="pt-10">
        <Mission />
      </div>
      <div
        className="w-full h-[500px] lg:min-h-screen flex justify-end items-center lg:px-24 px-5"
        style={{
          backgroundImage: `url(${oyoGridImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-color4 text-3xl lg:text-4xl font-bold lg:w-[45%] leading-tight lg:leading-snug">
          We strive to make the lives of our patrons easier by multiplying
          revenue channels and using our technological expertise to maximize
          demand.
        </h2>
      </div>
      <div className="pt-10">
        <Details />
      </div>
      <div>
        <Members />
      </div>
    </div>
  );
};

export default AboutPage;
