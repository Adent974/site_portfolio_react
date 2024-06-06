import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect} from "react";
import logo from '../assets/img/logo.png';
import icon1 from '../assets/img/nav-icon1.svg';
import icon2 from '../assets/img/nav-icon2.svg';
import icon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false); 
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span> 
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active nav-bar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active nav-bar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active nav-bar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={icon1} alt=""/></a>
                    <a href="#"><img src={icon2} alt=""/></a>
                    <a href="#"><img src={icon3} alt=""/></a>
                </div>
                <button className="test" onClick={() => console.log('connect')}><span>Connectons nous !</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}