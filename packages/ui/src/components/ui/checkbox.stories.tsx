import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accessible checkbox built on Radix UI. It supports controlled and uncontrolled state, disabled state, and the indeterminate value. Associate it with a visible label.",
      },
    },
  },
  args: { onCheckedChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Indeterminate: Story = { args: { checked: "indeterminate" } };

export const Disabled: Story = {
  render: () => (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox checked disabled />
      This condition has already been verified
    </label>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="grid gap-2">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox aria-invalid="true" aria-describedby="consent-error" />
        I confirm the information is accurate
      </label>
      <p id="consent-error" className="text-sm text-destructive">Confirmation is required.</p>
    </div>
  ),
};

export const LendingCondition: Story = {
  render: () => (
    <label className="flex max-w-sm items-start gap-3 rounded-lg border p-4 text-sm">
      <Checkbox className="mt-0.5" />
      <span className="grid gap-1">
        <span className="font-medium">Insurance certificate received</span>
        <span className="text-muted-foreground">Mark this condition complete after reviewing the uploaded document.</span>
      </span>
    </label>
  ),
};
