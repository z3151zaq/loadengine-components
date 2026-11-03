import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Plus, Save, Trash2 } from "lucide-react";
import { fn } from "storybook/test";
import { Button } from "@le-components/ui";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A button triggers an action. It supports visual variants, sizes, loading and disabled states, custom content, and Radix Slot composition through `asChild`.",
      },
    },
  },
  args: {
    children: "Button",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "destructive"],
      description: "Visual style of the button.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Button dimensions. Give icon-only buttons an accessible label.",
    },
    loading: {
      control: "boolean",
      description: "Shows a spinner, sets `aria-busy`, and disables interaction.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the native button.",
    },
    asChild: {
      control: "boolean",
      description: "Composes button props and styles onto its single child using Radix Slot.",
    },
    className: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
type ButtonStoryArgs = ComponentProps<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args: ButtonStoryArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="destructive">Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use the variant that matches the importance and consequence of the action.",
      },
    },
  },
};

export const Sizes: Story = {
  render: (args: ButtonStoryArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon" aria-label="Add deal"><Plus /></Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args: ButtonStoryArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}><Plus /> Create deal</Button>
      <Button {...args} variant="outline"><Save /> Save changes</Button>
      <Button {...args} variant="destructive"><Trash2 /> Delete deal</Button>
      <Button {...args} variant="secondary">Continue <ArrowRight /></Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Saving changes" },
  parameters: {
    docs: {
      description: {
        story: "Loading buttons show progress, expose `aria-busy`, and become disabled until the work is complete.",
      },
    },
  },
};

export const Disabled: Story = {
  render: (args: ButtonStoryArgs) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} disabled>Default</Button>
      <Button {...args} variant="outline" disabled>Outline</Button>
      <Button {...args} variant="destructive" disabled>Destructive</Button>
    </div>
  ),
};

export const AsLink: Story = {
  args: { asChild: true, children: <a href="https://www.loanengine.co/">Explore Loan Engine</a> },
  parameters: {
    docs: {
      description: {
        story: "Use `asChild` to apply button styling and behavior to a single child element, such as an anchor.",
      },
    },
  },
};

export const LendingWorkflow: Story = {
  render: (args: ButtonStoryArgs) => (
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
        story: "Example actions from a private lending workflow: creating a deal, requesting conditions, saving a draft, and withdrawing an offer.",
      },
    },
  },
};
