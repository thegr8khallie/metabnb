import star from '../assets/icons & vectors/star.svg'
import StarRating from '../utils/StarRating'

export const Inspiration = ({ inspiration }) => {
    return (
        <div className="inspiration">
            <h1>Inspiration for your next adventure</h1>
            <ul className="metabnb-inspiration">
                {
                    inspiration.map((i, j) => {
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
