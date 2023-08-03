import React, { FC } from "react";
import styled from "styled-components";

interface SeparatorProps {
    opacity?: string;
    width?: string;
    height?: string;
    margin?: string;
    backgroundColor?: string;
    shadow?: boolean;
}

const SeparatorOverlay = styled.div<any>`
    content: "";
    opacity: ${({ opacity }) => opacity || 1};
    width: 100%;
    max-width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "1px"};
    margin: ${({ margin }) => margin || "0 auto"};
    background-color: ${({ backgroundColor }) => backgroundColor || "#ededed"};
    box-shadow: ${({ shadow }) =>
        shadow ? "0px -11px 9px 0px rgba(0, 0, 0, 0.35)" : "none"};
`;

const Separator: FC<SeparatorProps> = ({
    opacity,
    width,
    height,
    margin,
    backgroundColor,
    shadow,
}) => {
    return (
        <SeparatorOverlay
            opacity={opacity}
            width={width}
            height={height}
            margin={margin}
            backgroundColor={backgroundColor}
            shadow={shadow}
        />
    );
};

export default Separator;
