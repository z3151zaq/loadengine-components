# Loan Engine UI

A React component library built with Radix UI and Tailwind CSS. The component source lives in `packages/ui`; Storybook documentation lives in `apps/docs` and reads stories colocated with their components.

## Design foundations

Loan Engine is an end-to-end workspace for private property lenders, connecting teams, deals, and loan operations from enquiry to maturity. This library translates that product context into interface foundations that feel professional and dependable, make important information easier to assess, and help teams manage operational risk. The principles below guide component design; they do not replace a lender's policies, approvals, or controls.

### Design principles

- **Make complex work clear.** Give loan, deal, and borrower information a clear hierarchy so people can understand status, context, and next steps quickly.
- **Build confidence through consistency.** Use predictable patterns and terminology across origination, documents, and loan management.
- **Support controlled operations.** Make consequential actions, review states, and exceptions visible; reduce ambiguity and avoid implying that an action has succeeded before it has.
- **Respect the people doing the work.** Keep routine tasks efficient, interfaces accessible, and feedback specific and timely.

### Visual language

- **Brand anchor:** use Loan Engine purple (`#34044e`) for primary actions, key emphasis, and focus treatment. Reserve it for meaningful emphasis rather than decorating every surface.
- **Quiet working surfaces:** pair the brand color with restrained neutrals, clear borders, and comfortable spacing so dense operational information stays legible.
- **Purposeful hierarchy:** use consistent type sizes and weights to distinguish page titles, section labels, data, and supporting guidance. Align financial values and make units easy to scan.
- **Semantic status colors:** use status color consistently and always pair it with a text label or icon. Color alone must not communicate risk, approval, or completion.
- **Measured depth:** use subtle elevation and restrained rounding to distinguish layers without making a financial workspace feel casual.

### Interaction rules

- Make keyboard focus visible and preserve logical tab order; interactions must not depend on hover or color alone.
- Give actions clear, specific labels. Distinguish primary, secondary, and destructive actions, and ask for confirmation when an action is consequential or difficult to reverse.
- Show loading, success, empty, disabled, and error states when they apply. Explain errors near the affected control and give a useful recovery path where possible.
- Keep validation and status feedback timely and specific. Never suggest that a save, approval, calculation, or transfer completed until the application confirms it.
- Follow accessible names, roles, and states, and respect reduced-motion preferences.

### Component rules

- Provide one sensible default, with named variants and sizes for meaningful differences in purpose or emphasis.
- Keep APIs typed, composable, and small. Use native HTML semantics and Radix UI primitives for accessible interaction patterns where appropriate.
- Keep styling consistent through shared tokens and Tailwind utilities; avoid one-off visual overrides when an existing variant or token expresses the intent.
- Document behavior that types cannot explain, and use stories to show the default, variants, important states, and representative composition.
- Treat workflow-specific rules—such as lending eligibility, risk decisions, and approval authority—as application logic, not presentation behavior hidden inside generic UI components.

## Development workflow

### 1. Define the component API

Before implementation, decide what the component does and define its public props, defaults, supported customization points, and accessibility requirements. Use TypeScript to express prop names, types, optionality, and allowed values. Add written explanations only for behavior or constraints that the types cannot express.

### 2. Implement and export the component

Create the component under `packages/ui/src/components/ui/`. Export its public API from `packages/ui/src/index.ts` so consumers can import it from `@xxnnyy/ui`.

Keep runtime dependencies in `packages/ui/package.json` under `dependencies` or `peerDependencies`. Development-only tools, including Storybook, belong in `devDependencies` and are not included in the published package.

### 3. Add a colocated Storybook story

Create `<component>.stories.tsx` beside the component source. Stories should cover the default state, public variants, important states, and a representative usage pattern. Use Storybook Controls for props when they can be changed interactively. Add brief descriptions for non-obvious behavior and accessibility requirements.

Story files are excluded from the UI package TypeScript source build and from its npm publish files. They are discovered by Storybook's glob in `apps/docs/.storybook/main.ts`.

### 4. Verify the component and documentation

From the repository root, install workspace dependencies and run the relevant checks:

```bash
pnpm install
pnpm --filter docs storybook
pnpm --filter docs build-storybook
pnpm --filter docs typecheck
pnpm --filter @xxnnyy/ui build
```

Review the Storybook page for visual and interaction issues. Confirm that generated type declarations and CSS are present in `packages/ui/dist`.

### 5. Update Registry metadata when needed

When a component is available through the shadcn Registry, add or update its entry in the root `registry.json`. Point the entry at the same source under `packages/ui/src`; do not maintain a second component implementation. Declare the component's package and registry dependencies.

Generate the static Registry files with:

```bash
pnpm dlx shadcn@latest build registry.json --output apps/docs/public/r
```

Review the generated JSON before deploying the public registry endpoint.

### 6. Publish a release

After the component, stories, package build, and Registry metadata are ready, update the version in `packages/ui/package.json`. Publish from the UI workspace:

```bash
pnpm --filter @xxnnyy/ui publish --access public
```

Publishing runs the package's `prepack` build. Release components in coherent versioned batches rather than publishing for every small change.

## Package usage

See [`packages/ui/README.md`](packages/ui/README.md) for installation and consumer usage instructions.

## Deploy to Cloudflare Pages

The root build command creates one static site containing both the introduction page and Storybook:

```bash
pnpm build
```

Cloudflare Pages serves the introduction page from `/` and Storybook from `/storybook/`. In the Cloudflare Pages project settings, use:

| Setting | Value |
| --- | --- |
| Root directory | `/` (repository root) |
| Build command | `pnpm build` |
| Build output directory | `apps/docs/dist` |
| Environment variable | `PNPM_VERSION=12.16.1` |

The workspace build compiles the UI package first, then builds the docs app and places the static Storybook output under `apps/docs/dist/storybook`. Pinning pnpm in Cloudflare keeps the build aligned with the version declared by this workspace. See Cloudflare's [Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/) and [monorepo setup](https://developers.cloudflare.com/pages/configuration/monorepos/) for project settings.
