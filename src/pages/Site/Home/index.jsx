import MovieSlider from "@/components/MovieSlider";
import SideMenu from "@/components/SideMenu";
import api from "@/services";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import "./styles.scss";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  localStorage.removeItem("session");
  localStorage.removeItem("tickets");
  const [banner, setBanner] = useState([]);
  async function getAllMovies() {
    dispatch(setLoading(true));
    await api("getAllMovies")
      .then((res) => res.json())
      .then(async (data) => {
        setBanner(data);
        if (data.length) {
          dispatch(setLoading(false));
        }
      })
      .catch((err) => {});
  }
  async function checkIfLogged() {
    if (!localStorage.getItem("user")) {
      api("login", {
        method: "POST",
        body: { cpf: 99999999999, password: 123 },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.userType) {
            localStorage.setItem("user", JSON.stringify(data));
            history.push(`/main`);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }
  useEffect(() => {
    getAllMovies();
    checkIfLogged();
  }, []);
  return (
    <div id="home">
      <SideMenu />
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {banner
          .filter((m) => m.carousel)
          .map((mv, index) => (
            <Banner movie={mv} key={index} />
          ))}
      </Carousel>
      <div className="container">
        <h4 className="title">Populares</h4>
        <MovieSlider banner={banner} />
      </div>
      <div className="container">
        <h4 className="title">Categorias</h4>
        <Categories movies={banner} />
      </div>
    </div>
  );
};
const setLoading = (isLoading) => {
  return { type: "NOW_LOADING", isLoading };
};
