import React from "react";
import { useHistory } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "@/assets/image.jpg";
import "./styles.scss";

export default ({ desk, large, tablet, mobile }) => {
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            className="item"
            key={item}
            onClick={() => history.push(`/movie/${item}`)}
          >
            <figure>
              <img src={image} alt="" />
            </figure>
            <div className="content">
              <p className="description">The Dark Tower</p>
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
