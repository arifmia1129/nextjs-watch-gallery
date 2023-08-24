import ProductDetails from "@/components/UI/ProductDetails";
import React from "react";

const Product = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/watches/${params.productId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default Product;
