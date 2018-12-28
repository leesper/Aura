import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/button';

storiesOf('Button', module)
  .add('with name', () => <Button name="Hello Button" />);
