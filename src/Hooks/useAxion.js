import axios from "axios";
import { useState, useEffect } from "react";

export const useAxion = (page) => {

  const [data, setData] = useState([]);
  let Url = `https://rickandmortyapi.com/api/character/?page=${page}`

  useEffect(() => {
    
    axios
      .get(Url)
      .then((response) => setData(response.data.results))
      .catch((error) => {
        console.error("Error de  Lectura  data:", error);
      });
  }, [Url]);

  return {
    data,
  };
  
};
