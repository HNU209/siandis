import React from 'react';
import '../css/about.css';

import img1 from '../img/header_background.png';

export default function About() {
    return (
        <div id='about'>
            <div className="about-text-center">
                <h2 className="about-heading">About</h2>
                <h3 className="about-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="about-timeline">
                <li>
                    <div className="about-timeline-image-container">
                        <img className="about-timeline-image" src={img1} alt="..."></img>
                    </div>
                    <div className="about-timeline-panel">
                        <div className="about-timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 className="about-timeline-subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="about-timeline-body">
                            <p className="about-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                </li>
                <li className="about-timeline-inverted">
                    <div className="about-timeline-image-container">
                        <img className="about-timeline-image" src={img1} alt="..."></img>
                    </div>
                    <div className="about-timeline-panel">
                        <div className="about-timeline-heading">
                            <h4>March 2011</h4>
                            <h4 className="about-timeline-subheading">An Agency is Born</h4>
                        </div>
                        <div className="about-timeline-body">
                            <p className="about-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="about-timeline-image-container">
                        <img className="about-timeline-image" src={img1} alt="..."></img>
                    </div>
                    <div className="about-timeline-panel">
                        <div className="about-timeline-heading">
                            <h4>December 2015</h4>
                            <h4 className="about-timeline-subheading">Transition to Full Service</h4>
                        </div>
                        <div className="about-timeline-body">
                            <p className="about-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                </li>
                <li className="about-timeline-inverted">
                    <div className="about-timeline-image-container">
                        <img className="about-timeline-image" src={img1} alt="..."></img>
                    </div>
                    <div className="about-timeline-panel">
                        <div className="about-timeline-heading">
                            <h4>July 2020</h4>
                            <h4 className="about-timeline-subheading">Phase Two Expansion</h4>
                        </div>
                        <div className="about-timeline-body">
                            <p className="about-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                </li>
                <li className="about-timeline-inverted">
                    <div className="about-timeline-image-container">
                        <h4>
                            Be Part
                            <br/>
                            Of Our
                            <br/>
                            Story!
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    )
}