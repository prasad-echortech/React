import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><button className='btn btn-danger ms-5'>Create-Form</button></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Text">Text-Box</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/Dropdown">Drop-down</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/Radio"> Radio </Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Checkbox"> Check-Box</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Textarea">Text-Area </Link></li> */}
                                <li className="nav-item"><Link className="nav-link" to="/FF"><button className='btn btn-danger'>Home</button></Link></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
