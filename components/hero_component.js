// Hankyo Integration
// ----------------------------------------------------
// Hero Component

export default function HeroComponent({hankyoSection}) {

  const title = hankyoSection.section.blocks.find(({uid}) => uid === "RaMPALYXTApsxvufdTRdRkYT").title
  const description = hankyoSection.section.blocks.find(({uid}) => uid === "VCsvw54dXS3kwqcFVaSB8zcr").description

  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-row">
          <h1 className="font-size-display">{title}</h1>
          <hr className="separator-s" />
          <div className="font-size-xxl" dangerouslySetInnerHTML={{ __html: `${description}` }} />
        </div>
      </div>
    </div>
  )
}
