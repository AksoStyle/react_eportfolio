import './index.scss'
import LogoTitle from '../../../assets/images/panda.png'

const Logo = () => {
    return (
        <div className="logo-container">
        <img className='solid-logo' src={LogoTitle} alt="panda" />

        </div>
    )
}

export default Logo