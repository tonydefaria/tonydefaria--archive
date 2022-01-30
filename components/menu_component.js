// Menu Component

// Built-in components
import Link from "next/link"

export default function MenuMobileComponent() {
  return (
    <div className="menu">
      <ul className="menu-box">
        <li className="menu-item">
          <Link href="/"><a className="link-m link-black text-align-center">Home</a></Link>
        </li>
        <li className="menu-item">
          <Link href="/contact"><a className="link-m link-black text-align-center">Contact</a></Link>
        </li>
        {/*
          <li className="menu-item">
            <Link href="/street-and-travel"><a className="link-m link-white">Street & Travel</a></Link>
          </li>
        */}
      </ul>
    </div>
  )
}
