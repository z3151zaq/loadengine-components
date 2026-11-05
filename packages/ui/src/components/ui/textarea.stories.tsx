import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./textarea"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Multi-line text input for notes, conditions, and explanations. Set `showCount` to display an accessible live character count; `maxLength` is still enforced by the native control." } },
  },
  args: { placeholder: "Add a note for the credit team...", rows: 4 },
  argTypes: {
    showCount: { control: "boolean", description: "Shows a live character count. Requires no additional state in the consumer." },
    maxLength: { control: "number", description: "Native maximum character limit, also shown in the count when `showCount` is enabled." },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithCharacterCount: Story = {
  args: { showCount: true, maxLength: 240, defaultValue: "Confirm the updated valuation before issuing the offer." },
}

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "", placeholder: "A reason is required", showCount: true, maxLength: 180 },
  parameters: { docs: { description: { story: "Pair the invalid state with a nearby explanation and associate it using `aria-describedby`." } } },
}
