# @xxnnyy/ui

React UI components built with Radix UI and Tailwind CSS.

## Components

| Component | Purpose | Loan Engine-specific details |
| --- | --- | --- |
| `Alert` | Inline messages | Default, success, warning, and destructive states with appropriate live-region roles. |
| `Badge` | Compact metadata and statuses | Semantic workflow variants and an optional decorative status dot. |
| `Button` | Actions and navigation | Variants, sizes, loading state, and Radix Slot composition. |
| `Card` | Related content | Compound header, content, action, and footer primitives. |
| `Checkbox` | Form choices | Radix-backed, accessible checked and indeterminate states. |
| `Input` | Single-line values | Focus, disabled, file, and invalid states. |
| `Label` | Form field names | Radix-backed association with required and optional visual markers. |
| `Select` | Single selection | Group labels, disabled options, and scroll controls. |
| `Switch` | Immediate on/off preferences | Radix-backed control with standard and compact sizes. |
| `Textarea` | Notes and explanations | Optional live character count through `showCount`. |

## Install

```bash
pnpm add @xxnnyy/ui react react-dom
```

Import the components and the compiled theme stylesheet in your app entry:

```tsx
import { Button, Input } from "@xxnnyy/ui";
import "@xxnnyy/ui/styles.css";

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
