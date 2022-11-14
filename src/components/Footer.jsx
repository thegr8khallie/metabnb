import metabnbFooter from '../assets/icons & vectors/metabnbFooter.png'
import { FaFacebookF, FaTwitter, FaRegCopyright } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="company-info">
                <div className="footer-logo"><img src={metabnbFooter} alt={'Metabnb Icon'} /></div>
                <div className="social-icons">
                    <div className="social-icon"><FaFacebookF /></div>
                    <div className="social-icon"><GrInstagram /></div>
                    <div className="social-icon"><FaTwitter /></div>
                </div>
                <div className="copyright"><p><FaRegCopyright />2022 Metabnb</p></div>
            </div>
            <div className="footer-links">
                <ul className="community">
                    <h1>Community</h1>
                    <li>NFTs</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
                <ul className="places">
                    <h1>Places</h1>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
                <ul className="about us">
                    <h1>About us</h1>
                    <li>Road map</li>
                    <li>Creators</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </footer>
    )
}
