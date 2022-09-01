import React, { useEffect, useState } from 'react';
import logo from '../img/siandis_logo2.png';
import '../css/nav.css';

export default function Nav() {
    const [target, setTarget] = useState();

    const check = res => {
        if (target) {
            target.target.id = 'none';
        }
        setTarget(res);
    }
    useEffect(() => {
        if (target) {
            target.target.id = 'focus'
        }
    }, [target])
    return (
        <div id='nav'>
            <div id='logo-container'>
                <a id='logo-link' href='#'>
                    <img id='logo' src={logo}></img>
                </a>
            </div>
            <div id='category'>
                <ul id='category-ul'>
                    <li>
                        <a id='none' className='nav-btn' href='#service' onClick={check}>SERVICES</a>
                    </li>
                    <li>
                        <a id='none' className='nav-btn' href='#portfolio' onClick={check}>PORTFOLIO</a>
                    </li>
                    <li>
                        <a id='none' className='nav-btn' href='#about' onClick={check}>ABOUT</a>
                    </li>
                    <li>
                        <a id='none' className='nav-btn' href='#team' onClick={check}>TEAM</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}