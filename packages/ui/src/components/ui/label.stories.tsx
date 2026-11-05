import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Radix-backed form label that forwards native label props and focuses the associated control when activated. Set required state on the control as well as using the visual `required` marker." } },
  },
  args: { children: "Borrower name" },
  argTypes: {
    required: { control: "boolean", description: "Shows a visual asterisk. Also set `required` on the associated input." },
    optional: { control: "boolean", description: "Adds optional guidance beside the label." },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const FormField: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="borrower-name-story" required>Borrower name</Label>
      <Input id="borrower-name-story" required placeholder="Legal entity name" />
      <p className="text-xs text-muted-foreground">Enter the registered legal name.</p>
    </div>
  ),
}

export const OptionalField: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="broker-reference-story" optional>Broker reference</Label>
      <Input id="broker-reference-story" placeholder="e.g. BR-1042" />
    </div>
  ),
}
