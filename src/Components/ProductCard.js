import React from 'react';
import productCardStyles from '../Styles/productcard.module.css'

const ProductCard = ( {product} ) => {

  console.log('product',product)
  
  const { image, makerName, artName, price, discountedPrice } = product;

  return (
    <div className={productCardStyles.productCard}>
      <img src={image} alt={artName} className={productCardStyles.productImage} />
      <h3 className={productCardStyles.makerName}>{makerName}</h3>
      <p className={productCardStyles.artName}>{artName}</p>
      <div className={productCardStyles.priceContainer}>
        <span className={productCardStyles.price}>Rs {discountedPrice}</span>
        {price && (
          <span className={productCardStyles.discountedPrice}>Rs {price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;