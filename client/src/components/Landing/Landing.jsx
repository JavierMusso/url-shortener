import React, { useState } from "react";
import Success from "../Success/Success";
import Error from "../Error/Error";
import { handleChange, handleSubmit } from "../../utils";

const Landing = () => {
  const [input, setInput] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <h1>Landing</h1>
      <form onSubmit={(e) => handleSubmit(e, setError, setShortenedUrl, input)}>
        <input
          type="text"
          placeholder="Enter site link here"
          value={input}
          onChange={(e) => handleChange(e, setInput)}
        />
        <input type="submit" value="Shorten URL" />
      </form>

      {shortenedUrl && <Success url={shortenedUrl} />}
      {error && <Error />}
    </div>
  );
};

export default Landing;
