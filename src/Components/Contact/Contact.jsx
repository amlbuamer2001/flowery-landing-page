import { useState } from "react";
import styles from "./Contact.module.css";
import { CustomButton } from "../../Shared/CustomButton";
import contactImg from "./../../assets/images/Img.jpg";
import flower from "./../../assets/images/flower.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className={`py-0 py-md-5 mb-5 position-relative ${styles["contact-section"]}`}
    >
      <img
        className={`position-absolute ${styles["flower-deco"]}`}
        src={flower}
        alt="Decorative flower"
      />
      <div className="container">
        <h2 className={`text-center ${styles["section-title"]}`}>
          Get In Touch
        </h2>
        <p className={`text-center ${styles["subtitle"]}`}>
          We'd love to hear from you! 🌸
        </p>

        <div className="row align-items-center">
          <div className="col-md-7 d-flex mb-4 mb-md-0">
            <form className={`${styles["contact-form"]}`} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={styles["form-input"]}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles["form-input"]}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className={styles["form-textarea"]}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="text-start">
                <CustomButton type="submit">Send Message</CustomButton>
              </div>
            </form>
          </div>
          <div className="col-md-5 d-flex justify-content-end position-relative">
            <img
              src={contactImg}
              alt="Contact"
              className={` ${styles["contact-img"]}`}
            />
            <div
              className={`position-absolute text-start ${styles["content-img-container"]}`}
            >
              <h4>Best wishes</h4>
              <p className="fs-6 mt-3">
                Use the language of flowers to send your love. Our shop offers a
                wide selection of high-quality blooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
