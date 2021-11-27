// Copyright Component

// Built-in Components
import React, { useEffect } from "react"

export default function Copyright({text_colour}) {

  useEffect(() => {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }, []);

  return (
    <div className="copyright">
      <div className="copyright-box">
        <div className="copyright-row">
          <p className={`font-size-xs text-align-center ${text_colour}`}>Copyright &copy; <span className="year"></span> Tony de Faria. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
