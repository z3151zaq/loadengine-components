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

## Deploy to Cloudflare Workers

The root build command creates the introduction page and Storybook in one static assets directory:

```bash
pnpm build
```

The Wrangler config deploys `apps/docs/dist` as static assets for the `loadengine-components` Worker. The introduction page is served from `/` and Storybook from `/storybook/`. In the Cloudflare Worker build settings, use:

| Setting | Value |
| --- | --- |
| Root directory | `/` (repository root) |
| Build command | `pnpm build` |
| Deploy command | `pnpm dlx wrangler@4.157.0 deploy` |
| Environment variable | `PNPM_VERSION=12.16.1` |

The workspace build compiles the UI package first, then builds the docs app and places the static Storybook output under `apps/docs/dist/storybook`. The Worker name and static asset directory are configured in [`wrangler.jsonc`](wrangler.jsonc). Set `CLOUDFLARE_API_TOKEN` to a token with the Workers Editor permission for the existing Worker. See Cloudflare's [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) and [Workers permissions](https://developers.cloudflare.com/workers/authorization/workers/) documentation.

## Use Storybook MCP with an AI agent

Storybook MCP is enabled for component documentation, development workflows, and story testing. Start the local servers with:

```bash
pnpm dev
```

The MCP endpoint is `http://localhost:6006/mcp` while Storybook is running. Connect an MCP-compatible client to this HTTP endpoint. For clients supported by Storybook's MCP setup utility, run:

```bash
pnpm dlx mcp-add --type http --url "http://localhost:6006/mcp" --scope project
```

Choose the server name `loanengine-storybook` if the client prompts for one. The project-level agent rules are in [`AGENTS.md`](AGENTS.md). Ask the agent to use `docs-list` to discover components, `docs-show` to inspect a component's props and guidance, and `docs-show-story` or `stories-find-by-component` for examples before writing UI that consumes this library. The `test-run` tool can run Storybook story tests when available.

The MCP endpoint is served by the local Storybook development server; do not expose it publicly without adding appropriate access controls. Storybook MCP is currently a preview feature, and its tools may change between Storybook releases.
