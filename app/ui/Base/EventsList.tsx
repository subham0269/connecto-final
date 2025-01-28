import { EventsListArtist } from "@/app/Interfaces/components/Artists";
import { FC } from "react";
import SubListCard from "./SubListCard";

const EventsList:FC<EventsListArtist> = ({artistName}) => {
    console.log(artistName);
    
    return (
        <div className="space-y-4">{Array.from({length: 4}).map((_, i) => <SubListCard key={i} />)}</div>
    )
}

export default EventsList;