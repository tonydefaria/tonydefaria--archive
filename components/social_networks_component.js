// Hankyo Integration
// ----------------------------------------------------
// SocialNetworks Component

// Built-in Components
import Image from "next/image"

export default function SocialNetworksComponent({project, social_networks}) {
  return (
    <div className="networks flex-h-center">
      <ul className="networks-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="networks-item">
            <a className="link" rel="noreferrer noopener" href={social_network.url} target="_blank">
              <div className="icon">
                <Image src={social_network.image} width={64} height={64} alt="icon" title={project.title}/>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
