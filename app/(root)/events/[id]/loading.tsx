export default function Loading() {
    return (
        <div className="max-w-screen-lg mx-2 lg:mx-auto space-y-3 sm:space-y-5 mt-14">
            <div className="max-w-screen-lg md:mx-auto rounded-md py-6 px-4 sm:p-8 shadow-secondaryShadow animate-pulse">
                <div className="w-full h-72 sm:h-[390px] md:h-[450px] overflow-hidden rounded-lg justify-center items-center relative bg-gray-200"/>
                <div className=" divide-y-2 divide-[#00000033] space-y-3 mt-7">
                <div className=" flex flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                    <div className="space-y-4 w-72">
                        <div className="text-2xl md:text-4xl font-bold h-10 bg-gray-200 rounded-sm w-[80%]"/>
                        <div className="flex items-center justify-start h-7">
                            <span className="mr-3 bg-gray-200 w-3/6 h-full rounded-sm"/>
                            <span className="mx-3 bg-gray-200 w-2/6 h-full rounded-sm"/>
                            <span className="ml-3 bg-gray-200 w-2/6 h-full rounded-sm "/>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-sm h-14 w-32" />
                </div>
                <div className="pt-3 space-y-4 md:space-y-1">
                    <div className="flex flex-col sm:flex-row justify-start items-start md:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-96">
                        <div className="h-7 flex justify-start items-center space-x-3 grow ">
                            <span className="bg-gray-200 h-full w-full"/>
                            <div className="flex items-center space-x-1 bg-gray-200 h-full w-3/6"/>
                        </div>
                        <div className="sm:pl-3 h-7 bg-gray-200 w-2/6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6 sm:space-y-0 bg-white shadow-secondaryShadow rounded-lg ">
                <div className="col-span-2 p-3 md:p-5 ">
                    <div className="flex flex-col sm:flex-row justify-between h-max">
                        <div className="space-y-5 grow">
                            <div className="text-[#000000CC] text-lg sm:text-xl md:text-2xl font-bold">Artists</div>
                            {/* <Artist /> */}
                            <div className="space-y-4 animate-pulse">
                                <div className="w-[80%] h-10 bg-gray-200" />
                                <div className="w-[40%] h-7 bg-gray-200"  />
                                <div className="w-[40%] h-7 bg-gray-200" />
                                <div className="w-[40%] h-7 bg-gray-200" />
                            </div>
                        </div> 
                        <div className="h-[1.5px] w-full sm:h-64 sm:w-[1.5px] bg-slate-600 rounded mt-6"/>
                    </div>
                </div>
                <div className="col-span-4 space-y-3 p-4 sm:p-5 animate-pulse">
                    {/* <ArtistInfo/> */}
                    <div className="bg-gray-200 h-5 w-full" />
                    <div className="bg-gray-200 h-5 w-[90%]" />
                    <div className="bg-gray-200 h-5 w-[75%]" />
                </div>
            </div>
            <div className="col-span-4 sm:p-5 p-4 rounded-lg shadow-secondaryShadow animate-pulse space-y-7">
                <div className="h-8 w-28 bg-gray-200 rounded-sm"/>
                {/* <Suggestions /> */}
                <div className="flex space-x-4 justify-around items-center">
                        <div className="col-span-1 size-44 bg-gray-200" />
                    
                        <div className="col-span-1 size-44 bg-gray-200" />
                    
                        <div className="col-span-1 size-44 bg-gray-200" />
                </div>
            </div>
        </div>
    )
}