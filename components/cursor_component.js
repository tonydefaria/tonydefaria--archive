// Cursor Component

// Built-in Components
import React, { useEffect, useLayoutEffect } from "react"

export default function CursorComponent() {
  useEffect(() => {
    // let cursorouter = document.querySelector(".cursor-outer");
    let cursorinner = document.querySelector(".cursor-inner");

    // document.addEventListener("mousemove", function(event){
    //   let x = event.clientX;
    //   let y = event.clientY;
    //   cursorouter.style.transform = `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`
    // });

    document.addEventListener("mousemove", function(event){
      let x = event.clientX;
      let y = event.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    // document.addEventListener("mousedown", function(){
    //   cursorouter.classList.add("click");
    //   cursorinner.classList.add("cursorinnerhover")
    // });

    // document.addEventListener("mouseup", function(){
    //   cursorouter.classList.remove("click")
    //   cursorinner.classList.remove("cursorinnerhover")
    // });

  }, [])

  return (
    <>
      {/* <div className="cursor-outer"></div> */}
      <div className="cursor-inner"></div>
    </>
  )
}
