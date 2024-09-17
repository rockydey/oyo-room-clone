import React from "react";
import { GrStatusGood } from "react-icons/gr";
import detailsImg from "../../../public/assets/detailsImg.png";
import Image from "next/image";

const Details = () => {
  return (
    <div className="lg:ml-[125px]">
      <h2 className="text-3xl px-5 lg:px-0 lg:text-7xl font-extrabold leading-tight mb-20">
        157K+ storefronts are using <br /> our tech globally
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="space-y-4 px-5 lg:px-0">
          <div className="text-base lg:text-2xl flex items-center gap-2 lg:gap-5 font-normal">
            <GrStatusGood />
            <p>For maximising revenue</p>
          </div>
          <div className="text-base lg:text-2xl flex items-center gap-2 lg:gap-5 font-normal">
            <GrStatusGood />
            <p>To build online presence across channels</p>
          </div>
          <div className="text-base lg:text-2xl flex items-center gap-2 lg:gap-5 font-normal">
            <GrStatusGood />
            <p>To reach more guests & optimise experience</p>
          </div>
          <div className="text-base lg:text-2xl flex items-center gap-2 lg:gap-5 font-normal">
            <GrStatusGood />
            <p>For hassle-free operations</p>
          </div>
          <div className="text-base lg:text-2xl flex items-center gap-2 lg:gap-5 font-normal">
            <GrStatusGood />
            <p>To build a brand loved by both travellers</p>
          </div>
        </div>
        <div>
          <Image
            src={detailsImg}
            width={400}
            height={400}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
