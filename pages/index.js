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
      <h1 className="font-size-display">{heroComponent.title}</h1>
      <p className="font-size-xxl">{heroComponent.description}</p>
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
