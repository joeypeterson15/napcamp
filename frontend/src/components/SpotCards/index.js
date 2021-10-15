import "./SpotCards.css"

function SpotCards () {
    return (
        <>
        <div className="spot-cards-container">
            <div className="spot-cards">
                <div className="card-title font">Nap Area</div>
                <ul className="card-list font">
                    <li>Up to two guests per bed!</li>
                    <li>♙ 1 site</li>
                    <li>☒ no campfires allowed</li>
                    <li>☼ Daytime availability</li>
                </ul>
            </div>
            <div className="spot-cards">
                <div className="card-title font">Essentials</div>
                <ul className="card-list font">
                    <li><span className="spot-card-icon-color"><i class="fas fa-toilet-paper"></i></span>Toilet available</li>
                    <li>Pets allowed</li>
                    <li>✚ First Aid Kit</li>
                    <li id="fire-ban-red"><span className="spot-card-icon-color"><i class="fas fa-fire-alt"></i></span>Fire ban in effect</li>
                </ul>

            </div>
            <div className="spot-cards">
                <div className="card-title font">Amenities</div>
                <ul className="card-list font">
                    <li>☁ Potable water available</li>
                    <li>✆ Emergency payphone</li>
                    <li>❆ extra blanket</li>
                </ul>
            </div>
        </div>
        </>

    )
}

export default SpotCards;
