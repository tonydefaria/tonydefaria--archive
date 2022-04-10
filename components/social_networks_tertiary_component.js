// Social Networks Tertiary Component

// Built-in Components
import Image from "next/image"

export default function SocialNetworksTertiaryComponent({social_networks, link_colour}) {
  // Cabin Event
  const trackSocialNetworkCabin = () => {
    window.cabin.event("Social Network Tertiary")
  }

  const bindFunctions = () => {
    trackSocialNetworkCabin()
  }

  return (
    <div class="menu-mobile-inner">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="menu-mobile-inner-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" className={`link-m ${link_colour}`}>{social_network.name}</a>
          </li>
        ))}
    </div>
  )
}
