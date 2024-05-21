import React from 'react';
import './Product.scss';

const Product = ({ products }) => {

  let pr =products ?.products?.slice(0,8).map((product) => (
    <div className="product-card" key={product.id}>
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  ))  
  return (
    <div className="wrapper  conteiner ">
        {pr}
    </div>
  );
};

export default Product;

