# Storybook Less BuildTime Repro

**Don't use this for an actual project! This is just a quick repro of an issue I'm experiencing.**

CRA + semantic-ui-react, fomantic-ui-less, craco, and storybook.

## Starting

1. `yarn install`
2. run `yarn build`, note build times
3. run `yarn storybook`, semantic.less will take a long time to load with less-loader.
