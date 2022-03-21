import { useMeasure } from "react-use";
import styled, { keyframes, css } from "styled-components";

const AnimatedListItem = ({children}) => {
  const [ref, {height}] = useMeasure();
  return (
    <Wrapper heightPx={height}>
      <div ref={ref}>
        {children}
      </div>
    </Wrapper>
  );
};

const wrapperAnimation = props => keyframes`
    0% {height: 0px; opacity: 0;}
    50% {height: ${props.heightPx}px; opacity: 0;}
    100% {height: ${props.heightPx}px; opacity: 1;}
`;

const Wrapper = styled.div`
  ${props => props.heightPx && css`animation: ${wrapperAnimation} 0.5s ease-in-out both;`}
`

export default AnimatedListItem;