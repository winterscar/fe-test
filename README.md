# React Timeline

This library contains a react timeline adhering to the spec defined in [SPEC.md](doc/SPEC.md).
This project uses [Storybook.js](https://storybook.js.org/) for state visualization.

## See it live
You can interact with the timeline at the example site [here](https://eclectic-seahorse-b57655.netlify.app/?path=/story/components-timeline--desktop)

## Known limitations
- Transitions from desktop <-> mobile and vice versa are not great, because animations re-trigger on the re-rendered components
- The goo effect applies to the entire component. Ideally this would be applied only to timeline segments for both performance and to avoid visual artifacts on larger font sizes.

## Local Development
You can get started working on this library by running the following commands:

```
npm i && npm run storybook
```
