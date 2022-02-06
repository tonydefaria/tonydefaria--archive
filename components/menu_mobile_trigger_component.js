// Menu Mobile Trigger Component

// Built-in components
import React, { useState, useEffect, useCallback } from "react"
// Icons
import MenuIcon from "../icons/menu";

export default function MenuMobileTriggerComponent() {
  const [isActive, setActive] = useState("false")

  // Toggle
  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!isActive);
    console.log("click")
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    const menuOverlay = document.getElementById("menu-mobile")

    if (!isActive) {
      body.classList.add("lock-scroll")
      menuOverlay.classList.add("menu-mobile-show")
      menuOverlay.classList.remove("menu-mobile-hide")
    } else {
      body.classList.remove("lock-scroll")
      menuOverlay.classList.add("menu-mobile-hide")
      menuOverlay.classList.remove("menu-mobile-show")
    }
  }, [isActive])

  return (
    <div className="menu-mobile-trigger">
      <ul className="menu-mobile-trigger-box">
        <li className="menu-mobile-trigger-item">
          <a href="#" rel="nofollow" onClick={handleToggle} aria-label="Menu Mobile Trigger" className={`link-m ${isActive ? "link-black" : "link-white"}`}>
          <div className="icon"><MenuIcon /></div>
          </a>
        </li>
      </ul>
    </div>
  )
}
