//REACT 
import React from 'react';

//Component

//CSS
import { Container, Nothing, HabilityContainer, FirstCard, SecondCard, ButtonText,LinkText, Loader } from '../components/StyledComponents';
//Image

class Frontend extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            error: null,
            items:[],
            contador:0,
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/mijel861999/repos')
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        loading: true,
                        items: result
                    });
                },
                (error)=>{
                    this.setState({
                        loading: true,
                        error
                    });
                }
            )
    }

    addCount(){
        this.setState({contador: this.state.contador +1});
    }

    render(){
        const {loading, error, items, contador}=this.state;
        const itemAux = []

        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!loading){
            return (
                <Loader></Loader>
            );
        }else{
            return(
                <React.Fragment>
                    {items.map(
                        item=>(
                        <Container blue="true">
                            <HabilityContainer>
                                <FirstCard blue>
                                    <div className="card-image">
                                        <img src={item.owner.avatar_url} alt=""/>
                                    </div>
                                    <div className="content-text">
                                        <h1>Nombre: {item.name}</h1>
                                        <p>Descripción: {item.description}</p>
                                        <p>Private: {item.private.toString().toUpperCase()}</p>
                                        <LinkText href={item.html_url} card primary> Ver más</LinkText>
                                    </div>
                                </FirstCard>
                                <SecondCard yellow>
        
                                </SecondCard>
                            </HabilityContainer>
                        </Container>
                        )
                    )}  
                    <Nothing>
    
                    </Nothing>
                </React.Fragment>
            );
        }
    }
}

export default Frontend;
