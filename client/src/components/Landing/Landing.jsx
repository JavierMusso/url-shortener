import React, { useState } from "react";
import Success from "../Success/Success";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import { handleChange, handleSubmit } from "../../utils";
import styles from "./Landing.module.css";

const Landing = () => {
  const [input, setInput] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className={styles.Landing}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.test}>
            <h1>JTM</h1>
            <span>
              a free 💸 and easy <br /> way to shorten URLs! 🚀
            </span>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e, setError, setShortenedUrl, input)}
          >
            <input
              type="text"
              placeholder="Enter link here..."
              value={input}
              onChange={(e) => handleChange(e, setInput)}
              maxLength="250"
            />
            <input type="submit" value="Shorten URL" />
          </form>
        </div>

        {!shortenedUrl && !error && (
          <small>Just paste an URL and click "Shorten URL"!</small>
        )}
        {shortenedUrl && <Success url={shortenedUrl} />}
        {error && <Error />}
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
