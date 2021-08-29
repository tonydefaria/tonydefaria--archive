// Hankyo Integration
// ----------------------------------------------------
// Menu Component

// Built-in components
import Link from "next/link"

export default function MenuComponent() {

  return (
    <div className="menu">
      <ul className="menu-box list-style-none">
        <li className="menu-item">
          <Link href="/"><a className="link-m link-black hover-underline">Home</a></Link>
        </li>
        <li className="menu-item">
          <Link href="/contact"><a className="link-m link-black hover-underline">Get in touch</a></Link>
        </li>
      </ul>
    </div>
  )
}
