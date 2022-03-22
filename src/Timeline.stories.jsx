import React from "react";
import Timeline from "./Timeline";
import { useInterval } from "react-use";
import styled from "styled-components";
import { makeEvent } from "./Utils";

export default {
  title: "Components/Timeline",
  component: Timeline,
};

/**
 * Add an Event to the list of events.
 * @param {[]} events An array of event objects. Must have an ID property.
 * @param {() => void} setEvents A function to call with the upserted array of events.
 * @param {number} Eventlimit The maximum number of events to show. If the number of events is greater than this, the oldest events will be removed.
 */
const addEvent = (events, setEvents, Eventlimit) => {
  const id = (events[events.length - 1]?.id + 1) || 0; // monotinically increasing id
  while (events.length > Eventlimit - 1) {events.shift()}; // remove first element if more than limit
  setEvents([...events, makeEvent(id)]);
}

/**
 * Test Harness for the Timeline component. The harness generates a
 * new event on a timer, and allows you to visualize both mobile and desktop
 * versions of the timeline.
 * @param {boolean} mobile Should the timeline be displayed in mobile mode?
 * @param {number} eventLimit The maximum number of events to show.
 * @param {number} addItemFrequencyMs How often to add a new event (in milliseconds).
 * @returns {React.Component} A react component
 */
const Harness = ({mobile, eventLimit, addItemFrequencyMs}) => {
  const [events, setEvents] = React.useState([]);

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

export const Desktop = Harness.bind({});
Desktop.args = {
  mobile: false,
  eventLimit: 5,
  addItemFrequencyMs: 5000
};

export const Mobile = Harness.bind({});
Mobile.args = {
  mobile: true,
  eventLimit: 5,
  addItemFrequencyMs: 5000
};