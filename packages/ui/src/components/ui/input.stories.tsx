import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled native input. It accepts standard HTML input props. Pair it with a visible label; use `aria-invalid` and `aria-describedby` to connect validation feedback.",
      },
    },
  },
  args: { placeholder: "Enter a value", onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
type InputArgs = ComponentProps<typeof Input>;

export const Playground: Story = {
  render: (args: InputArgs) => (
    <label className="grid w-80 gap-2 text-sm font-medium">
      Borrower name
      <Input {...args} />
    </label>
  ),
};

export const Email: Story = {
  render: () => (
    <label className="grid w-80 gap-2 text-sm font-medium">
      Contact email
      <Input type="email" placeholder="name@example.com" autoComplete="email" />
    </label>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <label htmlFor="invalid-email" className="text-sm font-medium">Contact email</label>
      <Input id="invalid-email" type="email" aria-invalid="true" aria-describedby="email-error" defaultValue="not-an-email" />
      <p id="email-error" className="text-sm text-destructive">Enter a valid email address.</p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <label className="grid w-80 gap-2 text-sm font-medium">
      Account reference
      <Input disabled value="LE-2048" readOnly />
    </label>
  ),
};

export const File: Story = {
  render: () => (
    <label className="grid w-80 gap-2 text-sm font-medium">
      Valuation report
      <Input type="file" accept="application/pdf" />
    </label>
  ),
};

export const LendingForm: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <label className="grid gap-2 text-sm font-medium">
        Borrower
        <Input placeholder="e.g. Marbury Construction" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Facility amount
        <Input inputMode="decimal" placeholder="$0.00" />
      </label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use visible labels and choose an appropriate native input type or inputMode for the expected data.",
      },
    },
  },
};
