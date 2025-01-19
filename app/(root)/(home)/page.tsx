import { FC, lazy, Suspense } from "react";
import NewsLetterJoin from "../../ui/Home/Newsletter";
import { CircleListSkeleton, SquareListSkeleton } from "../../ui/skeletons/home";
import Link from "next/link";
import mic from '@/public/Images/Home/mic.svg';
import forward from '@/public/Images/Home/forward.svg';
import musicIcon from "@/public/Images/Home/music.svg";
import Image from "next/image";
import { StyledSection } from "@/app/ui/Base/styles";

const CircleList = lazy(() => import("@/app/ui/Home/CircleList"))
const SquareList = lazy(() => import("@/app/ui/Home/EventsList"));

const Page:FC = async () => {

  await new Promise(res => setTimeout(res, 3000))
  
  return (
    <>
      <div className="max-w-[1260px] px-12 mx-auto space-y-12">
        
          <StyledSection id="top-artists">
            <div className="flex justify-between items-center w-full">
              <div className="flex space-x-1 items-center">
                <Image className="size-6" width={10} height={10} src={mic} alt={`artist-icon`} loading="lazy" />
                <h2 className="font-semibold text-lg">Top Artists</h2>
                </div>
                <Link className="hover:underline text-semibold text-sm" href='/artists'>See more</Link>
            </div>
            <Suspense fallback={<CircleListSkeleton />}>
              <CircleList />
            </Suspense>
          </StyledSection>

          <StyledSection id="popular-events">
            <div className="flex justify-between items-center w-full">
              <div className="flex space-x-1 items-center">
                <Image className="size-6" width={10} height={10} src={forward} alt={`forward-icon`} loading="lazy" />
                <h2 className="font-semibold text-lg">Best parties in your city</h2>
                </div>
                <Link className="hover:underline text-semibold text-sm" href='/events'>See more</Link>
            </div>
            <Suspense fallback={<SquareListSkeleton />}>
                <SquareList />
            </Suspense>
          </StyledSection>

          <StyledSection id="top-organizers">
            <div className="flex justify-between items-center w-full">
              <div className="flex space-x-1 items-center">
                <Image className="size-6" width={10} height={10} src={forward} alt={`forward-icon`} loading="lazy" />
                <h2 className="font-semibold text-lg">Top Organizers</h2>
                </div>
                <Link className="hover:underline text-semibold text-sm" href='/organizer'>See more</Link>
            </div>
            <Suspense fallback={<CircleListSkeleton />}>
                <CircleList  />
            </Suspense>
          </StyledSection>

          <StyledSection id="music">
            <div className="flex justify-between items-center w-full">
              <div className="flex space-x-1 items-center">
                <Image className="size-6" width={10} height={10} src={musicIcon} alt={`music-icon`} loading="lazy" />
                <h2 className="font-semibold text-lg">Music</h2>
                </div>
                <Link className="hover:underline text-semibold text-sm" href='/music'>See more</Link>
            </div>
            <Suspense fallback={<SquareListSkeleton />}>
                <SquareList />
            </Suspense>
          </StyledSection>
          <NewsLetterJoin />
      </div>
    </>
  );
}

export default Page;