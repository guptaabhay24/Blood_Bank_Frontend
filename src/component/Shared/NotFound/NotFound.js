import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className="notfound text-center">
            <img className="img-fluid mt-2" src="https://i.ibb.co/v3bV5td/404.png" alt="" />
            <br />
            <Link to="/">
                <button className="btn btn-success mt-3 mb-5">Go Back to Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;