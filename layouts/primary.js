// Primary

// Built-in Components
import Head from "next/head"

export default function Primary({ children }) {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <header className="universal header">
      </header>

      <main className="universal main hero" id="hero">
        {children}
      </main>

      <footer className="universal footer">
      </footer>
    </div>
  )
}
