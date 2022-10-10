import './index.scss';
import AnimatedLetters from './../AnimatedLetters/index';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular,faHtml5,faCss3,faReact,faJsSquare,faGitAlt} from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        async function check(){
         return setTimeout(() => {
             setLetterClass('text-animate-hover')
         }, 2750)
        }
        check()
     }, [] )


    return (
         <>
        <div className="container about-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e',]}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a beginner in the world of programming, but I started 
                    to feel myself more ambitious as I was learning more and 
                    and more about IT.</p>
                <p>
                    I can cope with problems, and work in group easily. I am
                    curious about programming languages, and the deeper knowledge
                    I am able to achieve in time.</p>
                <p>
                    I define myself as a caring person, who always try to be in the
                    good place in good time for others. I love sports and taking pictures
                    of animals, sky, landscapes.
                </p>
                <p>
                Languages I know:
                </p>
                <p>
                C, C#, Java, JavaScript, Python.
                </p>
                <p>
                For Web development i know:
                </p>
                <p>
                HTML5, CSS (SCSS), PHP, Javascript, Typescript (a little)
                </p>
                <p>
                Framework:React
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/> 
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About