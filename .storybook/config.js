import { configure, addDecorator } from '@storybook/react';
import 'fomantic-ui-less/semantic.less';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(withInfo);

configure(loadStories, module);