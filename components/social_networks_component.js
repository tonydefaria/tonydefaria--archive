// SocialNetworks Component

// Built-in Components
import Image from "next/image"

export default function SocialNetworksComponent({project, social_networks}) {
  // Cabin Event
  const trackSocialNetworkCabin = (event) => {
    window.cabin.event("Social Network")
  }

  // Fathom Event
  const trackSocialNetworkFathom = (event) => {
    document.querySelectorAll(".social-networks-track").forEach(item => {
      item.addEventListener("click", event => {
        fathom.trackGoal("QGUR77ZM", 0)
      })
    })
  }

  const bindFunctions = (event) => {
    trackSocialNetworkCabin(event)
    trackSocialNetworkFathom(event)
  }

  return (
    <div className="social-networks flex-h-center">
      <ul className="social-networks-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" onClick={bindFunctions} className="link social-networks-track">
              <div className="icon">
                <figure>
                  <Image src={social_network.image} width={64} height={64} quality={100} alt="Icon" title="Tony de Faria" />
                </figure>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
