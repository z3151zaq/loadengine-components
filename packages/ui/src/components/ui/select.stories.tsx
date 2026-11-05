import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select"

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Accessible single-value selection built on Radix Select. Use it for a known, manageable set of options; prefer a searchable combobox for long lists." } },
  },
  args: { defaultValue: "credit_review", onValueChange: fn() },
  argTypes: { disabled: { control: "boolean" }, required: { control: "boolean" } },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

function DealStageSelect() {
  return (
    <Select defaultValue="credit_review">
      <SelectTrigger aria-label="Deal stage" className="w-60"><SelectValue placeholder="Select a stage" /></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Origination</SelectLabel>
          <SelectItem value="enquiry">Enquiry</SelectItem>
          <SelectItem value="indicative">Indicative offer</SelectItem>
          <SelectItem value="credit_review">Credit review</SelectItem>
          <SelectItem value="documents">Documentation</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Servicing</SelectLabel>
          <SelectItem value="active">Active loan</SelectItem>
          <SelectItem value="matured">Matured</SelectItem>
          <SelectItem value="withdrawn" disabled>Withdrawn (read only)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export const Playground: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger aria-label="Deal stage" className="w-60"><SelectValue placeholder="Select a stage" /></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Origination</SelectLabel>
          <SelectItem value="enquiry">Enquiry</SelectItem>
          <SelectItem value="indicative">Indicative offer</SelectItem>
          <SelectItem value="credit_review">Credit review</SelectItem>
          <SelectItem value="documents">Documentation</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Servicing</SelectLabel>
          <SelectItem value="active">Active loan</SelectItem>
          <SelectItem value="matured">Matured</SelectItem>
          <SelectItem value="withdrawn" disabled>Withdrawn (read only)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const DealLifecycle: Story = {
  render: () => <DealStageSelect />,
  parameters: { docs: { description: { story: "Group stages by lifecycle so a lending team can scan and choose the right status." } } },
}

export const Disabled: Story = {
  render: () => (
    <Select disabled defaultValue="pending">
      <SelectTrigger aria-label="Settlement status" className="w-60"><SelectValue /></SelectTrigger>
      <SelectContent><SelectItem value="pending">Pending settlement</SelectItem></SelectContent>
    </Select>
  ),
}
