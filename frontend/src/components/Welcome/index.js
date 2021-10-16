
import "./Welcome.css"
import Search from "../Search";

export default function Welcome () {
    return (
        <div className="welcome-div">
            <div>
                <h1 id="welcome-header-big">Find yourself in Z's.</h1>
                <h3 id="welcome-header-small">Discover and book beds for a quick nap at your convenience</h3>
            </div>
            <Search />
            <div>
                <img alt="" id="welcome-img" src="https://i.ibb.co/744kBqM/women-sleeping-main-page.jpg"></img>
            </div>
        </div>
    );
}
