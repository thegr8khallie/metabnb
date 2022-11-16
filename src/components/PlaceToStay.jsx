import StarRating from '../utils/StarRating'
import { VscSettings } from 'react-icons/vsc'
export const PlaceToStay = ({ placesToStay }) => {
    return (
        <div className="place-to-stay">
            <ul className="metabnb-categories">
                <li className="metabnb-category">Restaurant</li>
                <li className="metabnb-category">Cottage</li>
                <li className="metabnb-category">Castle</li>
                <li className="metabnb-category">Fantasy City</li>
                <li className="metabnb-category">Beach</li>
                <li className="metabnb-category">Cabins</li>
                <li className="metabnb-category">Off-grid</li>
                <li className="metabnb-category">Farm</li>
                <li className="metabnb-category"><input type="text" placeholder='Location' /><button><VscSettings /></button></li>
            </ul>
            <ul className="metabnb-inspiration">
                {
                    placesToStay.map((i, j) => {
                        return (
                            <li className="bnb-inspo" key={j}>
                                <div className="inspo-img">
                                    <img src={i} alt="metabnb-inspiration" />
                                </div>
                                <div className="inspo-info">
                                    <p>Desert King</p>
                                    <h5>1MBT per night</h5>
                                    <p>2345km away</p>
                                    <p>available for 2 weeks stay</p>
                                    <StarRating />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
