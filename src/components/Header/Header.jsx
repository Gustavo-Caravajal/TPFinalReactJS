import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css"
export const Header = () => {
    return (
        <header>
            <Link to="/">
                <h2 className="logo">C G T E C H</h2>
            </Link>
            <Nav/>
        </header>
    );
};