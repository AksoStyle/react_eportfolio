import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from './../AnimatedLetters';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A','k','o','s',' ','F','a','r','a','g','o',]
    const jobArray = ['U','n','i','v','e','r','s','i','t','y',' ', 's','t','u','d','e','n','t','.']

    useEffect(() => {
       async function check(){
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
       }
       check()
    }, [] )
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                 <br/>
                 <span className={`${letterClass} _13`}>I</span>
                 <span className={`${letterClass} _14`}>'m</span>
                 <span> </span>
               
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                
                <br/>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={26}
                    />
                </h1>
                 <h2>Frontend Developer / Database Developer</h2>
                 <Link to="/contact" className="flat-button">
                 CONTACT ME
                 </Link>
            </div>
            
        </div>

    );
}

export default Home