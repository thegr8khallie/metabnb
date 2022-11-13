import image1 from '../assets/hero/image1.jpg'
import image2 from '../assets/hero/image2.jpg'
import image3 from '../assets/hero/image3.jpg'
import image4 from '../assets/hero/image4.jpg'
import mbtoken from '../assets/hero/mbtoken.png'
import metamask from '../assets/hero/metamask.png'
import opensea from '../assets/hero/opensea.png'
export const Hero = () => {
    const heroImages = [image1, image2, image3, image4];
    const bannerImages = [mbtoken, metamask, opensea];
    return (
        <section className="hero-section">
            <div className="herotext">
                <h1>Rent a <span className="purple">Place</span> away from <span className="purple">home</span> in the <span className="purple">metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <form className="search-location">
                    <input type="text" placeholder="Search for location" />
                    <button type="submit">Search</button>
                </form>
                <ul className="hero-images">
                    {
                        heroImages.map((i, j) => {
                            return (
                                <li className="hero-image" key={j}><img src={i} alt={`Hero Image ${j + 1}`} /></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="patrons-banner">
                {
                    bannerImages.map((i, j) => {
                        return (
                            <div className="patron" key={j}><img src={i} alt={`Patron ${j + 1}`} /></div>
                        )
                    })
                }
            </div>
        </section>
    )
}
