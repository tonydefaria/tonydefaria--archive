// Hankyo Integration
// ----------------------------------------------------
// Brand Component

// Built-in components
import Link from "next/link"

export default function SBrandComponent() {
  return (
    <div className="brand">
      <ul className="brand-box list-style-none">
        <li className="brand-item">
          <Link href="/"><a className="link-m link-black font-weight-900 text-transform-uppercase">Tony de Faria</a></Link>
        </li>
      </ul>
    </div>
  )
}
