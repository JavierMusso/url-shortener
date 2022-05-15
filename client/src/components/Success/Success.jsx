import React from "react";

const Success = ({ url }) => {
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <p>
        Shortened URL: <a href={`http://${url}`}>{url}</a>
      </p>
      <button onClick={() => handleCopy(url)}>Copy link!</button>
    </div>
  );
};

export default Success;
