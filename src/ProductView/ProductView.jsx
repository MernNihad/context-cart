import React, { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import { products } from "../components/products";

function ProductView() {
  const values = useContext(AppContext);
  const { product } = values;

  const { id } = useParams();

  let result = products.find((item) => item.id == id);
  console.log(products, "--");

  return (
    <>
      <img
        src={result.imageSrc}
        alt={result.imageAlt}
        className="h-full w-full object-cover object-center w-60"
      />
      <p className="text-sm font-medium text-gray-900">
        Price : {result.price}
      </p>

      <p className="mt-1 text-sm text-gray-500">Color : {result.color}</p>
    </>
  );
}

export default ProductView;
