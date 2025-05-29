import purplePaint from "./../../assets/images/purple-paint.png";
import FlowerImg from "./../../assets/images/hero-flower.png";
import FlowerOverlay from "./../../assets/images/flower-overlay.webp";
import styles from "./Hero.module.css";
import { CustomButton } from "../../Shared/CustomButton";

export function Hero() {
  return (
    <section id="home" className={`text-center mx-auto ${styles.heroSection}`}>
      <img
        className={styles.purplePaint}
        src={purplePaint}
        alt="Decorative purple paint stroke background"
      />

      <p className={`mb-0 ${styles["hero-pre-title"]}`}>Discover our</p>
      <h1 className={styles["hero-title-header"]}>Beautiful Bouquets</h1>

      <div className="row mt-4">
        <div className="col-md-6 order-1 order-md-0">
          <div className="ms-0 ms-lg-5 mt-2 text-center">
            <p
              className={`mx-auto ${styles["hero-subtitle"]}`}
            >
              Fresh flowers for unforgettable moments. Custom arrangements for
              every taste.
            </p>
            <CustomButton  className='me-auto'>
                Shop Now
            </CustomButton>
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <div className={styles.heroImageWrapper}>
            <img
              className={styles.overlayImg}
              src={FlowerOverlay}
              alt="Decorative flower overlay"
            />
            <img
              className={styles.flowerImg}
              src={FlowerImg}
              alt="Main flower bouquet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
