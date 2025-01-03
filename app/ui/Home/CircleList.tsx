import Link from "next/link";
import type { FC } from "react"
import ArtistCard from "./ArtistCard";
import { AtomicCard } from "@/app/Interfaces/components/Home";
import { artistTestList } from "@/app/tests";


const CircleList:FC = async () => {
    // const topArtists = await getTopArtists();
    const topArtists = artistTestList;
    await new Promise(res => setTimeout(res, 1500))
    return (
        <div className="flex flex-col md:flex-row space-y-6 space-x-0 md:space-x-10 md:space-y-0 items-start md:justify-center">
            {topArtists?.map((artist: AtomicCard, i: number) => (
                <Link key={i} href="/">
                    <ArtistCard img={artist.img} name={artist.name} />
                </Link>
            ))}
        </div>
    );
};

export default CircleList;