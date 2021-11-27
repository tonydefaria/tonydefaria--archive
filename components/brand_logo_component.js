// Brand Logo Component

// Built-in components
import Link from "next/link"

// Icons
import BrandLogo from "../icons/brand_logo";

export default function BrandLogoComponent({link_colour}) {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item brand-logo">
          <Link href="/">
            <a className={`link ${link_colour}`}>
              <div className="icon">
                <BrandLogo />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
