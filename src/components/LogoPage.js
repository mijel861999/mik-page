//React 
import React from 'react';

//import css
import './styles/LogoPage.css';

class LogoPage extends React.Component{
    // constructor(){
    //     super()
    //     this.title = React.createRef();
    //     this.changeColor = this.changeColor.bind(this);
    // }

    // changeColor(){
    //     console.log(this.title);
    //     this.title.current.style.color = 'tomato'
    // }

    render(){
        return(
            <section className="logo-page__container">
                <h1> MIK</h1>
                <p>We are a Web developers, passionate about what i do, and alsways learning something new</p>
                <div className="image-page-container">
                    <img src={this.props.image} alt="prueba1"/>
                </div>
                <div className="image-page-container2">
                    <img src={this.props.image2} alt="prueba2"/>
                </div>
            </section>
        );
    }
}

export default LogoPage;