 // This is the hello component.
// QA checks are structural only.
export default function Hello() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        border: '1px solid currentColor',
        borderRadius: '0.75rem',
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.5,
      }}
    >
      Hello, world!
    </div>
  )
}
