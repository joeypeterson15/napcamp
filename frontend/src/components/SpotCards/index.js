import "./SpotCards.css"

function SpotCards () {
    return (
        <>
        <div className="spot-cards-container">
            <div className="spot-cards">
                <div className="card-title font">Nap Area</div>
                <ul className="card-list font">
                    <li key="guests">Up to two guests per bed!</li>
                    <li key="site">♙ 1 site</li>
                    <li key="campfires">☒ no campfires allowed</li>
                    <li key="daytime">☼ Daytime availability</li>
                </ul>
            </div>
            <div className="spot-cards">
                <div className="card-title font">Essentials</div>
                <ul className="card-list font">
                    <li key="toilet"><span className="spot-card-icon-color"><i class="fas fa-toilet-paper"></i></span>Toilet available</li>
                    <li key="pets">Pets allowed</li>
                    <li key="firstaid">✚ First Aid Kit</li>
                    <li key="fire" id="fire-ban-red"><span className="spot-card-icon-color"><i class="fas fa-fire-alt"></i></span>Fire ban in effect</li>
                </ul>

            </div>
            <div className="spot-cards">
                <div className="card-title font">Amenities</div>
                <ul className="card-list font">
                    <li key="potable">☁ Potable water available</li>
                    <li key="payphone">✆ Emergency payphone</li>
                    <li key="blanket">❆ extra blanket</li>
                </ul>
            </div>
        </div>
        </>

    )
}

export default SpotCards;
