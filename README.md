# xxnnyy UI

A React component library built with Radix UI and Tailwind CSS. The component source lives in `packages/ui`; Storybook documentation lives in `apps/docs` and reads stories colocated with their components.

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
