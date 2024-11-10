import { useState, useEffect } from 'react'
import './index.scss'
import LogoAB from '../../assets/images/logo-ab.svg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topbar = ({scrollPercent, loaderName, link, setLink}) => {

  const [navActive, setNavActive] = useState(false);
  const [ready, setReady] = useState('loading');
  const [iconChange, setIconChange] = useState('loading');

  const switchLink = (newlink) => {
    setLink(newlink);
    setNavActive(false);
  }

  useEffect(() => {
    setTimeout(() => {
      return setReady('ready');
    }, 3000);
    loaderName !== 'loader-end' ? setIconChange('loading') : setIconChange('ready');
  }, [loaderName]);

  return (
    <div className={`nav-bar _${scrollPercent} ${scrollPercent > 0 ? 'scroll-border' : ''} ${ready}`}>
        <div id="circularMenu" className={`circular-menu circular-menu-left ${navActive ? 'active' : ''}`}>
          <div className="floating-btn" onClick={() => setNavActive(!navActive)}>
            <div className={`nav-ham ${navActive ? 'active' : ''}`} onClick={() => setNavActive(!navActive)}>
              <span className={`bar ${iconChange}`}></span>
              <span className={`bar ${iconChange}`}></span>
              <span className={`bar ${iconChange}`}></span>
              <span className="cross">
              <span className="cross-bar"></span>
              <span className="cross-bar"></span>
              </span>
            </div>
          </div>
          <menu className="items-wrapper">
            <div className='items-group'>
              <NavLink exact="true" className={link === 'modeling' ? 'active' : ''} activeclassname="active" to="/3D/Modeling" onClick={() => switchLink('modeling')}>
                Modeling
              </NavLink>
              <NavLink exact="true" className={link === 'agent silhouette' ? 'active' : ''}  activeclassname="active" to="/2D/Agent-Silhouette" onClick={() => switchLink('agent silhouette')}>
                Agent Silhouette
              </NavLink>
              <NavLink exact="true" className={link === 'harbor' ? 'active' : ''}  activeclassname="active" to="/3D/Harbor" onClick={() => switchLink('harbor')}>
                Harbor
              </NavLink>
              <NavLink exact="true" className={link === 'cooking' ? 'active' : ''}  activeclassname="active" to="/3D/Cooking" onClick={() => switchLink('cooking')}>
                Cooking
              </NavLink>
              <NavLink exact="true" className={link === 'home' ? 'active' : ''}  activeclassname="active" to="/" onClick={() => switchLink('home')}>
                <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
            </div>
          </menu>
        </div>

        <NavLink exact="true" activeclassname="active" className='logo-link' to="/" onClick={() => switchLink('home')}>
          <img className={iconChange} src={LogoAB} alt="Logo" />
        </NavLink>
    </div>
  )
}

export default Topbar