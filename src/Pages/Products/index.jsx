import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../Components/Card";

export default function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales",
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
        setProducts(data.data)
      } catch (err) {
        alert('Error Fetching Data');
      }
    })();
  }, []);
  const items=products?.map((e,index)=><Card key={index} id={e.id} name={e.attributes.name} price={e.attributes.price} img={e.attributes['image-urls'][0]}/>)
  return <>
  {products?<div className="d-flex flex-wrap gap-3 justify-content-between">{items}</div>:<p>loading...</p>}
  </>;
}
