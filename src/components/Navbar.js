import { Link } from 'react-router-dom';
import moon from '../icons/moon.png';
import sun from '../icons/clipart90410.png';

function Navbar(props) {
    const toggleTheme = () => {
        props.toggleTheme();
    }
    return (
        <>
        <div className={`navbar navbar-1 navbar-expand navbar-${props.theme} bg-${props.theme} border-bottom border-${props.theme === "light"? "black":"light"}`}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0">NewsMonkey {/*- <span className='fst-italic fs-6'>Get Breaking News</span>*/}</span>
                <div className="form-check form-switch d-flex justify-content-center align-items-center">
                    <input type="checkbox" id="i-am-a-switch" className="form-check-input me-2" onClick={toggleTheme} />
                    <label htmlFor="i-am-a-switch" className="form-check-label"><img src={props.theme === "light"? `${sun}`:`${moon}`} alt="" height="25px" title={(props.theme === "light"? "Light Mode":"Dark Mode") + " Enabled"}/></label>
                </div>
            </div>
        </div>
        <div className={`navbar navbar-2 navbar-expand-lg navbar-${props.theme} bg-${props.theme}`} style={{boxShadow: props.theme === "dark"? "0 250px 300px lightskyblue":"0 8px 8px rgba(0,0,0,0.1)"}}>
            <div className="container-fluid">
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#toggle-hide" aria-expanded="false" aria-controls="toggle-hide">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="toggle-hide">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/news/general" className="nav-link">General</Link></li>
                        <li className="nav-item"><Link to="/news/health" className="nav-link">Health</Link></li>
                        <li className="nav-item"><Link to="/news/entertainment" className="nav-link">Entertainment</Link></li>
                        <li className="nav-item"><Link to="/news/business" className="nav-link">Business</Link></li>
                        <li className="nav-item"><Link to="/news/science" className="nav-link">Science</Link></li>
                        <li className="nav-item"><Link to="/news/sports" className="nav-link">Sports</Link></li>
                        <li className="nav-item"><Link to="/news/technology" className="nav-link">Technology</Link></li>
                    </ul>
                    <select className="form-select" aria-label='Default select country' 
                    onChange={(e) => {
                        props.changeNewsOfCountry(e.target.value);
                    }}
                    >
                        <option value="at">Austria</option>
                        <option value="au">Australia</option>
                        <option value="be">Belgium</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="cn">China</option>
                        <option value="fr">France</option>
                        <option value="hu">Hungary</option>
                        <option value="id">Indonesia</option>
                        <option value="ie">Ireland</option>
                        <option value="in">India</option>
                        <option value="it">Italy</option>
                        <option value="mx">Mexico</option>
                        <option value="my">Malaysia</option>
                        <option value="nl">Netherlands</option>
                        <option value="us">North America</option>
                        <option value="nz">New Zealand</option>
                        <option value="ro">Romania</option>
                        <option value="ru">Russia</option>
                        <option value="sg">Singapore</option>
                        <option value="sa">South Africa</option>
                        <option value="ch">Switzerland</option>
                        <option value="th">Thailand</option>
                        <option value="tr">Turkey</option>
                        <option value="gb">United Kingdom</option>
                        <option value="ua">Ukraine</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;