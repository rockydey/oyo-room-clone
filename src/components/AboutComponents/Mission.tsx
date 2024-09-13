"use client";
import React, { useEffect, useState } from "react";
import missionPng from "../../../public/assets/missionPng.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Modal from "react-modal";
import { RxCrossCircled } from "react-icons/rx";

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "#0000004D",
    backdropFilter: "blur(4px)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "0px",
  },
};

const Mission = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="flex gap-[2%]">
      <div className="space-y-4 w-[30%] ml-[125px]">
        <h1 className="text-7xl font-bold text-color3">
          Our <span className="block">Mission</span>
        </h1>
        <p>
          OYO is a global platform that empowers entrepreneurs and small
          businesses with hotels and homes by providing full stack technology
          that increases earnings and eases operations. Bringing affordable and
          trusted accommodation that guests can book instantly.
        </p>
      </div>
      <div className="w-[68%] relative">
        <Image
          src={missionPng}
          width={400}
          height={400}
          alt=""
          className="w-full"
        />
        <button
          onClick={openModal}
          className="absolute top-[45%] right-[45%] bg-color4 text-xl p-8 rounded-full"
        >
          <FaPlay />
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative">
          <div
            onClick={closeModal}
            className="text-4xl cursor-pointer bg-color6 p-3 rounded-full text-color4 absolute top-5 right-5"
          >
            <RxCrossCircled />
          </div>
          <video width={1000} controls autoPlay>
            <source
              src="https://assets.oyoroomscdn.com/OYO-Intro-2021.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default Mission;
