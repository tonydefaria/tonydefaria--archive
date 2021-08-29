// Contact

// Layout
import Secondary from "../layouts/secondary"

// Components
import MetaComponent from "../components/meta_component"

// Data
import Hankyo from "../lib/hankyo"

export default function Contact({project}) {

  const page = project.pages.find(({uid}) => uid === 9999)
  const networks = project.networks_component
  const vCardComponent = page.vcard_component

  return (
    <div>
      <MetaComponent project={project} page={page} />
      <div className="content">
        <div className="content-box">
          <div className="content-row">
            <h1 className="font-size-xxl">{page.title}</h1>
            <hr className="separator-xxs" />
            <div className="width-wide float-left" dangerouslySetInnerHTML={{ __html: page.description }} />
            <hr className="separator-s" />
            <div className="vcard">
              <div className="vcard-box">
                <div className="vcard-row">
                  <p className="font-size-xl font-weight-700">{vCardComponent.email}</p>
                </div>
              </div>

              <ul className="vcard-box list-style-none">
                {networks.map((network) => (
                  <li key={network.uid} className="vcard-item">
                    <a className="link-xs link-black hover-underline" rel="noreferrer noopener" href={network.network_url + network.username} target="_blank">{network.network}</a>
                  </li>
                ))}
              </ul>
            </div>
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

Contact.Layout = Secondary
