import { useState, useEffect } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";
import headerLogo from "./../../assets/icons/header-logo.svg";
import openMenu from './../../assets/icons/menu-open.svg';
import styles from './Header.module.css';

import { WelcomeMessage } from "./WelcomeMessage";
import { NavigationLinks } from "./NavigationLinks";

export function Header() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WelcomeMessage visible={showWelcome} />

      <Navbar expand="lg" className="mt-2">
        <Navbar.Brand href="#home">
          <img className={styles['header-logo']} src={headerLogo} alt="header-logo" />
        </Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="offcanvasNavbar" >
          <img src={openMenu} alt="menu toggle" />
        </Navbar.Toggle>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ color: "inherit" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img style={{ height: "40px" }} src={headerLogo} alt="header-logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <NavigationLinks />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}
