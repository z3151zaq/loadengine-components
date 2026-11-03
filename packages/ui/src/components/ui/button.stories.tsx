import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Plus, Save, Trash2 } from "lucide-react";
import { fn } from "storybook/test";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Actions for submitting, navigating, and managing records. Use `variant` to communicate action priority and `size` to fit the available space. Icon-only buttons need an accessible name, such as `aria-label`.",
      },
    },
  },
  args: { children: "Button", onClick: fn() },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
      description: "Visual treatment for the action.",
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      description: "Button dimensions. Icon sizes are for icon-only controls.",
    },
    loading: {
      control: "boolean",
      description: "Shows progress, sets `aria-busy`, and disables the button.",
    },
    disabled: { control: "boolean" },
    asChild: {
      control: "boolean",
      description: "Uses Radix Slot to apply button props and styles to one child element.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
type ButtonArgs = ComponentProps<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args: ButtonArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: ButtonArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="xs">Extra small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon" aria-label="Add deal"><Plus /></Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args: ButtonArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}><Plus /> Create deal</Button>
      <Button {...args} variant="outline"><Save /> Save changes</Button>
      <Button {...args} variant="secondary">Continue <ArrowRight /></Button>
      <Button {...args} variant="destructive"><Trash2 /> Withdraw offer</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Saving changes" },
  parameters: {
    docs: {
      description: {
        story: "Loading state prevents repeated submission while an operation is in progress.",
      },
    },
  },
};

export const Disabled: Story = {
  render: (args: ButtonArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} disabled>Default</Button>
      <Button {...args} variant="outline" disabled>Outline</Button>
      <Button {...args} variant="destructive" disabled>Destructive</Button>
    </div>
  ),
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: <a href="https://www.loanengine.co/">Explore Loan Engine</a>,
  },
  parameters: {
    docs: {
      description: {
        story: "Use `asChild` with a single element that can receive the button props, such as an anchor.",
      },
    },
  },
};

export const LendingActions: Story = {
  render: (args: ButtonArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}><Plus /> New deal</Button>
      <Button {...args} variant="outline">Request documents</Button>
      <Button {...args} variant="secondary">Save as draft</Button>
      <Button {...args} variant="destructive"><Trash2 /> Withdraw offer</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example actions for common private-lending workflows.",
      },
    },
  },
};
