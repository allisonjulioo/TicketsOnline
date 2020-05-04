import React from "react";
import { FaStar } from "react-icons/fa";
import image from "@/assets/image.jpg";
import "./styles.scss";

export default () => {
  return (
    <div id="slider">
      <div className="row">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="item" key={item}>
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
      </div>
    </div>
  );
};
