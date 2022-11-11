import metabnbLogo from '../assets/icons & vectors/metabnbNav.png'
export const Nav = () => {
    return (
        <nav className="nav">
            <div className="metabnb-logo">
                <img src={metabnbLogo} alt="Metabnb Logo" />
            </div>
            <ul className="nav-elements">
                <li className="nav-element">Home</li>
                <li className="nav-element">Place to stay</li>
                <li className="nav-element">NFTs</li>
                <li className="nav-element">Community</li>
                <li className="nav-element btn-wrapper">
                    <button className="connect-wallet-btn">Connect wallet</button>
                </li>
            </ul>
        </nav>
    )
}
