import type { Meta, StoryObj } from "@storybook/svelte";
import Input from "../../components/Input.svelte";

// Define the props type
type InputProps = {
  value: string;
  placeholder: string;
  hint?: string;
  labelName?: string;
  disabled?: boolean;
  roundedStyle?: string;
  type?: string;
};

// Define the Meta type with InputProps
const meta: Meta<InputProps> = {
  title: "Input Component",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    labelName: { control: "text" },
    disabled: { control: "boolean" },
    roundedStyle: {
      control: "select",
      options: ["rounded", "rounded-full", "rounded-none"],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

// Primary story for the Input component
export const Primary: Story = {
  args: {
    value: "",
    placeholder: "Enter your email",
    hint: "We will never share your email.",
    labelName: "Email",
    disabled: false,
    roundedStyle: "rounded",
    type: "email",
  },
};

// Additional stories can be added if needed
// export const Secondary: Story = {
//   args: {
//     value: '',
//     placeholder: 'Enter your name',
//     hint: 'This is a required field.',
//     labelName: 'Name',
//     disabled: false,
//     roundedStyle: 'rounded-full',
//     type: 'text',
//   },
// };
