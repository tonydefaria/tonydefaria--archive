// Menu Component

// Built-in components
import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"

export default function MenuOverlayComponent() {
  return (
    <div className="menu-mobile flex-h-center flex-v-center" id="menu-mobile">
      <ul className="menu-mobile-box">
        <li className="menu-mobile-item">
          <Link href="/"><a className="link-xxl link-white text-align-center">Home</a></Link>
        </li>
        <li className="menu-mobile-item">
          <Link href="/contact"><a className="link-xxl link-white text-align-center">Contact</a></Link>
        </li>
      </ul>
    </div>
  )
}
