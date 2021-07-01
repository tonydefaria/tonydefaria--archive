// Hankyo Integration
// ----------------------------------------------------
// Copyright Component

// Built-in Components
import React, { useEffect } from "react"

export default function Copyright(props) {

  useEffect(() => {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }, []);

  return (
    <div className="copyright">
      <div className="copyright-box">
        <div className="copyright-row">
          <p className="font-size-xs">Copyright © <span className="year"></span> Tony de Faria. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
