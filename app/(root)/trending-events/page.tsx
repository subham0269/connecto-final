import EventsList from "@/app/ui/Base/EventsList";
import { StyledSection } from "@/app/ui/Base/styles";
import { FC } from "react";

const TrendingEvents:FC = () => {
    return (
        <div className="w-full max-w-[1288px] mt-10 space-y-6 mx-auto">
            <h1 className="font-bold text-4xl">Trending Events</h1>
            <StyledSection>
                <h2 className="text-xl font-semibold">Upcoming Events{`(${20})`}</h2>
                <EventsList artistName="Seedhe Maut" />
            </StyledSection>
        </div>
    )
}

export default TrendingEvents;