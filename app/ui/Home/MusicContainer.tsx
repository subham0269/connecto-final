import { FC, Suspense } from "react";
import SubSectionHeading from "../Base/HomeSubSection";
import { SquareListSkeleton } from "../skeletons/home";

import musicIcon from "@/public/Images/Home/music.svg";
import SquareList from "./EventsList";

const MusicContainer:FC = async () => {
    await new Promise (res => setTimeout(res, 3000));
    return (
        <div className="space-y-4">
            <SubSectionHeading url="/music" imgURL={musicIcon} heading="Music" />
            <Suspense fallback={<SquareListSkeleton />}>
                <SquareList />
            </Suspense>
        </div>
    )
}

export default MusicContainer;