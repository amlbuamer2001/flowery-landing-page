import styles from "./Pricing.module.css";
import patternImg from "./../assets/images/pattern.webp";
import { PricingCard } from "./PricingCard";
import { pricingPlans } from "./pricingData";

export function Pricing() {
  return (
    <section
      id="pricing"
      className={`py-5 text-center position-relative ${styles["pricing-section"]}`}
    >
      <img
        src={patternImg}
        alt="Background pattern"
        className={`${styles['pattern-float']} position-absolute end-0`}
      />

      <div className="container">
        <h2 className={styles["section-title"]}>Our Pricing Plans</h2>

        <div className="row justify-content-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard plan={plan} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
