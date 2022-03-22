import { useMeasure } from "react-use";
import {useLayoutEffect, useState} from 'react'
import styled, { keyframes, css } from "styled-components";

const AnimatedListItem = ({children}) => {
  
  // This combination of useMeasure and UseEffect allows us to only run the animation once
    const [ref, {height}] = useMeasure();
    const [initialHeight, setInitialHeight] = useState(0);
    useLayoutEffect(() => {if (initialHeight === 0) {setInitialHeight(height)}}, [height])

    return (
      <Wrapper heightPx={initialHeight}>
        <div ref={ref}>
          {children}
        </div>
      </Wrapper>
    );
};

const wrapperAnimation = props => keyframes`
    0% {height: 0px; opacity: 0;}
    99% {height: ${props.heightPx}px; opacity: 0;}
    100% {height: ${props.heightPx}px; opacity: 1;}
`;

const Wrapper = styled.div`
  ${props => props.heightPx && css`animation: ${wrapperAnimation} 0.5s ease-in-out backwards;`}
`

export default AnimatedListItem;