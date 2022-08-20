import styled from "styled-components";

export const ScoreContainer = styled.header`
/* border: 1px solid black; */
display: flex ;
justify-content: space-between;


`

export const Player = styled.div`
display: flex;
line-height: 20.8px;
align-items: center;
margin-top: 35px;
margin-bottom: 35px;
gap: 8px;

span {
    font-family: 'IBM Plex Mono';
    font-size: 20px;
    line-height: 20.8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    color: #333333;
}
`