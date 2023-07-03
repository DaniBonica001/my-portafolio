import "./styles.css";
import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { useState } from "react";

function NavBar() {
    const [show, setShow] = useState(false);
    const ShowNavMenu = (event)=>{
        setShow(!show)
    }
    const HideNavMenuBySection =(event)=>{
        setShow(false)
    }
    

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Daniela
          </a>
          <div className={`nav__menu ${show ? 'show-menu': ''}`} id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav_item">
                <a href="#" className="nav__link" onClick={HideNavMenuBySection}>
                  <UilEstate className="nav__icon"/> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav__link" onClick={HideNavMenuBySection}>
                  <UilUser className="nav__icon"/> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav__link" onClick={HideNavMenuBySection}>
                  <UilFileAlt className="nav__icon"/> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav__link" onClick={HideNavMenuBySection}>
                  <UilBriefcaseAlt className="nav__icon"/> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav__link" onClick={HideNavMenuBySection}>
                  <UilScenery className="nav__icon"/> Portafolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav__link" onClick={HideNavMenuBySection}>
                  <UilMessage className="nav__icon"/> Contact me
                </a>
              </li>
            </ul>
            <UilTimes className="nav__close" id="nav-close" onClick={ShowNavMenu} />
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" id="nav-toggle" >
              <UilApps onClick={ShowNavMenu}/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
