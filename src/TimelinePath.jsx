import styled, {keyframes} from "styled-components";
import { animationBezier } from "./Utils";

// The radius of the blob
const radius = 24; // px

const TimelinePath = ({startColor, endColor, heightPx, showPath}) => (
  <Wrapper {...{startColor, endColor, heightPx}}>
    {showPath && <div className="timeline"></div>}
    <div className="blob"></div>
  </Wrapper>
)  

const timelineAnimation = props => keyframes`
  from {height: 0px;}
  to {height: ${props.heightPx - (radius + 2*15)}px;}
`;

const blobAnimation = (props) => keyframes`
  0% {
    bottom: -${radius}px;
    top: unset;
    transform: translate(0,0);
    background-color: ${props.startColor};
  }
  10% {
    top: unset;
    bottom: -${radius}px;
    background-color: ${props.startColor};
  }
  100%{
    top: unset;
    bottom: -${radius}px;
    background-color: ${props.endColor};
    transform: translate(0,-${props.heightPx}px);
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  
  & .timeline {
    left: calc(50% - 4px);
    width: 4px;
    height: calc(100% - ${radius + 2*15}px);
    border-radius: 4px;
    bottom: 15px;
    background: white;
    position: absolute;
    animation: ${timelineAnimation} 1.1s ${animationBezier} 1100ms backwards;
  }

  & .blob {
    left: calc(50% - 15px);
    top: 0;
    position: absolute;
    width: ${radius}px;
    height: ${radius}px;
    border-radius: 100%;
    background-color: ${props => props.endColor};
    animation: ${blobAnimation} 2s ${animationBezier} 500ms backwards;
  }
`

export default TimelinePath;