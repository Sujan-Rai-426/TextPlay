
import React from 'react'

import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        
    <>
            {/* Navbar start */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.sujan140.com.np">Portfolio</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        {/* Navbar end */}
        
    </>

    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
}

// Default props value when no any proped value is passed
Navbar.defaultProps = {
    title :'Navbar'
}

export default Navbar

