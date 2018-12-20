import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotateY(0);
    }
    50% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`

const animation = props => css`
    ${props.run ? rotate : 'none'} 1s ease-out;
    animation-iteration-count: 3;
`

export const Container = styled.div`
    margin-top: 100px;
`

export const Img = styled.img`
    display: block;
    margin: 0 auto;
    height: 100px;
    width: 100px;
    animation: ${animation}
`

export const Button = styled.button`
    padding: 6px 18px;
    border: #333 solid 1px;
`
