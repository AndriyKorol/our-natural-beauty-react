import React from 'react';
import { Carousel } from 'react-bootstrap'

function CarouselBar({interval, slides}) {
  return (
    <Carousel interval={interval} className="carousel-bar" slides="slides">
      {slides.map((slide) => {
          return (
              <Carousel.Item>
                  <img width={slide.width} height={slide.height} alt={`${slide.width}x${slide.height}`} src={slide.img} />
                  <Carousel.Caption>
                      <h2>{slide.label}</h2>
                      <p>{slide.description}</p>
                  </Carousel.Caption>
              </Carousel.Item>
          )
      })}
    </Carousel>
  )
}

export default CarouselBar 