import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import facebook from '../img/facebook-app-logo.svg';
import youtube from '../img/youtube-logotype.svg';
import instagram from '../img/instagram-logo.svg';
import linkedin from '../img/linkedin-logo.svg';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
          <Container>
            <Row>
            <footer className="site-footer">
                <div className="layout-container">
                    <div className="site-footer--top">
                    


                        <div className="footer-content">
                        <nav role="navigation" aria-labelledby="block-aboutus-3-menu" id="block-aboutus-3" data-block-plugin-id="system_menu_block:about-us" className="block block-menu navigation menu--about-us">
                            
                        <h2 id="block-aboutus-3-menu">Om Interflora</h2>
                        

                                
                                    <ul className="menu">
                                            <li className="menu-item">
                                <a href="https://interflora.dk/historien-om-interflora-0" title="Historien om Interflora" data-drupal-link-system-path="node/626">Historien om Interflora</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/virksomhedsprofil" data-drupal-link-system-path="node/96">Virksomhedsprofil</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/optagelse-i-interflora" title="Optagelse i Interflora" data-drupal-link-system-path="node/116">Optagelse i Interflora</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/blomsterlevering" data-drupal-link-system-path="node/136">Blomsterlevering</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/bliv-blomsterdekorator" data-drupal-link-system-path="node/131">Bliv blomsterdekoratør</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/presse" title="Presse" data-drupal-link-system-path="node/151">Presse</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/job-hos-interflora" data-drupal-link-system-path="node/461">Job hos Interflora</a>
                                    </li>
                                        <li className="menu-item">
                                <a href="https://interflora.dk/personlige-interflora-historier" title="Personlige Interflora historier" data-drupal-link-system-path="node/356">Personlige Interflora historier</a>
                                    </li>
                                </ul>
                        


                        </nav>

                        </div>

                    


                        <div className="footer-content">
                            <nav role="navigation" aria-labelledby="block-footer-2-menu" id="block-footer-2" data-block-plugin-id="system_menu_block:footer" className="block block-menu navigation menu--footer">
                                
                            <h2 id="block-footer-2-menu">Sig det med blomster</h2>
                            

                                    
                                        <ul className="menu">
                                                <li className="menu-item">
                                    <a href="https://interflora.dk/blomstersorter" title="Blomstersorter" data-drupal-link-system-path="node/176">Blomstersorter</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/blomsternavne" data-drupal-link-system-path="node/51">Blomsternavne</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/gaveideer-til-livets-ojeblikke" data-drupal-link-system-path="node/191">Gaveideér til livets øjeblikke</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/flora-evergreen" title="Flora &amp; Evergreen" data-drupal-link-system-path="node/376">Flora &amp; Evergreen</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/orangeri-chokolade" data-drupal-link-system-path="node/511">Orangeri Chokolade</a>
                                        </li>
                                    </ul>
                            


                            </nav>

                        </div>


                    


                        <div className="footer-content">
                            <nav role="navigation" aria-labelledby="block-customerservice-3-menu" id="block-customerservice-3" data-block-plugin-id="system_menu_block:customer-service" className="block block-menu navigation menu--customer-service">
                                
                            <h2 id="block-customerservice-3-menu">Kundeservice</h2>
                            

                                    
                                        <ul className="menu">
                                                <li className="menu-item">
                                    <a href="https://interflora.dk/cookie-og-privatlivspolitik" data-drupal-link-system-path="node/146">Cookie og Privatlivspolitik</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/handels-og-abonnementsbetingelser" data-drupal-link-system-path="node/156">Handels- og abonnementsbetingelser</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/kontakt" data-drupal-link-system-path="node/186">Kontakt</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/ofte-stillede-sporgsmal" data-drupal-link-system-path="node/166">Ofte stillede spørgsmål</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/interflora-erhverv" data-drupal-link-system-path="node/161">Til erhvervskunderne</a>
                                        </li>
                                            <li className="menu-item">
                                    <a href="https://interflora.dk/vores-butikker" data-drupal-link-system-path="node/656">Vores butikker</a>
                                        </li>
                                    </ul>
                            </nav>

                        </div>

                        <div className="footer-content social-menu">
                            <h2>Følg os</h2>
                            <ul className="links">
                                <li><a className="youtube" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/InterfloraTV">
                                    <img alt="icon" src={youtube}/>
                                </a></li>
                                <li><a className="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InterfloraDanmark">
                                    <img alt="icon" src={facebook}/>
                                </a></li>
                                <li><a className="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/interfloradk/">
                                    <img alt="icon" src={instagram}/>
                                </a></li>
                                <li><a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/interfloradanmark">
                                    <img alt="icon" src={linkedin}/>
                                </a></li>
                            </ul>
                        </div>

                </div>
            </div>
        </footer>
        </Row>
          </Container>
        </div>
        );
    }

}

export default Footer;