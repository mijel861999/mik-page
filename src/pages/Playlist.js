//REACT 
import React from 'react';

//Component

//CSS
import { Container, Nothing, HabilityContainer, FirstCard, SecondCard, ButtonText } from '../components/StyledComponents';
//Image

class Playlist extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container blue="true">
                    <HabilityContainer>
                        <FirstCard blue>
                            <div className="card-image">

                            </div>
                            <div className="content-text">
                                <h1>Playlists</h1>
                                <p>Coming from Lima, Perú. we started <br/>
                                our journeywe started our journey <br/>
                                we started our journeywe started our
                                journey</p>
                                <ButtonText card primary> Ver más</ButtonText>
                            </div>
                        </FirstCard>
                        <SecondCard yellow>

                        </SecondCard>
                    </HabilityContainer>
                </Container>

                <Container>
                    <HabilityContainer>
                        <FirstCard yellow>
                            <div className="card-image">

                            </div>
                            <div className="content-text">
                                <h1>Playlists</h1>
                                <p>Coming from Lima, Perú. we started <br/>
                                our journeywe started our journey <br/>
                                we started our journeywe started our
                                journey</p>
                                <ButtonText card primary> Ver más</ButtonText>
                            </div>
                        </FirstCard>
                        <SecondCard blue>
                            
                        </SecondCard>
                    </HabilityContainer>
                </Container>

                <Nothing>

                </Nothing>
            </React.Fragment>
        );
    }
}

export default Playlist;
