import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.scss";

export default ({ desk, large, tablet, mobile, banner }) => {
  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    if (banner && banner.length) {
      setCarousel(banner);
    }
  }, [banner]);

  const history = useHistory();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: large || 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: desk || 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: tablet || 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobile || 3,
    },
  };
  return (
    <div id="slider">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000} 
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {carousel.map((b, index) => (
          <div
            className="item"
            key={index}
            onClick={() => history.push(`/movie/${b.id}`)}
          >
            <figure>
              <img src={b.poster} alt="" />
            </figure>
            <div className="content">
              <p className="description">{b.name}</p>
              <div className="rating">
                <p>8,1</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} color="#FFC107" size={12} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
