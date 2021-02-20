import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import newCollectionImg from '../../img/slider-collection.png'
import endOfSeasonImg from '../../img/slider-sale.png'
import enjoySaleImg from '../../img/slider-enjoy.png'

const Slider = (props) => {
  const newSlide = [
    {
      wrapperClass: 'slider__wrapper-new-collection',
      title: 'new collection',
      titleClass: 'slider__new-collection',
      imageUrl: newCollectionImg,
      linkClass: 'slider__link slider__link__hover',
    },
    {
      wrapperClass: 'slider__wrapper-sale',
      title: 'end of season sale',
      titleClass: 'slider__sale',
      imageUrl: endOfSeasonImg,
      linkClass:
        'slider__link slider__link_sale slider__link__hover slider__link__hover_sale',
    },
    {
      wrapperClass: 'slider__wrapper-enjoy',
      title: 'enjoy 70% off',
      titleClass: 'slider__enjoy',
      imageUrl: enjoySaleImg,
      linkClass:
        'slider__link slider__link_enjoy slider__link__hover slider__link__hover_enjoy',
    },
  ]

  return (
    <Carousel
      navButtonsAlwaysInvisible={true}
      interval="3000"
      animation="slide"
      className="slider"
      stopAutoPlayOnHover={false}
    >
      {newSlide.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

const Item = ({ item }) => {
  return (
    <Paper>
      <img className="slider__image" src={item.imageUrl} alt="" />
      <div className={item.wrapperClass}>
        <h2 className={item.titleClass}>{item.title}</h2>
        <span className={item.linkClass}>Shop Now</span>
      </div>
    </Paper>
  )
}

export default Slider
