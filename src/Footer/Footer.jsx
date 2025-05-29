// Footer.jsx
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import FooterImg from "./../assets/images/footer-image.png";
import FooterLogo from "./../assets/icons/header-logo.svg";

export function Footer() {
  return (
    <footer className={`position-relative ${styles.footer}`}>
      <div className={`container position-relative ${styles.footerContent}`}>
        <img
          className={`position-absolute ${styles.footerImg}`}
          src={FooterImg}
          alt="Decoration"
        />

        <div className={styles.topSection}>
          <img src={FooterLogo} alt="flowery Logo" className={styles.logoImg} />

          <p className={styles.description}>
            Flowery brings you joy through elegant floral arrangements, crafted with love.
          </p>

          <ul className={styles.links}>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.socials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
          <p className={styles.copy}>© 2025 Fl🌸wery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
