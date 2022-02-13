// Brand Logo Component

// Built-in components
import Link from "next/link"

// Icons
import BrandLogo from "../icons/brand_logo";
import BrandIcon from "../icons/brand_icon";

export default function BrandLogoComponent({link_colour}) {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item brand-logo brand-desktop">
          <Link href="/">
            <a className={`link ${link_colour}`}>
              <div className="icon">
                <BrandLogo />
              </div>
            </a>
          </Link>
        </div>
        <div className="brand-item brand-icon brand-mobile">
          <Link href="/">
            <a className={`link ${link_colour}`}>
              <div className="icon">
                <BrandIcon />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
