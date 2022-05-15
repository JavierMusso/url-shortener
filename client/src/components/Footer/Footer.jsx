import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>
        App made with React by{" "}
        <a href="https://github.com/JavierMusso" target="_blank">
          Javier Musso
        </a>
        👨‍💻
      </p>
    </div>
  );
};

export default Footer;
