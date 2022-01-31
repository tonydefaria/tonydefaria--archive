// Hankyo Integration
// ----------------------------------------------------
// Hero Component

export default function HeroComponent({hankyoSection}) {

  const title = hankyoSection.section.blocks.find(({uid}) => uid === "RaMPALYXTApsxvufdTRdRkYT").title
  // const description = hankyoSection.section.blocks.find(({uid}) => uid === "VCsvw54dXS3kwqcFVaSB8zcr").description

  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-row">
          <h1 className="font-size-display"><span className="black-bg white-cl padded">{title}</span></h1>
          <hr className="separator-s" />
          <p className="font-size-xxl"><span className="black-cl white-bg padded">Photography allows me to relate with people around the planet and see the world from different perspectives.</span></p>
        </div>
      </div>
    </div>
  )
}
