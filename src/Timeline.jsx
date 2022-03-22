import Event from "./Event";
import { randColor } from "./Utils";


/**
 * This filter is used to create a goo effect on the timeline. It blurs
 * together adjacent elements.
 * @returns {React.Component} An SVG filter
 */
 const DripFilter = () => (
  <svg
    style={{ display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="drip">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="gaus" />
        <feColorMatrix
          in="gaus"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="drip"
        />
        <feBlend in="SourceGraphic" in2="drip" />
      </filter>
    </defs>
  </svg>
);

/**
 * 
 * @param {[]} events An array of events, in order. Events must have an ID property, which is used
 *  to determine the side of the event in desktop mode.
 * @param {boolean} mobile Should the timeline be displayed in mobile mode?
 * @returns {React.Component} The timeline control.
 */
const Timeline = ({ events, mobile }) => {
  // Create a copy of the array (reverse is in place), 
  // and reverse it so that we show events top to bottom.
  events = [...events].reverse();
  return (
    <>
      <DripFilter />
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
