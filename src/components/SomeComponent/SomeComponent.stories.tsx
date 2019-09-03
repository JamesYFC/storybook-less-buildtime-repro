import * as React from 'react';
import { SomeComponent } from '../SomeComponent/SomeComponent';
import { storiesOf } from '@storybook/react';

storiesOf('Test/SomeComponent', module)
    .add('default', () => <SomeComponent/>)