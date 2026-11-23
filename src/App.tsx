import Status from './status'

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
        <Status />
      </main>

      <footer className="app-footer">
        <p>Built with Vite.</p>
      </footer>
    </div>
  )
}
