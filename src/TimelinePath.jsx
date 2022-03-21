import styled, {keyframes} from "styled-components";
import { animationBezier } from "./Utils";

const TimelinePath = ({startColor, endColor, heightPx, showPath}) => (
  <Wrapper {...{startColor, endColor, heightPx}}>
    {showPath && <div className="timeline"></div>}
    <div className="blob"></div>
  </Wrapper>
)  

const timelineAnimation = props => keyframes`
    from {height: 0px;}
    to {height: ${props.heightPx - (20*2 + 30)}px;}
`;

const blobAnimation = (props) => keyframes`
  0% {
    bottom: -40px;
    top: unset;
    transform: translate(0,0);
    background-color: ${props.startColor};
  }
  10% {
    top: unset;
    bottom: -40px;
    background-color: ${props.startColor};
  }
  100%{
    top: unset;
    bottom: -40px;
    background-color: ${props.endColor};
    transform: translate(0,-${props.heightPx}px);
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  
  & .timeline {
    left: calc(50% - 2px);
    width: 4px;
    height: calc(100% - 70px);
    border-radius: 4px;
    bottom: 15px;
    background: white;
    position: absolute;
    animation: ${timelineAnimation} 1.1s ${animationBezier} 1100ms backwards;
  }

  & .blob {
    left: calc(50% - 20px);
    top: 0;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${props => props.endColor};
    animation: ${blobAnimation} 2s ${animationBezier} 500ms backwards;
  }
`

export default TimelinePath;