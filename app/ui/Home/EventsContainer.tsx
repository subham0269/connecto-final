import type { FC } from "react";
import SubSectionHeading from "../Base/HomeSubSection";
import EventsList from "./EventsList";
import forward from '@/public/Images/Home/forward.svg';

const EventsContainer:FC = async () => {
    await new Promise (res => setTimeout(res, 3000));
    return (
        <div className="space-y-4">
            <SubSectionHeading url="/artists" imgURL={forward} heading="Best Parties in Your City" />
            <EventsList />
        </div>
    )
}

export default EventsContainer;