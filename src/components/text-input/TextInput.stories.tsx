import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { TextInput, TextInputRoot } from './TextInput';

export default {
  title: 'Components/Text Input',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type you email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRoot>;

export const Default: StoryObj<TextInputRoot> = {};

export const WithoutIcon: StoryObj<TextInputRoot> = {
  args: {
    children: <TextInput.Input placeholder="Type you email" />,
  },
};
