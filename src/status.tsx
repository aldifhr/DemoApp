 // This is the Status page.
// The status is static demo data.
export default function Status() {
  return (
    <section className="intro" aria-labelledby="status-title">
      <p className="eyebrow">Status</p>
      <h1 id="status-title">Service status</h1>
      <p className="intro-copy">
        Live service monitoring is not connected yet. Check back here for
        availability updates and incident information.
      </p>
    </section>
  )
}
