import {Link} from 'react-router-dom'

const Topbar = () => {
    return (  
        <header>
            <div className="top">
                <Link to="/">
                    <h1>Overwatch</h1>
                </Link>
            </div>
        </header>
    );
}
 
export default Topbar;