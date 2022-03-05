// Social Networks Secondary Component

export default function SocialNetworksSecondaryComponent({social_networks}) {
  // Cabin Event
  const trackSocialNetworkCabin = (event) => {
    window.cabin.event("Social Network Secondary")
  }

  // Fathom Event
  const trackSocialNetworkFathom = (event) => {
    document.querySelectorAll(".social-networks-secondary-track").forEach(item => {
      item.addEventListener("click", event => {
        fathom.trackGoal("2Y5AIMD6", 0)
      })
    })
  }

  const bindFunctions = (event) => {
    trackSocialNetworkCabin(event)
    trackSocialNetworkFathom(event)
  }

  return (
    <div className="social-networks-secondary">
      <ul className="social-networks-secondary-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-secondary-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" onClick={bindFunctions} className="link social-networks-secondary-track">{social_network.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
