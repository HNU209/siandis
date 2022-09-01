import React from 'react';
import '../css/header.css';

export default function Header() {
    return (
        <div id='header'>
            <div id='header-text'>
                <div className='masthead-subheading'>Welcome To SIANDIS</div>
                <div className='masthead-heading text-uppercase'>It's Nice To Meet You</div>
                <a id='header-btn' className='text-uppercase' href=''>Tell Me More</a>
            </div>
        </div>
    )
}