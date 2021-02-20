import React, { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

const Slider = (props) => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/slides')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setSlides(res)
        console.log('res', res)
      })
  }, [])

  return (
    <Carousel
      navButtonsAlwaysInvisible={true}
      interval="6000"
      animation="slide"
      className="slider"
      stopAutoPlayOnHover={false}
    >
      {slides.map((item, i) => (
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

