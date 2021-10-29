// Hankyo Integration
// ----------------------------------------------------
// Brand Component

// Built-in components
import Link from "next/link"
import Image from 'next/image'

export default function BrandComponent({project}) {

  const brand = project.brand_component

  return (
    <div className="brand">
      <ul className="brand-box list-style-none">
        <li className="brand-item brand-desktop">
          <Link href="/"><a className="link"><Image src={brand.image} width="304.04" height="48" alt="Tony de Faria" priority={true} /></a></Link>
        </li>
        <li className="brand-item brand-mobile">
          <Link href="/"><a className="link"><Image src={brand.icon} width="46.19" height="48" alt="Tony de Faria" priority={true} /></a></Link>
        </li>
      </ul>
    </div>
  )
}
