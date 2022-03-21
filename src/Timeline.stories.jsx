import React from "react";
import Timeline from "./Timeline";
import { loremIpsum } from "lorem-ipsum";
import { useInterval } from "react-use";

export default {
  title: "Components/Timeline",
  component: Timeline,
};

const addMinute = (currentTime) => {
  currentTime = currentTime ? currentTime : "10:00";
  const [hours, minutes] = currentTime.split(":");
  const newMinutes = parseInt(minutes) + 1;
  return `${hours}:${newMinutes}`;
};

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addEvent = (to) => {
  const latestEvent = to[to.length - 1];
  to.push({
    time: addMinute(latestEvent?.time),
    title: loremIpsum({ count: randInt(1, 5) , units: "words" }),
    description:  loremIpsum({ count: randInt(5, 100) , units: "words" }),
    id: to.length + 1
  });
};

const Harness = (args) => {
  const [events, setEvents] = React.useState([]);
  let {mobile} = args;

  // useInterval(
  //   () => {
  //     addEvent(events);
  //     setEvents([...events].filter((_, i) => i < 5));
  //   }, 5000
  // )

  return (
    <div style={{backgroundColor: "#1E293B"}}>
      <button
        onClick={() => {
          addEvent(events);
          setEvents([...events]);
        }}
      >
        Add Event
      </button>
      <Timeline events={events} mobile={mobile} />
    </div>
  );
};

export const TimelineHarness = Harness.bind({});
TimelineHarness.args = {
  mobile: false
};
