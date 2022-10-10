import {Slide } from 'react-slideshow-image';
import slideimg1 from './Webshop/pic1.png'
import slideimg2 from './Webshop/pic2.png'
import slideimg3 from './Webshop/pic3.png'
import '../index.scss';




const slideImages =  [
  slideimg1,
  slideimg2,
  slideimg3
    
];




const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow_three = () => {
  return (
    <div className="slide-container">
    <h3>
        Project name: Cat Webshop <br/>
        Language: PHP - Html<br/>
     
    </h3>
      <Slide {...properties}>
      
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Registration - login panel</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Some code</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>One page of many</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow_three