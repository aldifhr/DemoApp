 // This is the About page.
export default function About() {
  return (
    <section className="intro" aria-labelledby="about-title">
      <p className="eyebrow">About</p>
      <h1 id="about-title">A simple place to start.</h1>
      <p className="intro-copy">
        Demo App is a lightweight starting point for building web experiences
        with React, TypeScript, and Vite. Its small foundation is designed to be
        easy to understand and extend.
      </p>

      <div>
        <h2>Built for a clear start</h2>
        <p className="intro-copy">
          The app keeps its entry point and main page straightforward, so you
          can focus on the experience you want to create rather than navigating
          a complex setup.
        </p>

        <h2>Made with familiar tools</h2>
        <p className="intro-copy">
          React provides the component model, TypeScript adds static typing, and
          Vite powers the development and production build workflows.
        </p>

        <h2>Ready to make your own</h2>
        <p className="intro-copy">
          Use this starting point to shape your own content, layout, and
          features. Keep what helps, adapt what does not, and grow the app as
          your needs become clearer.
        </p>
      </div>
    </section>
  )
}
