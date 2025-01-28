import { Ratings } from "@/app/Interfaces/components/Artists";
import { FC } from "react";

const Rating:FC<Ratings> = ({Rate}) => {
    return (
        <>
            {Array.from({length: 5}).map((_,i) => 
            <svg key={i} className={`size-4 shrink-0 ${(i+1) <= Rate ? "fill-black" : "fill-gray-300"}`} viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                </path>
            </svg>)}
        </>
    )
}

export default Rating;