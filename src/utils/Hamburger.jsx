import { FaHamburger } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

const Hamburger = ({ isHamMenuOpen, setIsHamMenuOpen }) => {
    return (
        <div className="hamburger" onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}>
            {
                isHamMenuOpen ? <MdClose /> : <FaHamburger />
            }
        </div>
    )
}

export default Hamburger