// React
import React from 'react';
import { Link } from 'react-router-dom';

//css
import './styles/Landing.css';
//img
import music from '../images/trompeta.png';
import dev from '../images/backend-azul.png';

class Landing extends React.Component{
    render(){
        return (
            <React.Fragment>
                <section className="music-section">
                    <div className="landing-image-container">
                        <Link to="/music">
                            <img className="trumpets" src={music} alt="trumpet"/>
                        </Link>
                    </div>
                </section>
                <section className="dev-section">
                    <div className="landing-image-container">
                        <Link to="/dev">
                            <img className="dev" src={dev} alt="dev"/>
                        </Link>
                    </div>
                </section>
                <section className = "padding-page">
                    <div className="btn">
                        
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Landing;