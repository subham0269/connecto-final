import { AtomicCard } from "@/app/Interfaces/components/Home";
import Image from "next/image";
import { FC } from "react";

const EventCard:FC<AtomicCard> = ({img, name}) => {
    return (
        <div className="overflow-hidden rounded-sm hover:shadow-primaryShadow transition duration-200 ease-in-out">
            <div className="size-64">
                <Image width={100} height={100} quality={100} className="w-full h-full object-center object-cover hover:scale-105 transition duration-200 ease-in-out " src={img} alt={`${name}-poster-img`} loading="lazy" />
            </div>
        </div>
    )
}

export default EventCard;