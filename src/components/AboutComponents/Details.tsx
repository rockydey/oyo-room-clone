import React from "react";
import { GrStatusGood } from "react-icons/gr";
import detailsImg from "../../../public/assets/detailsImg.png";
import Image from "next/image";

const Details = () => {
  return (
    <div className="ml-[125px]">
      <h2 className="text-7xl font-extrabold leading-tight mb-20">
        157K+ storefronts are using <br /> our tech globally
      </h2>

      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="text-2xl flex items-center gap-5 font-normal">
            <GrStatusGood />
            <p>For maximising revenue</p>
          </div>
          <div className="text-2xl flex items-center gap-5 font-normal">
            <GrStatusGood />
            <p>To build online presence across channels</p>
          </div>
          <div className="text-2xl flex items-center gap-5 font-normal">
            <GrStatusGood />
            <p>To reach more guests & optimise experience</p>
          </div>
          <div className="text-2xl flex items-center gap-5 font-normal">
            <GrStatusGood />
            <p>For hassle-free operations</p>
          </div>
          <div className="text-2xl flex items-center gap-5 font-normal">
            <GrStatusGood />
            <p>To build a brand loved by both travellers & city dwellers</p>
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
