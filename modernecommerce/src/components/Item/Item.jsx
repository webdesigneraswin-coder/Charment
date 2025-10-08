import React from "react";
import "./item.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (

      <div className="item">
        <div className="itemimg">
       <Link to="/checkout">   <img onClick={window.scroll(0,0)} src={props.image} alt="" /></Link>
          <div className="priceunderimg">
            <p>${props.price}</p>
          </div>
        </div>
        <div className="itemname">
          <p>{props.name}</p>
        </div>
      </div>
   
  );
};

export default Item;
