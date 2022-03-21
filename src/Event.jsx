import styled, { keyframes } from "styled-components";
import React from 'react'
import { useMeasure } from "react-use";
import AnimatedListItem from './AnimatedListItem'

const Event = ({time,title,description,id,StartColor,EndColor,mobile,}) => {
  const [ref, {height}] = useMeasure();
  let rightSide = mobile ? false : id % 2 === 0;
  let timeline = (
    <div className="tl">
      {id > 1 && <div className="timeline"></div>}
      <div className="blob"></div>
    </div>
  );
  let content = (
    <div className={`content ${rightSide ? "content-left" : ""}`}>
      <h1>{title}</h1>
      <span>{time}</span>
      <span>{description}</span>
    </div>
  );
  let children = rightSide ? (<>{content} {timeline}</>) : (<>{timeline} {content}{" "}</>);
  return (
    <AnimatedListItem>
      <Wrapper StartColor={StartColor} EndColor={EndColor} mobile={mobile} ref={ref} heightPx={height}>
              {children}
      </Wrapper>
    </AnimatedListItem>
  );
};

const animationBezier = "cubic-bezier(0.770, 0.000, 0.175, 1.000)";

const timelineAnimation = props => keyframes`
    from {height: 0px;}
    to {height: ${props.heightPx - (20*2 + 30)}px;}
`;

const blobAnimation = (props) => keyframes`
    0% {
      transform: translate(0,0);
      background-color: ${props.StartColor};
    }
    10% {
        background-color: ${props.StartColor};
    }
    100%{
      background-color: ${props.EndColor};
      transform: translate(0,-${props.heightPx}px);
    }
`;


const Wrapper = styled.div`
  position: relative;
  filter: url("#goo");
  display: grid;
  grid-template-columns: ${(props) => props.mobile ? "65px 1fr" : "1fr 65px 1fr"};
  min-height: 100px;

  .tl {
    position: relative;
    grid-column-start: ${props => props.mobile ? "1" : "2"};
    height: 100%;
  }
  .content {
    font-size: 0.5em;
    font-family: sans-serif;
    color: white;
    grid-column-start: ${props => props.mobile ? "2" : "3"};
    height: 100%;
  }
  .content-left {
    grid-column-start: 1;
    text-align: right;
  }
  .timeline {
    left: calc(50% - 2px);
    width: 4px;
    border-radius: 4px;
    bottom: 15px;
    background: white;
    position: absolute;
    animation: ${timelineAnimation} 1.1s ${animationBezier} 1100ms both;
  }

  .blob {
    left: calc(50% - 20px);
    bottom: -40px;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    animation: ${blobAnimation} 2s ${animationBezier} 500ms both;
  }
`;

export default React.memo(Event);
