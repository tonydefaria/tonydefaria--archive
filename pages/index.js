// Index

// Layout
import Primary from "../layouts/primary"

// Components
import MetaComponent from "../components/meta_component"

// Data
import Hankyo from "../lib/hankyo"

export default function Home({project}) {

  const page = project.pages.find(({uid}) => uid === 1)
  const heroComponent = page.hero_component

  return (
    <div>
      <MetaComponent project={project} />
      <div className="content">
        <div className="content-box">
          <div className="content-row">
            <h1 className="font-size-display">{heroComponent.title}</h1>
            <hr className="separator-s" />
            <p className="font-size-display font-weight-100">{heroComponent.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({locale}) {
  // Hankyo
  const project = Hankyo.data(locale).project

  return {
    props: { project }
  }
}

Home.Layout = Primary
