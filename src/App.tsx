export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          <span>Demo App</span>
        </a>
      </header>

      <main className="app-main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Vite + React + TypeScript</p>
          <h1 id="intro-title">Your app is ready.</h1>
          <p className="intro-copy">
            Start building here. Edit <code>src/App.tsx</code> and save to see
            your changes instantly.
          </p>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with Vite.</p>
      </footer>
    </div>
  )
}
