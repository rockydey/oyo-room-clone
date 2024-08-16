"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Room {
  id: number;
  room_name: string;
  price: number;
  images: {
    url: string;
    category: string;
  }[];
  image: string[];
  room_type: string;
  tv: string;
  wifi: string;
  kitchen: string;
  elevator: string;
  description: string;
}

export default function AllRooms() {
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setAllRooms(data));
  }, []);

  return (
    <div className='my-24 max-w-screen-xl mx-auto'>
      <h1 className='text-center text-3xl font-medium mb-10'>Our Rooms</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {allRooms.map((room: Room) => (
          <div key={room.id}>
            <div className='card card-compact bg-base-100 w-96 shadow-xl'>
              <figure>
                <Image
                  src={room.image[0]}
                  alt={room.room_name}
                  width={500}
                  height={200}
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-xl font-bold'>
                  {room.room_name}
                </h2>
                <div className='flex justify-between my-2 text-base font-medium'>
                  <p>${room.price}/per day</p>
                  <p>
                    Room Condition:{" "}
                    <span className='text-[#FFBA00]'>{room.room_type}</span>
                  </p>
                </div>
                <div className='card-actions justify-start'>
                  <button className='btn bg-[#2ECA7F] text-[#F3F3F3] hover:bg-[#2ECA7F] hover:text-[#F3F3F3]'>
                    <Link href={`/${room.id}`}>See Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
