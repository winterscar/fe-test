import styled from "styled-components";
import React, {useLayoutEffect} from 'react'
import { useMeasure } from "react-use";
import AnimatedListItem from './AnimatedListItem'
import EventContent from "./EventContent";
import TimelinePath from "./TimelinePath";


const Event = ({details,startColor,endColor,mobile,showPath,side}) => {
  
  // This combination of useMeasure and UseEffect allows us to only run the animation once
  const [ref, {height}] = useMeasure();
  const [heightPx, setHeightPx] = React.useState(0);
  useLayoutEffect(() => {if (heightPx === 0) {setHeightPx(height)}}, [height])
  
  let children = [ (!mobile ? <div key={0}></div> : undefined),
                   <TimelinePath key={1} {...{startColor, endColor, heightPx, showPath}} />,
                   <EventContent key={2} {...details} {...{side}} />]

  return (
    <AnimatedListItem>
      <Wrapper {...{startColor, endColor, mobile, ref, heightPx}}>
              {side === 'right' ? children : children.reverse()}
      </Wrapper>
    </AnimatedListItem>
  );
};



const Wrapper = styled.div`
  position: relative;
  filter: url("#goo");
  display: grid;
  grid-template-columns: ${(props) => props.mobile ? "65px 1fr" : "1fr 65px 1fr"};
  min-height: 100px;
`;

export default React.memo(Event);
