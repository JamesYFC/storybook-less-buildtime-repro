import { configure, addDecorator } from '@storybook/react';
import 'fomantic-ui-less/semantic.less';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);