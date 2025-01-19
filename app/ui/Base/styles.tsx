'use client'
import styled from "styled-components";

const StyledSection = styled.section `
    > * + * {
        margin-top: 1rem;
    }
`;

export { StyledSection };