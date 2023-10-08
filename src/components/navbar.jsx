import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className='container-fluid' >
                <a className='navbar-brand' href="/">TextUtils.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="my-react-app/src/components/About.jsx">{props.about}</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    <div className="form-check form-switch form-check-reverse">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode}/> 
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">checkbox input</label> */}
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