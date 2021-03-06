import React from 'react';
import {Link} from 'react-router-dom'

const Error500 = () => (
    <div className="page-error-container animated slideInUpTiny animation-duration-3">
        <div className="page-error-content">
            <div className="error-code mb-4 animated zoomInDown">500</div>
            <h2 className="text-center fw-regular title animated bounceIn animation-delay-10">
                505
                <p className="text-center animated flipInX animation-delay-20">
                    <Link className="btn btn-primary" to="/">Backhome</Link>
                </p>
            </h2>
        </div>
    </div>
);

export default Error500;
