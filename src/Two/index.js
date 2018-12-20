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
    Content,
    Mask,
    ResultCard,
    ResultText
} from './styled'

// images
import twoImg from '../images/two.jpg'
import cardImg from '../images/card.png'
import leftAntlerImg from '../images/leftAntler.png'
import rightAntlerImg from '../images/rightAntler.png'
import res1 from '../images/1.png'

class Two extends React.Component {
    state = {
        currentCardIdx: -1,
        done: false,
    }
    onChoose = idx => {
        this.setState({
            currentCardIdx: idx,
        })
    }
    onConfirm = () => {
        this.setState({
            done: true
        })
    }
    render() {
        const { currentCardIdx, done } = this.state

        return (
            <Container>
                <BackgroundImg src={twoImg} />
                <ContentBox>
                    <Blank />
                    <Content>
                        <Title>请选择一张卡牌</Title>
                        <CardsBox>
                            {times(3).map(i => (
                                <Card
                                    key={i}
                                    yes={i === currentCardIdx}
                                    src={cardImg}
                                    onClick={this.onChoose.bind(this, i)}
                                />
                            ))}
                        </CardsBox>
                        <Button yes={currentCardIdx !== -1} onClick={this.onConfirm}>
                            确定
                        </Button>
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
                {done && (
                    <Mask>
                        <ResultCard src={res1} />
                        <ResultText>
                            <p>恭喜<span className="name">{window.username}</span>获得麋鹿卡</p>
                            <p>请<span className="name">截图</span>保存，并提交的卡牌库</p>
                        </ResultText>
                        <Button yes>立即提交</Button>
                    </Mask>
                )}
            </Container>
        )
    }
}

export default Two
