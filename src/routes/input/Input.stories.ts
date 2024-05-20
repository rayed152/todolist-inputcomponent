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
  leftAddon?: string;
  rightAddon?: string;
  backgroundColor?: string;
  slot?: string;
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
    backgroundColor: {
      control: "select",
      options: ["bg-green-400", "bg-red-200", "bg-white"],
    },
    roundedStyle: {
      control: "select",
      options: [
        "rounded",
        "rounded-full",
        "rounded-none",
        "rounded-2xl",
        "rounded-3xl",
      ],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Email: Story = {
  args: {
    value: "",
    placeholder: "Enter your Email",
    hint: "We will never share your email.",
    labelName: "Email",
    disabled: false,
    roundedStyle: "rounded-3xl",
    type: "email",
    backgroundColor: "bg-white",
  },
};

export const Password: Story = {
  args: {
    value: "",
    placeholder: "Enter your Password",
    hint: "We will never share your password.",
    labelName: "Password",
    disabled: false,
    roundedStyle: "rounded-2xl",
    type: "password",
    backgroundColor: "bg-white",
  },
};
