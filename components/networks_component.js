// Hankyo Integration
// ----------------------------------------------------
// Networks Component

export default function NetworksComponent({project, link_colour}) {

  const networks = project.networks_component

  return (
    <div className="networks">
      <ul className="networks-box list-style-none">
        {networks.map((network) => (
          <li key={network.uid} className="networks-item flex-h-center">
            <a className={`link-xs ${link_colour} hover-underline`} rel="noreferrer noopener" href={network.network_url + network.username} target="_blank">{network.network}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
