import React from "react";
import styles from "./Success.module.css";

const Success = ({ url }) => {
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles.Success}>
      <p>
        ✅ Shortened URL: <a href={`http://${url}`}>{url}</a>
      </p>
      <button onClick={() => handleCopy(url)}>Copy link!</button>
    </div>
  );
};

export default Success;
