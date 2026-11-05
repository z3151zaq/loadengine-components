import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertTriangle, CircleAlert, CircleCheck, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./alert"

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Inline messages for review context, confirmations, and blockers. Destructive alerts use `role=alert`; other variants use `role=status`. Keep the message concise and actionable." } },
  },
  args: { variant: "default" },
  argTypes: { variant: { control: "select", options: ["default", "destructive", "success", "warning"] } },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Alert {...args} className="w-[420px]">
      <Info aria-hidden="true" />
      <AlertTitle>Review in progress</AlertTitle>
      <AlertDescription>The deal is with Credit. Required documents and the latest valuation are available in Deal Space.</AlertDescription>
    </Alert>
  ),
}

export const OperationalStates: Story = {
  render: () => (
    <div className="grid w-[460px] gap-3">
      <Alert variant="success"><CircleCheck aria-hidden="true" /><AlertTitle>Documents verified</AlertTitle><AlertDescription>All required settlement documents have been checked.</AlertDescription></Alert>
      <Alert variant="warning"><AlertTriangle aria-hidden="true" /><AlertTitle>Valuation expires soon</AlertTitle><AlertDescription>Request an updated valuation before issuing the offer.</AlertDescription></Alert>
      <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertTitle>Bank details need review</AlertTitle><AlertDescription>Settlement cannot proceed until the account details are confirmed.</AlertDescription></Alert>
    </div>
  ),
  parameters: { docs: { description: { story: "Use clear text and a next step so status and risk do not rely on color or icon alone." } } },
}
