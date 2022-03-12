// Menu Component

// Built-in components
import Link from "next/link"

export default function MenuComponent() {
  return (
    <div className="menu desktop">
      <ul className="menu-box">
        {/*
        <li className="menu-item">
          <Link href="/"><a className="link-m link-black">Home</a></Link>
        </li>
        */}
        <li className="menu-item">
          <Link href="/portraits"><a className="link-m link-black">Portraits</a></Link>
        </li>
        <li className="menu-item">
          <Link href="/contact"><a className="link-m link-black">Contact</a></Link>
        </li>
      </ul>
    </div>
  )
}
