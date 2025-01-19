// import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


const Suggestions:FC = () => {
    return (
        <>
            {/* <div className="text-[#000000CC] text-xl font-bold">You may also like</div> */}
            <div className="flex space-x-4 justify-around items-center">
                <Link href={'/'}>
                    <div className="size-64 bg-gray-200" />
                    {/* <Image className="col-span-1" src="" alt="event-poster" /> */}
                </Link>
                <Link href={'/'}>
                    <div className="size-64 bg-gray-200" />
                    {/* <Image className="col-span-1" src="" alt="event-poster" /> */}
                </Link>
                <Link href={'/'}>
                    <div className="size-64 bg-gray-200" />
                    {/* <Image className="col-span-1" src="" alt="event-poster" /> */}
                </Link>
            </div>
        </>
    )
}

export default Suggestions;