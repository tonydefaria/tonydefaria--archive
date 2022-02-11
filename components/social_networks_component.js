// SocialNetworks Component

// Built-in Components
import Image from "next/image"

export default function SocialNetworksComponent({project, social_networks}) {
  return (
    <div className="social-networks flex-h-center">
      <ul className="social-networks-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-item">
            <a className="link" rel="noreferrer noopener" href={social_network.url} target="_blank">
              <div className="icon">
                <figure>
                  <Image src={social_network.image} width={64} height={64} quality={100} alt="Tony de Faria" title="Tony de Faria" />
                </figure>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
