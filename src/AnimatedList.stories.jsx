import React from "react";
import AnimatedListItem from "./AnimatedListItem";
import { loremIpsum } from "lorem-ipsum";
import { useState } from "react";

export default {
  title: "Components/AnimatedList",
  component: AnimatedListItem,
};


export const AnimatedList = () => {
  const [lorum, _] = useState(loremIpsum({ count: 325, units: "words" }));


  return (
    <AnimatedListItem>
      <p>{lorum}</p>
    </AnimatedListItem>
  )
}
