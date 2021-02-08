//REACT 
import React from 'react';

//Component 
import LogoPage from '../components/LogoPage';

//CSS
import '../pages/styles/Dev.css';
import { HabilityContainer, SkillSection, FirstCard , SecondCard, ButtonText, SkillContainer, PresentationContainer, Nothing } from '../components/StyledComponents';

//Image
import Hacker from '../images/anonymous.png';
import Laptops from '../images/laptops.png';
import backend from '../images/backend.png';
import frontend from '../images/front-end.png';
import gamepad from '../images/gamepad.png';

class Dev extends React.Component{
    render(){
        return(
            <React.Fragment>
                <LogoPage
                image = {Hacker}
                image2 = {Laptops}/>
                <SkillSection>
                    <HabilityContainer>
                        <FirstCard blue>
                            <SkillContainer>
                                <div className="skill-image-container">
                                    <img src={backend} alt=""/>
                                </div>
                                <h2>Frontend Developmen</h2>
                                <p className="pt-3 pb-4">
                                    Coming from Lima, Perú. we started
                                    our journeywe started our journey
                                    we started our journeywe started our 
                                    journey
                                </p>
                                <ButtonText to="/dev/frontend" primary="true" card="true">
                                    Ver más
                                </ButtonText>
                            </SkillContainer>
                            <SkillContainer>
                                <div className="skill-image-container">
                                    <img src={frontend} alt=""/>
                                </div>
                                <h2>Backend Developmen</h2>
                                <p>
                                    Coming from Lima, Perú. we started
                                    our journeywe started our journey
                                    we started our journeywe started our 
                                    journey
                                </p>
                                <ButtonText to="/dev/backend" primary="true" card="true">
                                    Ver más
                                </ButtonText>
                            </SkillContainer>
                            <SkillContainer>
                                <div className="skill-image-container">
                                    <img src={gamepad} alt=""/>
                                </div>
                                <h2>Unity Developmen</h2>
                                <p>
                                    Coming from Lima, Perú. we started
                                    our journeywe started our journey
                                    we started our journeywe started our 
                                    journey
                                </p>
                                <ButtonText to="/dev/unity" primary="Strue" card="true">
                                    Ver más
                                </ButtonText>
                            </SkillContainer>
                        </FirstCard>
                        <SecondCard>

                        </SecondCard>
                    </HabilityContainer>
                    <PresentationContainer>
                        <h1>Hola, soy Miguel Castillo. Mucho gusto </h1>
                        <p>Coming from Lima, Perú. we started our journey as developer in 2018. We
                        hace special interest in front-end and mobile developmen, where We hacve worked 
                        most of our projects and potentialized our skills. A fan of learning and most of our 
                        projects and potentialized our skills. A fan of learning and most of our projects and
                        potentialized our skills. A fan of learning and</p>
                    </PresentationContainer>
                    <Nothing>
                        
                    </Nothing>
                </SkillSection>
            </React.Fragment>
        );
    }
}

export default Dev;