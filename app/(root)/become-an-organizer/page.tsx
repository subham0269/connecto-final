import Button from "@/app/ui/Base/PrimaryBtn";
import { FC } from "react";

const BecomeAnOrg:FC = () => {
    return (
        <div className="mt-10 max-w-screen-xl mx-auto space-y-5 px-2 sm:px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Become an Organizer</h1>
            <div className="bg-white shadow-secondaryShadow p-4 md:p-7 space-y-4">
                <h2 className="h-6 animate-pulse bg-gray-300 w-[30%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[80%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[65%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[70%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[80%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[65%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[70%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[80%]" />
                <p className="h-4 animate-pulse bg-gray-200 w-[70%]" />
                <p className="h-4 animate-pulse bg-gray-200" />
                <p className="h-4 animate-pulse bg-gray-200" />
                <Button className="block justify-self-end" text="Get Started" />
            </div>
        </div>
    )
}
export default BecomeAnOrg;