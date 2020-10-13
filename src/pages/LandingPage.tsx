import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../images/Logo.svg';
import '../stylesheets/pages/landing-page.css';

const LandingPage = (props: any) => {
    return (
        <div id="landing-page">
            <div className="content-wrapper">
                <img src={logo} alt="Logo do Happy" />
                <main>
                    <h1>Leve Felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Jundiaí</strong>
                    <span>São Paulo</span>
                </div>

                <Link to="/orphanages-map" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;