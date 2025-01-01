import { FC, Suspense } from "react";
import ArtistContainer from "../ui/Home/CircleContainer";
import EventsContainer from "../ui/Home/EventsContainer";
// import OrgContainer from "../ui/Home/OrgContainer";
import NewsLetterJoin from "../ui/Home/Newsletter";
import { CircleListContainerSkeleton, SquareListContainerSkeleton } from "../ui/skeletons/home";

// import Navbar from "./Components/Nav";

const Page:FC = async () => {

  await new Promise(res => setTimeout(res, 2000))
  
  return (
    <>
      <div className="max-w-[1260px] px-12 mx-auto space-y-8">
        <Suspense fallback={<CircleListContainerSkeleton />}>
          <ArtistContainer heading="Top Artists" url='/artists' />
        </Suspense>
        <Suspense fallback={<SquareListContainerSkeleton />}>
          <EventsContainer />
        </Suspense>
        {/* <OrgContainer />
        <EventsContainer /> */}
        <NewsLetterJoin />
      </div>
      {/* </GlobalStyles> */}
    </>
  );
}

export default Page;