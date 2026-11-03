# @le-components/ui

React UI components built with Radix UI and Tailwind CSS.

## Install

```bash
pnpm add @le-components/ui react react-dom
```

Import the components and the compiled theme stylesheet in your app entry:

```tsx
import { Button, Input } from "@le-components/ui";
import "@le-components/ui/styles.css";

export function Example() {
  return (
    <div className="flex gap-2">
      <Input placeholder="Borrower name" />
      <Button>Save borrower</Button>
    </div>
  );
}
```

The stylesheet includes Tailwind's generated utilities for this package and the default theme tokens. Override the CSS variables such as `--primary`, `--background`, and `--radius` in your app to customize the theme.
