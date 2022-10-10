import {Slide } from 'react-slideshow-image';
import slideimg1 from './DataBaseProject/pic1.png'
import slideimg2 from './DataBaseProject/pic2.png'
import slideimg3 from './DataBaseProject/pic3.png'
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

const Slideshow_two = () => {
  return (
    <div className="slide-container">
    <h3>
      Project name: Basic Database <br/>
      Programming language: PHP - Html<br/>
      Database: SQL
    </h3>
      <Slide {...properties}>
      
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>PHP Main_men</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>PHP Main_men</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Couple code</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow_two