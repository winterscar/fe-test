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

const Timeline = ({ events, mobile }) => {
  // Create a copy of the array (reverse is in place), 
  // and reverse it so that we show events top to bottom.
  events = [...events].reverse();
  return (
    <>
      <GooFilter />
      <div style={{ filter: "url('#goo')"}}>
        {events.map((details, i) => {
          let id = details.id
          let side = (mobile || id % 2 === 0) ? "right" : "left";
          let startColor = randColor(id-1);
          let endColor = randColor(id)
          
          return (
            <Event 
              key={id}
              {...{details, startColor, endColor, mobile, side}}
              showPath={!(i === events.length - 1)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
