import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';

interface SomeProps {
    text: string;
}

export const SomeComponent: React.FC<SomeProps> = ({text}) => (
    <Button>{text} <Icon name='smile'/></Button>
);