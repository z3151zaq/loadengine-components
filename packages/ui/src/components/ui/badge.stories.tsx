import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "./badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Compact labels for loan stages, review states, and record metadata. Status variants should always include a text label; `dot` is only a supporting cue." } },
  },
  args: { children: "In review", variant: "warning", dot: true },
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "destructive", "outline", "success", "warning", "info"] },
    dot: { control: "boolean", description: "Adds a decorative status dot; the text label remains the accessible status." },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const LendingStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">Enquiry</Badge>
      <Badge variant="info" dot>Credit review</Badge>
      <Badge variant="warning" dot>Documents required</Badge>
      <Badge variant="success" dot>Ready to settle</Badge>
      <Badge variant="destructive">Overdue</Badge>
    </div>
  ),
  parameters: { docs: { description: { story: "Use consistent labels for lifecycle stages. Never rely on badge color alone to communicate the state." } } },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Primary</Badge><Badge variant="secondary">Neutral</Badge><Badge variant="outline">Outlined</Badge>
      <Badge variant="success">Success</Badge><Badge variant="warning">Attention</Badge><Badge variant="destructive">Critical</Badge>
    </div>
  ),
}
