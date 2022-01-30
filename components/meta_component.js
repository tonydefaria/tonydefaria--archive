// Hankyo Integration
// ----------------------------------------------------
// Meta Component

// Built-in Components
// import { useRouter } from "next/router"
import Head from "next/head"

export default function MetaComponent({hankyoProject, meta}) {
  const isDevelopment = process.env.NODE_ENV === "development"
  let baseURL
  if (isDevelopment === true) {
    baseURL = "http://" + "localhost:4000"
  } else {
    baseURL = meta.url
  }
  const title = hankyoProject.project.title + " | " + meta.title
  const twitter_handle = hankyoProject.project.global_attributes.find(({uid}) => uid === "dZabogRgkov9zRRh7oj47r8q").value
  const twitter_card = hankyoProject.project.global_attributes.find(({uid}) => uid === "r5BSc98jYfUZbNLxZPVSesHP").value

  console.log(twitter_handle)

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={baseURL} />

      {/* SEO */}
      <title>{title}</title>
      <meta name="description"          content={meta.description} />
      <meta name="keywords"             content={meta.keywords} />
      <link rel="canonical"             href={baseURL} />

      {/* Open Graph */}
      <meta property="og:type"          content={hankyoProject.project.type_of} />
      <meta property="og:title"         content={title} />
      <meta property="og:description"   content={meta.description} />
      <meta property="og:image"         content={meta.image} />
      <meta property="og:url"           content={baseURL} />

      {/* Twitter */}
      <meta name="twitter:card"         content={twitter_card} />
      <meta name="twitter:site"         content={twitter_handle} />
      <meta name="twitter:title"        content={title} />
      <meta name="twitter:description"  content={meta.description} />
      <meta name="twitter:image"        content={meta.image} />

      {/* Preloaders */}
      <link rel="dns-prefetch" href="https://use.typekit.net/sjv6gba.css" />
      <link rel="prefetch" as="image" href="/images/bg.jpg" />

      {/* Analytics */}
      <script async defer src="https://cabin.tonydefaria.com/hello.js"></script>
    </Head>
  )
}
