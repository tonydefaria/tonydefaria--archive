// Social Networks Primary Component

// Built-in Components
import Image from "next/image"

export default function SocialNetworksPrimaryComponent({social_networks}) {
  // Cabin Event
  const trackSocialNetworkCabin = (event) => {
    window.cabin.event("Social Network Primary")
  }

  // Fathom Event
  const trackSocialNetworkFathom = (event) => {
    document.querySelectorAll(".social-networks-primary-track").forEach(item => {
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
    <div className="social-networks-primary flex-h-center">
      <ul className="social-networks-primary-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-primary-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" onClick={bindFunctions} className="link social-networks-primary-track">
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
