import React from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import potImg from '../Images/PotBlue.jpeg'
import basketImg from '../Images/Basket.jpg'
import duckImg from '../Images/Duck.jpg'
import bannerStyles from '../Styles/banner.module.css'

const SlidingBanner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showStatus={false}>
      <div className={bannerStyles.bannerItem}>
        <img src={potImg} className={bannerStyles.image} alt="Pot" />
        <div className={bannerStyles.heading}>Best hand made flower pots</div>
        <div className={bannerStyles.cta}>
          <Link to="/">Shop Now</Link>
        </div>
      </div>
      <div className={bannerStyles.bannerItem}>
        <img src={basketImg} className={bannerStyles.image} alt="Basket" />
        <div className={bannerStyles.heading}>Best hand wooden baskets</div>
        <div className={bannerStyles.cta}>
          <Link to="/">Shop Now</Link>
        </div>
      </div>
      <div className={bannerStyles.bannerItem}>
        <img src={duckImg} className={bannerStyles.image} alt="Duck" />
        <div className={bannerStyles.heading}>Best hand made clay animals</div>
        <div className={bannerStyles.cta}>
          <Link to="/">Shop Now</Link>
        </div>
      </div>
    </Carousel>
  )
}

export default SlidingBanner

