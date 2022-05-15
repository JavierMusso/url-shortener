import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Redirect = () => {
  let { id } = useParams();

  useEffect(() => {
    let getUrl = async (id) => {
      let { data } = await axios.get(`/${id}`);
      console.log(data);

      if (data.error) {
        window.location.replace("/");
      } else {
        window.location.replace(data.url);
      }
    };
    getUrl(id);
  }, [id]);

  return <div></div>;
};

export default Redirect;
