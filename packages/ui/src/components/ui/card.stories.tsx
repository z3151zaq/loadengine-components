import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A composable surface for grouping related information. Build a card with CardHeader, CardContent, and optional CardFooter parts. The `size` prop controls internal spacing.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <CardTitle>Marbury Construction</CardTitle>
        <CardDescription>Deal overview · Updated 12 minutes ago</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          <div><dt className="text-muted-foreground">Facility</dt><dd className="mt-1 font-medium">$3,750,000</dd></div>
          <div><dt className="text-muted-foreground">Stage</dt><dd className="mt-1 font-medium">Credit review</dd></div>
        </dl>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">Deal LE-2048</span>
        <Button size="sm">Open deal</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: (args) => (
    <Card {...args} size="sm" className="w-80">
      <CardHeader>
        <CardTitle>Conditions outstanding</CardTitle>
        <CardDescription>3 items need attention</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Updated valuation, insurance certificate, and signed authority.
      </CardContent>
    </Card>
  ),
};

export const WithHeaderAction: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <CardTitle>Active loans</CardTitle>
        <CardDescription>Current portfolio summary</CardDescription>
        <CardAction><Button variant="outline" size="sm">View all</Button></CardAction>
      </CardHeader>
      <CardContent className="text-3xl font-semibold">18</CardContent>
    </Card>
  ),
};

export const CustomElementProps: Story = {
  args: {
    "aria-label": "Loan portfolio summary",
    role: "region",
    className: "w-80",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader><CardTitle>Portfolio health</CardTitle></CardHeader>
      <CardContent>All servicing tasks are up to date.</CardContent>
    </Card>
  ),
};
