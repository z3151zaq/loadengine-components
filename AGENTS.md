# AI guidance for Loan Engine UI

When changing components or writing application UI that uses `@xxnnyy/ui`, use the Storybook MCP server at `http://localhost:6006/mcp` when it is available.

## Before using a component

- Call `docs-list` to discover the documented components.
- Call `docs-show` for each relevant component before using its props. Only use props and variants that are documented by the manifest or shown in its stories; do not guess APIs from similarly named libraries.
- Use `docs-show-story` or `stories-find-by-component` to inspect supported compositions and real examples.
- Follow the Loan Engine design foundations in `README.md`: favor clear operational states, visible risk information, accessible interactions, and the shared `--primary` token (currently `#34044e`).
- Import the compiled stylesheet once in the consuming app: `@xxnnyy/ui/styles.css`.

## When creating or changing a component story

- Call `get-storybook-story-instructions` before creating or updating stories.
- Keep stories colocated with their component under `packages/ui/src/components/ui/`.
- Cover the default state, supported variants, important states, and a realistic lending workflow. Describe non-obvious props and constraints in Storybook Docs/ArgTypes.
- Use `stories-preview` to inspect the result and `test-run` to run story tests when those tools are available.
- Do not move lending eligibility, risk decisions, or approval authority into generic presentation components.
