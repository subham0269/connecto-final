function Heading() {
    return (
        <div>
            <div className="flex justify-between items-center w-full h-7">
                <div className="w-36 h-full bg-gray-200" />
                <div className="w-10 h-full bg-gray-200 rounded-md" />
            </div>
        </div>
    )
}

export function CircleImgSkel() {
    return (
        <div className="rounded-full size-36 bg-gray-200" />
    )
}

export function SquareimgSkel () {
    return (
        <div className="rounded-sm size-64 bg-gray-200" />
    )
}

export function CircleList () {
    return (
        <div className="h-full flex justify-center md:space-x-10">
            <CircleImgSkel />
            <CircleImgSkel />
            <CircleImgSkel />
            <CircleImgSkel />
            <CircleImgSkel />
            <CircleImgSkel />
        </div>
    )
}

export function CircleListContainerSkeleton () {
    
    return (
        <div className="w-full space-y-4 animate-pulse">
            <Heading />
            <div className="h-full flex justify-center md:space-x-10">
                <CircleImgSkel />
                <CircleImgSkel />
                <CircleImgSkel />
                <CircleImgSkel />
                <CircleImgSkel />
                <CircleImgSkel />
            </div>
        </div>
    )
}

export function SquareListContainerSkeleton () {
    return (
        <div className="w-full h-96 space-y-4 animate-pulse">
            <Heading />
            <div className="h-full flex justify-center md:space-x-10">
                <SquareimgSkel />
                <SquareimgSkel />
                <SquareimgSkel />
                <SquareimgSkel />
            </div>
        </div>
    )
}