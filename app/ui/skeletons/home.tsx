function Heading() {
    return (
        <div>
            <div className="flex justify-between items-center w-full h-7">
                <div className="w-36 h-full bg-gray-200 rounded-sm" />
                <div className="w-10 h-full bg-gray-200 rounded-sm" />
            </div>
        </div>
    )
}

export function CircleImgSkel() {
    return (
        <div className="rounded-full size-36 bg-gray-200" />
    )
}


export function CircleListSkeleton () {
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

export function SquareimgSkel () {
    return (
        <div className="rounded-sm size-64 bg-gray-200" />
    )
}

export function SquareListSkeleton () {
    return (
        <div className="h-full flex justify-center md:space-x-10">
            <SquareimgSkel />
            <SquareimgSkel />
            <SquareimgSkel />
            <SquareimgSkel />
        </div>
        
    )
}

export function CircleListContainerSkeleton () {
    
    return (
        <div className="w-full space-y-4 animate-pulse">
            <Heading />
            <CircleListSkeleton />
        </div>
    )
}

export function SquareListContainerSkeleton () {
    return (
        <div className="w-full space-y-4 animate-pulse">
            <Heading />
            <SquareListSkeleton />
        </div>
    )
}

export function NewsLetterSkeleton () {
    return (
        <div className="bg-gray-300 animate-pulse flex justify-around items-center py-10 rounded-md">
            <div className="animate-pulse space-y-12 w-[50%]">
                <div className="space-y-5 w-full">
                    <div className="h-10 w-[90%] bg-gray-200" />
                    <div className="h-6 w-[56%] bg-gray-200" />
                    <div className="h-6 w-[53%] bg-gray-200" />
                </div>
                <div className="flex items-center space-x-4 pr-7">
                <div className="bg-gray-200 grow h-8"/>
                <div  className="bg-gray-200 w-1/6 h-8"/>
                </div>
            </div>
            <div className="size-80 bg-gray-200" />
        </div>
    )
}