import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


import styled from 'styled-components';
import { verdeEscuro } from '../UI/variaveis';


const Wrapper = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 480px;
align-items: center;
justify-content: center;
background: #ECECE2;
padding: 20px 10px;
border-radius: 8px;
border: solid 1px ${verdeEscuro};
box-shadow: 0px 5px 0px #115850;
@media(max-width: 800px) {
    width: 370px;
    margin: 20px 0;
}


`;

const Left = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 80%;
align-items: center;
justify-content: flex-start;
float: left;
font-family: 'ITC Avant Garde Gothic Std';
padding-left: 0;

 > img {
     margin: 8px 16px;
 }

 >h4 {
     width: 100%;
     font-style: normal;
     font-weight: 700;
     font-size: 16px;
     line-height: 24px;
    }
 > span {
     width: 100%;
     font-weight: 300;
     font-size: 10px;
    }

`;

const ServicesCard = styled.div``;

const Right = styled.div`

float: right;
border-radius: 100%;
background: ${verdeEscuro};
padding: 20px 30px;

> p {
    color: #fff;
    font-family: 'ITC Avant Garde Gothic Std';
}

`;


class Services extends Component {
    render(icon, title, span) {
        return (
            <div>
                <Wrapper>
                    <Left>
                        <img src={this.props.icon} /><ServicesCard ><h4>{this.props.title}</h4> <span>{this.props.span}</span></ServicesCard>
                    </Left>
                    <Right>
                        <p>?</p>
                    </Right>
                </Wrapper>
                
            </div>
        );
    }
}


export default Services;