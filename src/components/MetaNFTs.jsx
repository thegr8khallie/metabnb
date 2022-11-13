import metApartments from '../assets/hero/metApartments.png'
export const MetaNFTs = () => {
    return (
        <section className="metanfts">
            <div className="metabnb-nfts">
                <div className="metanft-text">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div className="metanft-images">
                    <img src={metApartments} alt="Metabnb Apartments" />
                </div>
            </div>
        </section >
    )
}
