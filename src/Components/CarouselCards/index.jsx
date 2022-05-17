import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
background: #FFF;
box-shadow: 0px 4px 0px #EDEDE5;
padding-top: 16px;
height: 317px;
width: 292px;
border-radius: 8px;
border: solid 1px #ECECE2;
padding: 0 24px;
margin: 5px 0;

`;


class CarouselCards extends Component {
    render(img, title, content) { 
        return (
            <Wrapper>
                <img src={this.props.img}/>
                <h5>{this.props.title}</h5>
                <p>{this.props.content}</p>
            </Wrapper>
        );
    }
}
 
export default CarouselCards;