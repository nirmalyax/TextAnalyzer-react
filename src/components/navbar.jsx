import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className='container-fluid' >
                <Link className='navbar-brand' to="/">Text-Analyzer.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">{props.home}</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="my-react-app/src/components/About.jsx" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch form-check-reverse">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode}/> 
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'?'#13466e':'#9A9D9E'}}>Enable dark mode</label>
                    </div>
                </div>
            </div>
        </nav>

  )
}

Navbar.propTypes={
    home: PropTypes.string,
    about: PropTypes.string
}