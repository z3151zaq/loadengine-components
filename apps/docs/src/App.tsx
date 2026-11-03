import { ButtonDemo } from "./demos/button-demo";

function App() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 p-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Muse UI</h1>
        <p className="text-muted-foreground">
          A design system built for developers and AI agents.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <ButtonDemo />
      </section>
    </main>
  );
}

export default App;