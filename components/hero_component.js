// Hankyo Integration
// ----------------------------------------------------
// Hero Component

export default function HeroComponent({project}) {

  const page = project.pages.find(({uid}) => uid === 1)
  const heroComponent = page.hero_component

  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-row">
          <h1 className="font-size-display">{heroComponent.title}</h1>
          <hr className="separator-s" />
          <div className="width-wide float-left" dangerouslySetInnerHTML={{ __html: heroComponent.description }} />
        </div>
      </div>
    </div>
  )
}
