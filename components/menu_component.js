// Menu Component

// Built-in components
import Link from "next/link"

export default function MenuComponent() {

  return (
    <div className="menu">
      <ul className="menu-box">
        <li className="menu-item menu-desktop">
          <Link href="/"><a className="link-m link-black">Home</a></Link>
        </li>
        <li className="menu-item menu-desktop">
          <Link href="/street-and-travel"><a className="link-m link-black">Street & Travel</a></Link>
        </li>
        <li className="menu-item menu-desktop">
          <Link href="/contact"><a className="link-m link-black">Get in touch</a></Link>
        </li>
        <li className="menu-item menu-mobile">
          <Link href="/"><a className="link-m link-black">Menu</a></Link>
        </li>
      </ul>
    </div>
  )
}
