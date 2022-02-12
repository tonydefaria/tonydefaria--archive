// Menu Component

// Built-in components
import Link from "next/link"

export default function MenuComponent() {
  return (
    <div className="menu">
      <ul className="menu-box">
        <li className="menu-item desktop">
          <Link href="/"><a className="link-m link-black text-align-center">Home</a></Link>
        </li>
        <li className="menu-item desktop">
          <Link href="/portraits"><a className="link-m link-black text-align-center">Portraits</a></Link>
        </li>
        <li className="menu-item desktop">
          <Link href="/contact"><a className="link-m link-black text-align-center">Say Hello</a></Link>
        </li>
      </ul>
    </div>
  )
}
