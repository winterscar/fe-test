import React, { useRef, useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Event = ({
  time,
  title,
  description,
  id,
  StartColor,
  EndColor,
  mobile,
}) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  console.log(`dimensions: ${JSON.stringify(dimensions)}`);
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    console.log(targetRef);
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
      console.log(targetRef.current.offsetHeight)
    }
  }, []);
  let rightSide = id % 2 === 0;
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
    <Wrapper ref={targetRef} StartColor={StartColor} EndColor={EndColor} mobile={mobile} dimensions={dimensions}>
      {children}
    </Wrapper>
  );
};

const animationBezier = "cubic-bezier(0.770, 0.000, 0.175, 1.000)";

const timelineAnimation = keyframes`
    from {height: 0px;}
    to {height: 40px;}
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
      transform: translate(0,-100px);
    }
`;

const wrapperAnimation = props => keyframes`
    ${console.log(props.dimensions)}
    0% {height: 0px; opacity: 0;}
    50% {height: ${props.dimensions.height}; opacity: 0;}
    100% {height: ${props.dimensions.height}; opacity: 1;}
`;

const Wrapper = styled.div`
  position: relative;
  filter: url("#goo");
  animation: ${wrapperAnimation} 0.5s ${animationBezier} ${props => props.dimensions.height ? 
                        `both` : ''};
  display: grid;
  grid-template-columns: ${(props) =>
    props.mobile ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))"};

  .tl {
    position: relative;
    grid-column-start: 2;
    min-height: 100px;
  }
  .content {
    font-size: 0.5em;
    font-family: sans-serif;
    color: white;
    grid-column-start: 3;
  }
  .content-left {
    grid-column-start: 1;
  }
  .timeline {
    width: 4px;
    border-radius: 3px;
    bottom: 10px;
    background: white;
    position: absolute;
    animation: ${timelineAnimation} 1.1s ${animationBezier} 1100ms both;
  }

  .blob {
    bottom: -40px;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    animation: ${blobAnimation} 2s ${animationBezier} 500ms both;
  }
`;

export default React.memo(Event);
