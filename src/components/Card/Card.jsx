import { Link } from "react-router-dom";
import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div>
      <Link to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            <img src={item.img} alt="" className="mainImg" />
            <img src={item.img2} alt="" className="secondImg" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
