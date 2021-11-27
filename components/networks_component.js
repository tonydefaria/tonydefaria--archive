// Hankyo Integration
// ----------------------------------------------------
// Networks Component

// Built-in Components
import Image from "next/image"

export default function NetworksComponent({project, networks}) {
  return (
    <div className="networks flex-h-center">
      <ul className="networks-box">
        {networks.map((network) => (
          <li key={network.uid} className="networks-item">
            <a className={`link`} rel="noreferrer noopener" href={network.network_url + network.username} target="_blank">
              <div className="icon">
                <Image src={network.image} height="64" width="64" alt="icon" title={project.title}/>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
