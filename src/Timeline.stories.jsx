import React from "react";
import Timeline from "./Timeline";
import { loremIpsum } from "lorem-ipsum";

export default {
  title: "Components/Timeline",
  component: Timeline,
};

const events = [
  {
    time: "10:00",
    title: "Registration",
    description: "Registration is open!",
    id: 1,
  },
  {
    time: "10:30",
    title: "Opening",
    description: "Welcome to the conference!",
    id: 2,
  },
  // {time: '11:00', title: 'Keynote', description: 'This is the keynote!'},
  // {time: '12:00', title: 'Lunch', description: 'Lunch is served!'},
  // {time: '14:00', title: 'Networking', description: 'Networking is served!'}
];

const addMinute = (currentTime) => {
  currentTime = currentTime ? currentTime : "10:00";
  const [hours, minutes] = currentTime.split(":");
  const newMinutes = parseInt(minutes) + 1;
  return `${hours}:${newMinutes}`;
};

const randString = () => Math.random().toString(36).substring(7);
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addEvent = (to) => {
  const latestEvent = to[to.length - 1];
  to.push({
    time: addMinute(latestEvent?.time),
    title: loremIpsum({ count: randInt(1, 5) , units: "words" }),
    description:  loremIpsum({ count: randInt(5, 500) , units: "words" }),
    id: to.length + 1
  });
};

const Harness = () => {
  const [events, setEvents] = React.useState([]);
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
      <Timeline events={events} />
    </div>
  );
};

export const TimelineHarness = Harness;
