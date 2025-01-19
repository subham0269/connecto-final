import { FC, ReactNode } from "react";
import { StyledHome } from "./styles";

interface ReactChildProps {
    children: ReactNode
}

const HomeWrapper:FC<ReactChildProps> =  ({children}) => {
    return (
        <StyledHome>{children}</StyledHome>
    )
}


export { HomeWrapper};

// export default function SectionWrapper ({children} : )