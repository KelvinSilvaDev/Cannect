import React, { Component } from 'react';
import styled from 'styled-components';
import { verdeEscuro } from '../../UI/variaveis';

export const PassoEsquerda = styled.div`
width: 100%;


display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
justify-content: space-around;
align-items: center;

video {
    float: left;
}

> div {
    float: right;
    display: grid;
    align-content: space-between;
    justify-content: start;
    align-items: center;
    > h3, span, a{
        float: left;
        margin: 15px 0;
        font-family: 'ITC Avant Garde Gothic Std';
        color: ${verdeEscuro};
        text-decoration: none;
    }
    > span {
        color: #000;
    }
}

`;

export const PassoDireita = styled.div`

width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
justify-content: space-around;
align-items: center;

video {
    float: right;
}

> div {
    float: left;
    display: grid;
    align-content: space-between;
    justify-content: start;
    align-items: center;
    > h3, span, a{
        float: left;
        margin: 15px 0;
        font-family: 'ITC Avant Garde Gothic Std';
        color: ${verdeEscuro};
        text-decoration: none;
    }
    > span {
        color: #000;
    }
}
`;

const Wrapper = styled.div`

padding: 0 120px;

`;

class PassoApasso extends Component {
    render(video, passo, span, link, linkdescription) {
        return (
            <Wrapper>
                <PassoEsquerda>
                    <iframe src={this.props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>
                    <div>
                        <h3>{this.props.passo}</h3>
                        <span>{this.props.span}</span>
                        <a href={this.props.link}>{this.props.linkdescription}</a>
                    </div>

                </PassoEsquerda>
                <PassoDireita>
                    <div>
                        <h3>{this.props.passo}</h3>
                        <span>{this.props.span}</span>
                        <a href={this.props.link}>{this.props.linkdescription}</a>
                    </div>
                    <iframe src={this.props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>

                </PassoDireita>
            </Wrapper>
        );
    }
}

export default PassoApasso;