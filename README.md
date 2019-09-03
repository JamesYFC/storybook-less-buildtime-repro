# Storybook Less BuildTime Repro

**Don't use this for an actual project! This is just a quick repro of an issue I'm experiencing.**

CRA + semantic-ui-react, fomantic-ui-less, craco, and storybook.

The steps taken roughly followed these two:
- [storybook + cra-ts](https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568)
- [semantic/fomantic less theming](https://react.semantic-ui.com/theming#theming-with-create-react-app)

## Starting

1. `yarn install`
2. run `yarn storybook`, semantic.less will take a long time to load with less-loader.
(optional) 3. run `yarn build`, note build times with @semantic-ui-react/craco-less
