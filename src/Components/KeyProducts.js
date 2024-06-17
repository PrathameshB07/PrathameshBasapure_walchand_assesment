import React from 'react';
import ProductCard from './ProductCard';
import keyProductStyles from '../Styles/keyproduct.module.css'

import basket from '../Images/Basket.jpg'
import duck from '../Images/Duck.jpg'
import keychain from '../Images/Keychain.jpg'
import PotBlue from '../Images/PotBlue.jpeg'
import PotBrown from '../Images/PotBrown.jpeg'

const KeyProduct = () => {
  const products = [
    {
      image:basket,
      makerName: 'Prathamesh B',
      artName: 'Basket Making',
      price: 1000,
      discountedPrice: 850,
    },
    {
      image:duck,
      makerName: 'Aditya K',
      artName: 'Clay Animal',
      price: null,
      discountedPrice: 300,
    },
    {
      image:keychain,
      makerName: 'Venkatesh B',
      artName: 'Varli Painting',
      price: 200,
      discountedPrice: 180,
    },
    {
      image:PotBlue,
      makerName: 'Saurabh R',
      artName: 'Pottery',
      price: null,
      discountedPrice: 400,
    },
    {
      image:PotBrown,
      makerName: 'Shrihari J  ',
      artName: 'Pottery',
      price: 390,
      discountedPrice: 370,
    },
    {
      image:basket,
      makerName: 'Soham K',
      artName: 'Basket Making',
      price: 1000,
      discountedPrice: 800,
    },
    {
      image:PotBrown,
      makerName: 'Shrihari J  ',
      artName: 'Pottery',
      price: 390,
      discountedPrice: 370,
    },
    
  ];

  console.log('all pro',products)

  return (
    <div id='key-products' className={keyProductStyles.container}>
      <div className={keyProductStyles.keyProduct}>
      <h2 className={keyProductStyles.heading}>Key Products</h2>
      <div className={keyProductStyles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default KeyProduct;