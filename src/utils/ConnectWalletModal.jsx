import { MdClose } from 'react-icons/md'
import { GrFormNext } from 'react-icons/gr'
import metamask from '../assets/icons & vectors/metamask.png'
import walletConnect from '../assets/icons & vectors/walletConnect.jpg'

const ConnectWalletModal = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <section className='modal-wrapper' style={isModalOpen ? { display: 'grid' } : { display: 'none' }}>
            <div className='connect-wallet-modal'>
                <div className="modal-title">
                    <h2>Connect Wallet</h2>
                    <div className="close" onClick={() => setIsModalOpen(false)}><MdClose /></div>
                </div>
                <ul className="wallet-list">
                    <p>Choose your preferred wallet:</p>
                    <li className="wallet-option">
                        <div className="wallet">
                            <div className="wallet-icon">
                                <img src={metamask} alt="Metamask Icon" />
                            </div>
                            <h3>Metamask</h3>
                        </div>
                        <div className="rando-icon"><GrFormNext /></div>
                    </li>
                    <li className="wallet-option">
                        <div className="wallet">
                            <div className="wallet-icon">
                                <img src={walletConnect} alt="Wallet Connect Icon" />
                            </div>
                            <h3>WalletConnect</h3>
                        </div>
                        <div className="rando-icon"><GrFormNext /></div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ConnectWalletModal