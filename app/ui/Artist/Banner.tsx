import { Banner } from "@/app/Interfaces/components/Artists";
import ArtistPfp from '@/public/Images/seedhe_maut_pfp 1.png';
import Image from "next/image"
import { FC } from "react";
import Rating from "./Rating";

const ArtistBanner:FC<Banner> = ({src}) => {
    return (
        <div className="bg-gray-300 w-full h-auto relative mb-56">
            <div className="h-[321px] max-h-[30%] w-full">
                <Image quality={100} src={src} alt="banner-iamge" className="w-full h-full object-center object-cover" title="Artist-banner-iamge" loading="lazy" />
            </div>

            <div className="absolute z-30 -bottom-52 left-32 space-y-2">
                <div className="size-64 overflow-hidden">
                    <Image quality={100} className="aboslute size-64 rounded-full object-cover object-center" src={ArtistPfp} alt="artist-pfp" title="Seedhe Maut" />
                </div>
                <h1 className="text-[#000000EB] font-bold text-4xl text-center">
                    Seedhe Maut
                </h1>
                <div className="flex justify-center items-center gap-4 h-7">
                    <Rating Rate={3} />
                </div>
            </div>
        </div>
    )
}

export default ArtistBanner;