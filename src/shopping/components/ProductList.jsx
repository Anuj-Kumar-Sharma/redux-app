import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-around">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
