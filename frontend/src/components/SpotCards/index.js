import "./SpotCards.css"

function SpotCards () {
    return (
        <>
        <div className="spot-cards-container">
            <div className="spot-cards">
                <div className="card-title text">Nap Area</div>
                <ul className="card-list">
                    <li>Up to two guests per bed!</li>
                    <li>1 site</li>
                </ul>
            </div>
            <div className="spot-cards">
                <div className="card-title text">Essentials</div>
                <ul className="card-list">
                    <li>Toilet available</li>
                    <li>Pets allowed</li>
                    <li>Campfires not allowed</li>
                </ul>

            </div>
            <div className="spot-cards">
                <div className="card-title text">Amenities</div>
                <ul className="card-list">
                    <li>Potable water available</li>
                </ul>
            </div>
        </div>
        </>

    )
}

export default SpotCards;
