import React from "react";
import './Card.css'
import { Link } from "react-router-dom";
export default function Card({img,name,price,id}) {
  return (
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">
         Price : ${price/100}
        </p>
        <Link to={`/product-details/${id}/${name.replaceAll(' ','-')}`} class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
