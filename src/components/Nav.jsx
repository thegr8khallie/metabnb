import { Link } from 'react-router-dom'
import metabnbNav from '../assets/icons & vectors/metabnbNav.png'
import Hamburger from '../utils/Hamburger'
export const Nav = ({ isHamMenuOpen, setIsHamMenuOpen }) => {
    const handleNavigate = () => {
        setIsHamMenuOpen(false)
    }
    return (
        <nav className="nav">
            <div className="navbar">
                <div className="metabnb-logo">
                    <img src={metabnbNav} alt="Metabnb Logo" />
                </div>
                <div className="navbar-menu" style={isHamMenuOpen ? { display: 'flex' } : { display: 'none' }}>
                    <ul className="nav-elements">
                        <li className="nav-element" onClick={handleNavigate}><Link to='/'>Home</Link></li>
                        <li className="nav-element" onClick={handleNavigate}><Link to='/places-to-stay'>Place to stay</Link></li>
                        <li className="nav-element">NFTs</li>
                        <li className="nav-element">Community</li>
                    </ul>
                    <div className=" wallet-btn-wrapper"><button className="connect-wallet-btn">Connect wallet</button></div>
                </div>
                <Hamburger isHamMenuOpen={isHamMenuOpen} setIsHamMenuOpen={setIsHamMenuOpen} />
            </div>
        </nav>
    )
}
