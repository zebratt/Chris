import React from 'react'
import {CardsBox, Card, Title, Blank, BackgroundImg, Container, ContentBox, Content } from './styled'

// images
import twoImg from '../images/two.jpg'
import cardImg from '../images/card.png'

class Two extends React.Component {
    render() {
        return (
            <Container>
                <BackgroundImg src={twoImg} />
                <ContentBox>
                    <Blank />
                    <Content>
                        <Title>请选择一张卡牌</Title>
                        <CardsBox>
                            <Card src={cardImg} />
                            <Card src={cardImg} />
                            <Card src={cardImg} />
                        </CardsBox>
                    </Content>
                </ContentBox>
            </Container>
        )
    }
}

export default Two
