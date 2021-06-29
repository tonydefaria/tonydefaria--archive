// Projects

// Layout
import Primary from "../layouts/primary"

// Components
import MetaComponent from "../components/meta_component"

// Data
import Hankyo from "../lib/hankyo"

export default function Projects({project}) {
  return (
    <div>
      <MetaComponent project={project} />
    </div>
  )
}

export async function getStaticProps({locale}) {
  // Hankyo
  const lang = locale
  const project = Hankyo.data(locale).project

  return {
    props: { lang, project }
  }
}

Projects.Layout = Primary
