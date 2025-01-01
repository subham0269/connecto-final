import { Suspense, type FC } from "react"
import mic from '@/public/Images/Home/mic.svg';
import ArtistList from "./CircleList";
import SubSectionHeading from "../Base/HomeSubSection";
import { Container } from "@/app/Interfaces/components/Home";
import { CircleListSkeleton } from "../skeletons/home";


const CircleContainer:FC<Container> = async ({heading, url}) => {
    await new Promise (res => setTimeout(res, 2500));

    return (
        <div className="space-y-4">
            <SubSectionHeading url={url} imgURL={mic} heading={heading} />
            <Suspense fallback={<CircleListSkeleton />}>
                <ArtistList />
            </Suspense>
        </div>
    )
}

export default CircleContainer;