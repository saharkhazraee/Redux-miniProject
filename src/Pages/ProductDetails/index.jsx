import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css'
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate=useNavigate()
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://sephora.p.rapidapi.com/products/v2/detail?id=${id}&country=SG&language=en-SG`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "793e61b096msh0180bc0bcfc492bp1a3463jsna5f724afc1c4",
              "X-RapidAPI-Host": "sephora.p.rapidapi.com",
            },
          }
        );
        const data=await res.json()
        if(data.data){
          setProduct(data.data)

        }else{
          navigate('/not-found')
        }
      } catch (err) {
        alert("fetching data failed");
      }
    })();
  }, [id]);
  return <>
    {product?<div className="card mb-3 mx-auto  w-75 shadow-lg detail-card" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.attributes['image-urls'][0]} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.attributes.name}</h5>
        <p className="card-text">{product.attributes.description}</p>
        <p className="card-text">{product.attributes['display-price']}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>:<p>loading....</p>}
  </>;
}
