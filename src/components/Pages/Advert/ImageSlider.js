import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import React, { useState } from 'react'
import './adv.css'
const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
   console.log(current);
    const sliderSyles={
        backgroundImage: `url('${slides[current].image}')`,
        backgroundSize:'cover',
        backgroundPosition:'top center',
        backgroundRepeat:'no-repeat',
        height:'100%',
        width:'100%',
        position:'absolute',
        
    }
    const nextSlide=()=>{
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
      };
      if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }
  

  return (
    <div style={{height:'100%', position:'relative'}} >
        <div className='left-btn' onClick={prevSlide}><NavigateBefore/></div>
            <div className='right-btn' onClick={nextSlide}><NavigateNext/></div>
            <div style={sliderSyles} className='sliderSyles' current={current} >
        </div>
    </div>
  )
}

export default ImageSlider