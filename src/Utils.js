/*
    Generates a random pastel color.
    The luminance and saturation are fixed to produce a nice pastel color.
    param: hueSeed - Seed for the hue. Seeds increasing by 1 produce
           colors that form a gradient. The color wraps around after a seed of
           72
    returns: A string in the form 
*/
const randColor = (hueSeed) => {
    let hue = (hueSeed * 15) % 360;
    let luminance = '80';
    let saturation = '100';
    return `hsl(${hue}, ${saturation}%, ${luminance}%)`;
}

const animationBezier = "cubic-bezier(0.770, 0.000, 0.175, 1.000)";

export { randColor, animationBezier };