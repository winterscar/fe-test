import React from "react";
import Timeline from "./Timeline";

export default {
  title: "Components/Timeline",
  component: Timeline,
};

const events = [
    {time: '10:00', title: 'Registration', description: 'Registration is open!', id:1},
    {time: '10:30', title: 'Opening', description: 'Welcome to the conference!', id:2},
    // {time: '11:00', title: 'Keynote', description: 'This is the keynote!'},
    // {time: '12:00', title: 'Lunch', description: 'Lunch is served!'},
    // {time: '14:00', title: 'Networking', description: 'Networking is served!'}
]

// Create a master template for mapping args to render the Timeline component
const Template = (args) => <Timeline {...args} />;


export const BasicTimeline = Template.bind({});
BasicTimeline.args = { events: events };
