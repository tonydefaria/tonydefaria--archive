// Hankyo Integration
// ----------------------------------------------------
// Brand Component

// Built-in components
import Link from "next/link"

export default function BrandComponent({project}) {

  const brand = project.brand_component

  return (
    <div className="brand">
      <ul className="brand-box list-style-none">
        <li className="brand-item">
          <Link href="/"><a className="link-m link-black font-weight-900 text-transform-uppercase">{brand.name}</a></Link>
        </li>
      </ul>
    </div>
  )
}
