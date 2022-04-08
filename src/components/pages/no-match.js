import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return(
        <div>
        <h2>Im not sure you've provided the correct link...</h2>
        <Link to="/">Return to Home</Link>
        </div>
    );
}