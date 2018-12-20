import React from 'react'
import times from 'lodash/times'
import {
    TipBox,
    TitleBox,
    Antler,
    Text,
    Tips,
    Button,
    CardsBox,
    Card,
    Title,
    Blank,
    BackgroundImg,
    Container,
    ContentBox,
    Content
} from './styled'

// images
import twoImg from '../images/two.jpg'
import cardImg from '../images/card.png'
import leftAntlerImg from '../images/leftAntler.png'
import rightAntlerImg from '../images/rightAntler.png'
import grayButtonImg from '../images/gray.png'
import yellowButtonImg from '../images/yellow.png'

class Two extends React.Component {
    state = {
        buttonImg: grayButtonImg,
        currentCardIdx: -1
    }
    onChoose = (idx) => {
        this.setState({
            currentCardIdx: idx,
            buttonImg: yellowButtonImg
        })
    }
    render() {
        const { buttonImg, currentCardIdx } = this.state

        return (
            <Container>
                <BackgroundImg src={twoImg} />
                <ContentBox>
                    <Blank />
                    <Content>
                        <Title>请选择一张卡牌</Title>
                        <CardsBox>
                            {times(3).map(i => (
                                <Card key={i} yes={i === currentCardIdx} src={cardImg} onClick={this.onChoose.bind(this, i)}/>
                            ))}
                        </CardsBox>
                        <Button yes={currentCardIdx !== -1} buttonImg={buttonImg}>确定</Button>
                        <TipBox>
                            <TitleBox>
                                <Antler src={leftAntlerImg} />
                                <Text>麋鹿小提示</Text>
                                <Antler src={rightAntlerImg} />
                            </TitleBox>
                            <Tips>
                                每人每天有一次抽取圣诞卡牌的机会，连续五天抽取哦！！连续参与的天数越多得到稀有卡牌的几率也会越高哦！
                            </Tips>
                        </TipBox>
                    </Content>
                </ContentBox>
            </Container>
        )
    }
}

export default Two
