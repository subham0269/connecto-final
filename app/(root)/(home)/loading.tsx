import { CircleListContainerSkeleton, NewsLetterSkeleton, SquareListContainerSkeleton } from "../../ui/skeletons/home";

export default function Loading() {
    return (
        <div className="max-w-[1260px] px-12 mx-auto space-y-12">
            <CircleListContainerSkeleton />
            <SquareListContainerSkeleton />
            <CircleListContainerSkeleton />
            <SquareListContainerSkeleton />
            <NewsLetterSkeleton />
        </div>
    )
}