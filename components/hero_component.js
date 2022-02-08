// Hankyo Integration
// ----------------------------------------------------
// Hero Component

export default function HeroComponent({hankyoSection}) {

  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-row">
          <h1 className="font-size-display"><span className="black-bg white-cl padded">{hero.title}</span></h1>
          <hr className="separator-s" />
          <p className="font-size-xxl bg" dangerouslySetInnerHTML={{__html: hero.description}} />
        </div>
      </div>
    </div>
  )
}
