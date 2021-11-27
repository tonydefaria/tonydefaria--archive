// Hankyo Integration
// ----------------------------------------------------
// Hero Component

export default function HeroComponent({page}) {
  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-row">
          <h1 className="font-size-display">{page.title}</h1>
          <hr className="separator-s" />
          <p className="font-size-xxl">{page.description}</p>
        </div>
      </div>
    </div>
  )
}
