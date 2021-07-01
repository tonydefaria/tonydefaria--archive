// Hankyo Integration
// ----------------------------------------------------
// Meta Component

import Head from "next/head"
import { useRouter } from "next/router"

export default function MetaComponent({project}) {

  const lang = useRouter().locale
  const defaultLang = useRouter().defaultLocale
  const pathname = useRouter().pathname
  const page = project.pages.find(({uid}) => uid === 1)
  const metaComponent = page.seo_component

  // Set proper Canonical URL's
  let setCanonical
  if (defaultLang === lang) {
    setCanonical = "https://" + project.base_domain + pathname
  } else {
    setCanonical = "https://" + project.base_domain + "/" + lang + pathname
  }

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={"https://" + project.base_domain + pathname} />
      <link rel="alternate" hrefLang="en" href={"https://" + project.base_domain + "/" + "en" + pathname} />

      {/* SEO */}
      <title>{metaComponent.meta_title}</title>
      <meta name="description"          content={metaComponent.meta_description} />
      <meta name="keywords"             content={metaComponent.meta_tags} />
      <link rel="canonical"             href={setCanonical} />

      {/* Open Graph */}
      <meta property="og:type"          content={project.project_type} />
      <meta property="og:title"         content={metaComponent.meta_title} />
      <meta property="og:description"   content={metaComponent.meta_description} />
      <meta property="og:image"         content={"https://" + project.base_domain + metaComponent.meta_image} />
      <meta property="og:url"           content={"https://" + project.base_domain + pathname} />

      {/* Twitter */}
      <meta name="twitter:card"         content={project.twitter_card_type} />
      <meta name="twitter:site"         content={project.twitter_site_handle} />
      <meta name="twitter:title"        content={metaComponent.meta_title} />
      <meta name="twitter:description"  content={metaComponent.meta_description} />
      <meta name="twitter:image"        content={"https://" + project.base_domain + metaComponent.meta_image} />
    </Head>
  )
}
