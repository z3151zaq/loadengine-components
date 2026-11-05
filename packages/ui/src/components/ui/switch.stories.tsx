import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Label } from "./label"
import { Switch } from "./switch"

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Radix switch for immediate on/off preferences. Use a checkbox for choices that are submitted with a form; always pair a switch with a clear label." } },
  },
  args: { "aria-label": "Enable reminders", defaultChecked: false },
  argTypes: {
    size: { control: "select", options: ["default", "sm"] },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const LabeledPreference: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true)
    return (
      <div className="flex w-80 items-center justify-between rounded-lg border p-4">
        <div className="grid gap-1">
          <Label htmlFor="overdue-reminders-story">Overdue reminders</Label>
          <p className="text-xs text-muted-foreground">Notify the team when a condition is past due.</p>
        </div>
        <Switch id="overdue-reminders-story" checked={enabled} onCheckedChange={setEnabled} />
      </div>
    )
  },
}

export const SizesAndStates: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex items-center gap-3"><Switch size="sm" aria-label="Compact notifications" defaultChecked /><span className="text-sm">Compact</span></div>
      <div className="flex items-center gap-3"><Switch aria-label="Standard notifications" defaultChecked /><span className="text-sm">Standard</span></div>
      <div className="flex items-center gap-3"><Switch aria-label="Disabled notifications" disabled /><span className="text-sm text-muted-foreground">Disabled</span></div>
    </div>
  ),
}
