import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <header>
            <div className="nav">
                <Link to="/">
                    <h4>wee</h4>
                </Link>
                <Link to="/">
                    <h4>hee</h4>
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;