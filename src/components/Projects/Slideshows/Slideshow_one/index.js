import {Slide } from 'react-slideshow-image';
import slideimg1 from './HeroesOfMightProject/pic1.png'
import slideimg2 from './HeroesOfMightProject/pic2.png'
import slideimg3 from './HeroesOfMightProject/pic3.png'
import '../index.scss';




const slideImages =  [
  slideimg1,
  slideimg2,
  slideimg3
    
];



console.log(slideimg1)

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

const Slideshow_one = () => {
  return (
    <div className="slide-container">
    <h3>
      Project name: HeroesOfMight & Magic - Duel low version <br/>
      Programming language: Java<br/>
      Gui: JavaFx
    </h3>
      <Slide {...properties}>
      
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Main_Menu</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Preparation</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Fighting scene</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow_one