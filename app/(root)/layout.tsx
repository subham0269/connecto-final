import { ReactNode } from "react";
import Navbar from "../ui/Nav";
import Footer from "../ui/Footer";

export default function HomeLayout ({children} : Readonly<{children:ReactNode}>) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}