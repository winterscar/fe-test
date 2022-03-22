import React from "react";
import Timeline from "./Timeline";
import { loremIpsum } from "lorem-ipsum";
import { useInterval } from "react-use";
import styled from "styled-components";

export default {
  title: "Components/Timeline",
  component: Timeline,
};

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeEvent = (id) => (
  {
    time: new Date(),
    title: loremIpsum({ count: randInt(1, 5) , units: "words" }),
    description:  loremIpsum({ count: randInt(5, 50) , units: "words" }),
    id: id
  }
);

const addEvent = (events, setEvents, Eventlimit) => {
  const id = (events[events.length - 1]?.id + 1) || 0; // monotinically increasing id
  while (events.length > Eventlimit - 1) {events.shift()}; // remove first element if more than limit
  setEvents([...events, makeEvent(id)]);
}

const Harness = (args) => {
  const [events, setEvents] = React.useState([]);
  let {mobile, eventLimit, addItemFrequencyMs} = args;

  useInterval(() => {addEvent(events, setEvents, eventLimit)}, addItemFrequencyMs)

  return (
    <TimelineWrapper>
      <Timeline events={events} mobile={mobile} />
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`

export const TimelineHarness = Harness.bind({});
TimelineHarness.args = {
  mobile: false,
  eventLimit: 5,
  addItemFrequencyMs: 5000
};
