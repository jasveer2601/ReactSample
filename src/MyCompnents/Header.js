import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import { useEffect } from 'react';

export default function Header(props) {

    useEffect(() => {
        console.log('Value update for about flag :' + props.about);
    }, [props.about]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            {props.about ? 
                            <div>
                                <Link className="nav-Link" to="/about">About</Link>
                                <Link className="nav-Link" to="/mycomponent">Test Component</Link>
                                </div>
                            : ""}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Header"
}

Header.propTypes = {
    title: PropTypes.string
}
