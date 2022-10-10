import './index.scss'
import {useEffect, useState} from 'react'
import AnimatedLetters from './../AnimatedLetters/index';
import { MapContainer, TileLayer, Popup, Marker  } from 'react-leaflet';
import {send} from 'emailjs-com';

const Contact = () =>{
const [letterClass, setLetterClass] = useState('text-animate');
const position = [46.253, 20.14824];

const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_mkj98ic',
      'template_h1bgdlo',
      toSend,
      'Sx2jRQPBljGPNSzmg'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

 

    useEffect(() => {
        async function check(){
         return setTimeout(() => {
             setLetterClass('text-animate-hover')
         }, 5000)
        }
        check()
     }, [] )

    return(
        
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>You can contact me and in hours I will answer all emails sended to me.</p>
                <div className="contact-form">
                    <form onSubmit={onSubmit}>
                        <ul>
                            <li className="half">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                    required/> 
                            </li>
                            <li className="half">
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="email address" 
                                    value={toSend.email}
                                    onChange={handleChange}
                                    required/>
                            </li>
                            <li >
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    value={toSend.subject}
                                    onChange={handleChange}
                                    required/>
                            </li>
                            <li >
                                <textarea
                                    name="message"
                                    placeholder="Message" 
                                    value={toSend.message}
                                    onChange={handleChange}
                                    required>
                                </textarea>
                            </li>
                            <li>
                                <input 
                                    type="submit"
                                    className="flat-button"
                                    value="Send">

                                </input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
            Akos Farago,
            <br/>
            Hungary,
            <br/>
            Vértói út x, 6724
            Szeged
            <br/>
            <span>faragoakos@faragoakos.hu</span>


                
            </div>
            <div className='map-wrap'>
                    <MapContainer center={position} zoom={13} >
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={position}> 
                        <Popup>
                        learning and living here, coffee is great!
                        </Popup>

                        </Marker>
                    </MapContainer>
                </div>
            
        </div>
    
    )
}

export default Contact