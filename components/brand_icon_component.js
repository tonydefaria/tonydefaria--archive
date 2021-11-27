// Brand Icon Component

// Built-in components
import Link from "next/link"

// Icons
import BrandIcon from "../icons/brand_icon";

export default function BrandIconComponent({link_colour}) {
  return (
    <div className="brand">
      <ul className="brand-box">
        <li className="brand-item brand-icon">
          <Link href="/">
            <a className={`link ${link_colour}`}>
              <div className="icon">
                <BrandIcon />
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
