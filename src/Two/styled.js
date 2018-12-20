import styled from 'styled-components'

export const BackgroundImg = styled.img`
    display: block;
    width: 100%;
`

export const Container = styled.div`
    position: relative;
`

export const ContentBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`

export const Blank = styled.div`
    flex: 1;
`

export const Content = styled.div`
    flex: 2;
`

export const Title = styled.div`
    text-align: center;
    margin: 60px auto 0;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    color: #fff;
`

export const CardsBox = styled.div`
    display: flex;
    margin: 24px auto;
    justify-content: space-evenly;
`

export const Card = styled.img`
    width: calc(33.333% - 20px);
`