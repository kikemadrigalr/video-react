import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => {
  //hooks para urilizar estado y hacer peticiones a APi
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  //hook useEffet se hará la peticion a la api
  useEffect(async () => {
    try {
      let resp = await fetch("http://localhost:4001/initialState"),
        data = await resp.json();

      if (!resp.ok) {
        throw { status: resp.status, statusText: resp.statusText };
      }

      return setVideos(data);
    } catch (error) {
      let message = error.statusText || "Ocurrio un Error";
      console.error(`Error ${error.status}: ${message}`);
    }
  }, []);

  //setVideos asigno el resultado de la peticion a videos
  console.log(videos);
  console.log(videos.trends);

  return (
    <div className="App">
      <Header />
      <Search />

      {/* Section Categorias */}
      {videos.mylist?.length && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      {/* section  Tendencias*/}
      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      {/* Seccion Nuevo */}
      <Categories title="Novedades de Platzi Video">
        <Carousel>
          {videos.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
