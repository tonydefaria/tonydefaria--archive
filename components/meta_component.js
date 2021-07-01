// Hankyo Integration
// ----------------------------------------------------
// Meta Component

// Built-in Components
import Head from "next/head"
import { useRouter } from "next/router"

export default function MetaComponent({project}) {

  const baseURL = "https://" + project.base_domain
  const pathname = useRouter().pathname
  const page = project.pages.find(({uid}) => uid === 1)
  const metaComponent = page.seo_component

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={baseURL + pathname} />
      <link rel="alternate" hrefLang="en" href={baseURL + "/" + "en" + pathname} />

      {/* SEO */}
      <title>{metaComponent.meta_title}</title>
      <meta name="description"          content={metaComponent.meta_description} />
      <meta name="keywords"             content={metaComponent.meta_tags} />
      <link rel="canonical"             href={baseURL + pathname} />

      {/* Open Graph */}
      <meta property="og:type"          content={project.project_type} />
      <meta property="og:title"         content={metaComponent.meta_title} />
      <meta property="og:description"   content={metaComponent.meta_description} />
      <meta property="og:image"         content={baseURL + metaComponent.meta_image} />
      <meta property="og:url"           content={baseURL + pathname} />

      {/* Twitter */}
      <meta name="twitter:card"         content={project.twitter_card_type} />
      <meta name="twitter:site"         content={project.twitter_site_handle} />
      <meta name="twitter:title"        content={metaComponent.meta_title} />
      <meta name="twitter:description"  content={metaComponent.meta_description} />
      <meta name="twitter:image"        content={baseURL + metaComponent.meta_image} />
    </Head>
  )
}
