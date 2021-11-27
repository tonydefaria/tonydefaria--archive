// Hankyo Integration
// ----------------------------------------------------
// Meta Component

// Built-in Components
import Head from "next/head"
import { useRouter } from "next/router"

export default function MetaComponent({resource, meta}) {

  const pathname = useRouter().pathname
  const isDevelopment = process.env.NODE_ENV === "development"
  let baseURL
  if (isDevelopment === true) {
    baseURL = "http://" + "localhost:3000"
  } else {
    baseURL = resource.base_url
  }

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={baseURL + pathname} />

      {/* SEO */}
      <title>{meta.meta_title}</title>
      <meta name="description"          content={meta.meta_description} />
      <meta name="keywords"             content={meta.meta_keywords} />
      <link rel="canonical"             href={baseURL + pathname} />

      {/* Open Graph */}
      <meta property="og:type"          content={resource.project_type} />
      <meta property="og:title"         content={meta.meta_title} />
      <meta property="og:description"   content={meta.meta_description} />
      <meta property="og:image"         content={baseURL + meta.meta_image} />
      <meta property="og:url"           content={baseURL + pathname} />

      {/* Twitter */}
      <meta name="twitter:card"         content={resource.twitter_card_type} />
      <meta name="twitter:site"         content={resource.twitter_site_handle} />
      <meta name="twitter:title"        content={meta.meta_title} />
      <meta name="twitter:description"  content={meta.meta_description} />
      <meta name="twitter:image"        content={baseURL + meta.meta_image} />

      {/* Preloaders */}
      <link rel="dns-prefetch" href="https://use.typekit.net/sjv6gba.css" />
      <link rel="prefetch" as="image" href="/images/bg.jpg" />

      {/* Analytics */}
      <script async defer src="https://cabin.tonydefaria.com/hello.js"></script>
    </Head>
  )
}
