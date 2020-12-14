//puedo definir custom hooks, en archvos externos
// e importarlos en el componente donde sea necesario
import { useState, useEffect } from "react";

const [videos, setVideos] = useState({
  mylist: [],
  trends: [],
  originals: [],
});

const useInitialState = (API) => {
  useEffect(async () => {
    try {
      let resp = await fetch(API),
        data = await resp.json();
      setVideos(data);

      if (!resp.ok) {
        throw { status: resp.status, statusText: resp.statusText };
      }

      return videos;
    } catch (error) {
      let message = error.statusText || "Ocurrio un Error";
      console.error(`Error ${error.status}: ${message}`);
    }
  }, []);
};

export default useInitialState;
