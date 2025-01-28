'use client'
import Image from "next/image";
import { FC } from "react";
import Stat from "@/public/Images/sedhee maut wallpaper 1.png";
import Button from "./PrimaryBtn";

const SubListCard:FC = () => {
    const price = 943;
    return (
        <div className="bg-white md:h-64 lg:h-72 p-5 rounded-md shadow-secondaryShadow flex space-x-10">
            <div className="md:min-w-[300px] lg:min-w-[450px] h-full aspect-video rounded-lg overflow-hidden">
                <Image quality={100} src={Stat} className="object-cover object-center h-full w-full aspect-video" alt="event-icon"  />
            </div>
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h3 className="text-[#000000C7] text-2xl font-semibold">Lunch Break India Tour 2023</h3>
                    <p className="leading-6 text-lg mr-10 line-clamp-3">{`The Lunch Break India Tour 2024 by Seedhe Maut is a 12-city tour showcasing their 2023 mixtape Lunch Break. The duo delivers energetic performances featuring hits like "Namastute" and "Nanchaku.`}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg">Tickets starts at <span className="font-semibold">INR &#8377;{price}</span></p>
                    <Button onClick={() => console.log('clicked')
                    } text="Book Now" />
                </div>
            </div>
        </div>
    )
}

export default SubListCard;