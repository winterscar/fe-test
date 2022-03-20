import Event from "./Event";

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
  events = events.sort((a, b) => b.id - a.id);
  return (
    <>
      <GooFilter />
      <div style={{ filter: "url('#goo')" }}>
        {events.map((event, i, all) => {
          console.log(event);
          let startColor = all[i + 1]?.color || "red";
          let endColor = event.color;
          console.log(`startColor: ${startColor} | endColor: ${endColor}`);
          
          return (
            <Event
              key={event.id}
              {...event}
              StartColor={startColor}
              EndColor={endColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
