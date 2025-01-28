import { FC } from "react"
import Frame125 from '@/public/Images/Frame 125.png';
import ArtistBanner from "@/app/ui/Artist/Banner";
import EventsList from "@/app/ui/Base/EventsList";


const ArtistPage:FC = () => {
    const EventNos = 20;
    
    return (
        <>
            <ArtistBanner src={Frame125} />
            <div className="w-full max-w-[1288px] mx-auto space-y-8">
                <div className="text-lg text-[#000000B5] font-semibold"><h2 className="inline mr-2">Upcoming Events</h2>{`(${EventNos})`}</div>
                <div className="mx-10">
                    <EventsList artistName="Seedhe Maut" />
                </div>
            </div>
        </>
    )
}

export default ArtistPage;