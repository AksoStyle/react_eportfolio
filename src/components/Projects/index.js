import './index.scss';
import {useState, useEffect} from 'react';
import AnimatedLetters from './../AnimatedLetters'

import 'react-slideshow-image/dist/styles.css'
import SlideShowOne from './Slideshows/Slideshow_one';
import SlideShowtwo from './Slideshows/Slideshow_two';
import SlideShowthree from './Slideshows/Slideshow_three';


const Projects = () => {
const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
    async function check(){
     return setTimeout(() => {
         setLetterClass('text-animate-hover')
     }, 2750)
    }
    check()
 }, [] )

    return(
        
        <>
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['M','y',' ','p','r','o','j','e','c','t','s',' ','p','a','g','e']}
        idx={10}
        />
        </h1>
        <div className="projects-container">
           <SlideShowOne/>
            <br/>
            <br/>
            <SlideShowtwo/>
            <br/>
            <br/>
            <SlideShowthree/>
        </div>
        </>
        
    )
    
}

export default Projects