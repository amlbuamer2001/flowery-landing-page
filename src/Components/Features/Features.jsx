import styles from "./Features.module.css";
import pinkPaint from "./../../assets/images/pink-paint.png";
import product1 from "./../../assets/images/product1.jpg";
import product2 from "./../../assets/images/product2.jpg";
import product3 from "./../../assets/images/product3.jpg";
import product4 from "./../../assets/images/product4.jpg";
import { FeaturesCard } from "./FeaturesCard";

const productsData = [
    {
        id: 1,
        occasion: 'Birthday',
        imageUrl: product1,
        title: 'Tulips Delights',
        price: 23.00,
    },
    {
        id: 2,
        occasion: 'Thanksgiving',
        imageUrl: product2, 
        title: 'Autumn Harvest Bouquet',
        price: 28.00, 
    },
    {
        id: 3,
        occasion: 'Anniversary',
        imageUrl: product3,
        title: 'Beauty Flower Vase',
        price: 30.00,
        originalPrice: 39.00,
    },
    {
        id: 4,
        occasion: 'Get Well Soon',
        imageUrl: product4,
        title: 'Pearly Everlasting',
        price: 36.00,
    },
];


export function Features() {
  return (
    <section id="features" className={`position-relative my-sm-4 my-lg-0 py-5 ${styles.features}`}>
      <h2 className={`text-center ${styles["features-header"]}`}>
        Features Collection
      </h2>
      <img
        className={`position-absolute ${styles["pink-paint"]}`}
        src={pinkPaint}
        alt="Decorative pink paint stroke background"
      />
      <div className="row mx-auto g-5 mt-3 mt-lg-2 text-center">
       {productsData.map((product,index)=> <FeaturesCard key={product.id} product={product} index={index} />)}


       
      </div>
    </section>
  );
}
