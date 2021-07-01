// App

// Built-in Components
import React from "react"

// Stylesheets
import "../styles/composer.scss"

export default function MyApp({ Component, pageProps}) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
