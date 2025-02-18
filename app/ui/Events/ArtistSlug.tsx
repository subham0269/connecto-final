import Link from "next/link";
import Image from "next/image";
import xICON from '@/public/Images/Events/x.svg';
import snapICON from '@/public/Images/Events/Snapchat.svg';
import instaICON from '@/public/Images/Events/Instagram.svg';


const Artist = () => {
    return (
    <>
        <div className="flex items-center justify-start space-x-4">
            <div className="size-24 rounded-full bg-slate-100">
                {/* <Image width={100} height={100} src="" className="size-24" loading="lazy" alt="artist-img" /> */}
            </div>
            <span className="text-[#000000BF] text-xl font-semibold">Taylor Swift</span>
        </div>
        <ul className="space-y-3">
            <li>
                <Link href="/" className="flex items-center justify-start space-x-2 group">
                    <Image width={100} height={100} quality={100} src={instaICON} className="size-7" loading="lazy" alt="Instagram-logo" />
                    <span className="group-hover:underline">@taylorswift</span>
                </Link>
            </li>
            <li>
                <Link href={"/"} target="_blank" className="flex items-center justify-start space-x-2 group">
                    <Image width={100} height={100} src={xICON} className="size-7" loading="lazy" alt="x-logo" />
                    <span className="group-hover:underline">taylorrr</span>
                </Link>
            </li>
            <li>
                <Link href={"/"} target="_blank" className="flex items-center justify-start space-x-2 group">
                    <Image width={100} height={100} src={snapICON} className="size-7" loading="lazy" alt="snapchat-logo" />
                    <span className="group-hover:underline">taylorsnaps</span>
                </Link>
            </li>
        </ul>
    </>
    )
}
export default Artist;