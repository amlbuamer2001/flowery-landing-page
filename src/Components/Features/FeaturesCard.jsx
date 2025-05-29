import product1 from "./../../assets/images/product1.jpg";
import styles from "./Features.module.css";

export function FeaturesCard({index,product:{title,occasion,imageUrl,price,}}) {
  return (
     <div
      className={`col-md-6 col-lg-3 ${styles['card-animate']}`}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
          <div className={styles.aml}>
            <div className={`${styles["product-item"]}`}>
              <img src={imageUrl} alt={title} />
              <span className={`${styles["service-badge"]}`}>{occasion}</span>
            </div>
            <div className={styles['product-info']}>
              <p className={`mt-3 mb-0 ${styles["features-product-title"]}`}>
                {title}
              </p>
              <span className={styles["product-price"]}>$ {price} USD</span>
            </div>
            
          </div>
        </div>
  )
}
