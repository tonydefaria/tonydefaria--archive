// Index

// Layout
import Primary from "../layouts/primary"

// Components
import MetaComponent from "../components/meta_component"
import HeroComponent from "../components/hero_component"

// Data
import Hankyo from "../lib/hankyo"

export default function Index({project}) {

  const page = project.pages.find(({uid}) => uid === 1)

  return (
    <div>
      <MetaComponent project={project} page={page} />
      <HeroComponent project={project} />
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

Index.Layout = Primary
