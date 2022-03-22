import { loremIpsum } from "lorem-ipsum";
/**
    Generates a random pastel color.
    The luminance and saturation are fixed to produce a nice pastel color.
    @param {number} hueSeed - Seed for the hue. Seeds increasing by 1 produce
           colors that form a gradient. The color wraps around after a seed of
           72
    @returns An HSL(...) string for use in CSS
**/
const randColor = (hueSeed) => {
    let hue = (hueSeed * 15) % 360;
    let luminance = '80';
    let saturation = '100';
    return `hsl(${hue}, ${saturation}%, ${luminance}%)`;
}

/**
 * Generates a random integer between min and max
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns A random integer between min and max
**/
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Creates a random event
 * with the provided id.
 * @param {number} id - The id of the event
 * @returns An object with time, title, description, and id keys
**/
const makeEvent = (id) => (
  {
    time: new Date(),
    title: loremIpsum({ count: randInt(1, 5) , units: "words" }),
    description:  loremIpsum({ count: randInt(5, 50) , units: "words" }),
    id: id
  }
);

const animationBezier = "cubic-bezier(0.770, 0.000, 0.175, 1.000)";

export { randColor, randInt, makeEvent, animationBezier };