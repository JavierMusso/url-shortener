import axios from "axios";
import React, { useState } from "react";

const Landing = () => {
  const [input, setInput] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState(false);

  const urlValidation = (url) => {
    return url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = input;
    if (input) {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
      }

      if (urlValidation(url)) {
        console.log(`shortening ${url}`);
        let { data } = await axios.post("/", { url });

        setShortenedUrl(`localhost:3000/${data.id}`);
        setError(false);
      } else {
        setShortenedUrl("");
        setError(true);
      }
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <h1>Landing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter site link here"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Shorten URL" />
      </form>
      {shortenedUrl && (
        <div>
          <p>
            Shortened URL: <a href={`http://${shortenedUrl}`}>{shortenedUrl}</a>
          </p>
          <button onClick={() => handleCopy(shortenedUrl)}>Copy link!</button>
        </div>
      )}
      {error && <p>The URL provided is not valid.</p>}
    </div>
  );
};

export default Landing;
