import React from 'react'
import Slider from 'infinite-react-carousel';
import "./Slide.scss"



const Slide = ({children,slidesToShow,arrowsScroll,gap}) => {
  return (
    <div className='slide'>
      <div className="container">
        <Slider  slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} gap={gap}>
            { children  }
      </Slider>

      </div>
        
    </div>
  )
}

export default Slide