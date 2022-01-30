// Menu Component

// Built-in components
import Link from "next/link"
import React, { useState, useEffect } from "react"


export default function MenuMobileComponent() {

  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="menu-mobile-wrapper">
      <a onClick={handleToggle} className={`menu-mobile-trigger link-m float-right ${isActive ? "link-black" : "link-white"}`}>Menu</a>
      <div onClick={handleToggle} className={`menu-mobile flex-h-center flex-v-center ${isActive ? "menu-mobile-hide" : "menu-mobile-show"}`}>
        <ul className="menu-mobile-box">
          <li className="menu-mobile-item">
            <Link href="/"><a className="link-xxl link-white text-align-center">Home</a></Link>
          </li>
          <li className="menu-mobile-item">
            <Link href="/contact"><a className="link-xxl link-white text-align-center">Contact</a></Link>
          </li>
          {/*
            <li className="menu-mobile-item menu-mobile-desktop">
              <Link href="/street-and-travel"><a className="link-m link-white">Street & Travel</a></Link>
            </li>
          */}
          {/*
            <li className="menu-mobile-item menu-mobile-mobile">
              <Link href="/"><a className="link-m link-white">Menu</a></Link>
            </li>
          */}
        </ul>
      </div>
    </div>
  )
}
