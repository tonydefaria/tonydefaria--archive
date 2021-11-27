// Back Component

// Built-in components
import Link from "next/link"

// Icons
import ArrowLeft from "../icons/arrow_left";

export default function BackComponent({anchor, link_colour}) {
  return (
    <Link href={anchor}>
      <a className={`link-s ${link_colour}`}>
        <div className="icon float-left flex-v-center">
          <ArrowLeft />
        </div>
        Go back
      </a>
    </Link>
  )
}
