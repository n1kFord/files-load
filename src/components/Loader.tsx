import { FC } from "react";
import { keyframes, styled } from "styled-components";
import loaderImg from "../vendor/img/loading.svg";

interface LoaderProps {
    isLoading: boolean;
    opacity?: string;
    width?: string;
    height?: string;
    margin?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderOverlay = styled.img<any>`
    display: ${({ isLoading }) => (isLoading ? "block" : "none")};
    opacity: ${({ opacity }) => opacity || 1};
    width: ${({ width }) => width || "27px"};
    height: ${({ height }) => height || "27px"};
    margin: ${({ margin }) => margin || "0 auto"};
    animation: ${spin} 2s linear infinite;
`;

const Loader: FC<LoaderProps> = ({
    isLoading,
    opacity,
    width,
    height,
    margin,
}) => {
    return (
        <LoaderOverlay
            alt="loading"
            src={loaderImg}
            isLoading={isLoading}
            opacity={opacity}
            width={width}
            height={height}
            margin={margin}
        />
    );
};

export default Loader;
