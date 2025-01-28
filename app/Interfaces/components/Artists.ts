import { StaticImageData } from "next/image";

export interface Banner {
    src: StaticImageData;
}

export interface Ratings {
    Rate: number;
}

export interface EventsListArtist {
    artistName: string;
}