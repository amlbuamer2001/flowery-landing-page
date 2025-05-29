import styles from "./Pricing.module.css";
import { CustomButton } from "./../Shared/CustomButton";

export function PricingCard({ plan }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className={`${styles["pricing-card"]} ${
          plan.popular ? styles["popular"] : ""
        }`}
      >
        {plan.popular && <div className={styles["badge"]}>Most Popular</div>}

        <h3 className={styles["plan-title"]}>{plan.name}</h3>

        <p className={styles["price"]}>${plan.price}</p>

        <ul className={styles["features-list"]}>
          {plan.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <CustomButton>{plan.buttonText}</CustomButton>
      </div>
    </div>
  );
}
