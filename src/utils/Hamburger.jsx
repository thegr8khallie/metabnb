import { FaHamburger } from "react-icons/fa"

const Hamburger = ({ isHamMenuOpen, setIsHamMenuOpen }) => {
    return (
        <div className="hamburger" onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}>
            <FaHamburger />
        </div>
    )
}

export default Hamburger