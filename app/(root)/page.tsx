import { FC, Suspense } from "react";
import ArtistContainer from "../ui/Home/CircleContainer";
import EventsContainer from "../ui/Home/EventsContainer";
import OrgContainer from "../ui/Home/OrgContainer";
import NewsLetterJoin from "../ui/Home/Newsletter";
import { CircleListContainerSkeleton, SquareListContainerSkeleton } from "../ui/skeletons/home";
import MusicContainer from "../ui/Home/MusicContainer";

const Page:FC = async () => {

  await new Promise(res => setTimeout(res, 3000))
  
  return (
    <>
      <div className="max-w-[1260px] px-12 mx-auto space-y-12">
        <Suspense fallback={<CircleListContainerSkeleton />}>
          <ArtistContainer heading="Top Artists" url='/artists' />
        </Suspense>
        <Suspense fallback={<SquareListContainerSkeleton />}>
          <EventsContainer />
        </Suspense>
        <Suspense fallback={<CircleListContainerSkeleton />}>
          <OrgContainer />
        </Suspense>
        <Suspense fallback={<SquareListContainerSkeleton />}>
          <MusicContainer />
        </Suspense>
        <NewsLetterJoin />
      </div>
      {/* </GlobalStyles> */}
    </>
  );
}

export default Page;