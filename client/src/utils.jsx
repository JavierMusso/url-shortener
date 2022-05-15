import axios from "axios";

export const urlValidation = (url) => {
  return url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  );
};

export const handleSubmit = async (e, setError, setShortenedUrl, input) => {
  e.preventDefault();
  let url = input;
  if (input) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }

    if (urlValidation(url)) {
      console.log(`shortening ${url}`);
      let { data } = await axios.post("/", { url });

      if (!process.env.REACT_APP_API) {
        setShortenedUrl(`localhost:3000/${data.id}`);
      } else {
        setShortenedUrl(`jtm.vercel.app/${data.id}`);
      }
      setError(false);
    } else {
      setShortenedUrl("");
      setError(true);
    }
  } else {
    setError(false);
    setShortenedUrl("");
  }
};

export const handleChange = (e, setInput) => {
  setInput(e.target.value);
};
