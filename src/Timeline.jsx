import Event from "./Event";
import { randColor } from "./Utils";

const GooFilter = () => (
  <svg
    style={{ display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
);

const Timeline = ({ events }) => {
  events = events.sort((a, b) => b.id - a.id)
           .filter((_, i) => i < 5);
  return (
    <>
      <GooFilter />
      <div style={{ filter: "url('#goo')"}}>
        {events.map((event, i) => {
          console.log(event);
          let startColor = randColor(event.id-1);
          let endColor = randColor(event.id)
          console.log(`startColor: ${startColor} | endColor: ${endColor}`);
          
          return (
            <Event
              key={event.id}
              {...event}
              StartColor={startColor}
              EndColor={endColor}
              mobile={true}
            />
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
