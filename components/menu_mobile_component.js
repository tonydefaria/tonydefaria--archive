// Menu Component

// Built-in components
import Link from "next/link"
import React, { useState, useEffect, useCallback } from "react"
// Icons
import MenuIcon from "../icons/menu";

export default function MenuMobileComponent() {
  const [isActive, setActive] = useState("false")

  // Toggle
  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!isActive);
  };

  // Hooks
  // - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - -

  const resizeMenuMobile = useCallback(() => {
    const bodyHeight = document.getElementsByTagName("body")[0].clientHeight
    const stickyFooterHeight = bodyHeight
    document.getElementById("menu-mobile").setAttribute("style","min-height:" + stickyFooterHeight + "px");
  }, []);

  useEffect(() => {
    resizeMenuMobile()
    window.addEventListener("resize", function(event) {
      resizeMenuMobile()
    }, true);
  }, [resizeMenuMobile]);

  return (
    <div className="menu-mobile-wrapper">
      <a aria-label="Menu Trigger" href="#" rel="nofollow" onClick={handleToggle} className={`menu-mobile-trigger link float-right ${isActive ? "link-black" : "link-white"}`}>
        <div className="icon">
          <MenuIcon />
        </div>
      </a>

      <div onClick={handleToggle} className={`menu-mobile flex-h-center flex-v-center ${isActive ? "menu-mobile-hide" : "menu-mobile-show"}`} id="menu-mobile">
        <ul className="menu-mobile-box">
          <li className="menu-mobile-item">
            <Link href="/"><a className="link-xxl link-white text-align-center">Home</a></Link>
          </li>
          <li className="menu-mobile-item">
            <Link href="/contact"><a className="link-xxl link-white text-align-center">Contact</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
