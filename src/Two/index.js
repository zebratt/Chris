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
import { Probability } from '../utils'

// images
import twoImg from '../images/two.jpg'
import cardImg from '../images/card.png'
import leftAntlerImg from '../images/leftAntler.png'
import rightAntlerImg from '../images/rightAntler.png'
import card1 from '../images/1.png'
import card2 from '../images/2.png'
import card3 from '../images/3.png'
import card4 from '../images/4.png'
import card5 from '../images/5.png'
import card6 from '../images/6.png'

const cards = [
    {
        src: card1,
        name: '圣诞老人卡',
        p: '0.08%'
    },
    {
        src: card2,
        name: '麋鹿卡',
        p: '32.973%'
    },
    {
        src: card3,
        name: '圣诞树卡',
        p: '32.973%'
    },
    {
        src: card4,
        name: '小女孩卡',
        p: '32.973%'
    },
    {
        src: card5,
        name: '雪夜之光卡',
        p: '0.5%'
    },
    {
        src: card6,
        name: '圣诞星球卡',
        p: '0.5%'
    }
]

class Two extends React.Component {
    state = {
        currentCardIdx: -1,
        done: false,
        card: null
    }
    componentDidMount() {
        this.probabilitilized = new Probability(
            ...cards.map(c => ({
                p: c.p,
                f: () => {
                    this.setState({
                        card: c,
                        done: true
                    })
                }
            }))
        )
    }
    onChoose = idx => {
        this.setState({
            currentCardIdx: idx
        })
    }
    onConfirm = () => {
        if (this.state.currentCardIdx !== -1) {
            this.probabilitilized()
            window.sRap && window.sRap.audioEl.play()
        }
    }
    onSubmit = () => {
        location.href = '//forms.liulishuo.work/f/ygbzDb'
    }
    render() {
        const { currentCardIdx, done, card } = this.state

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
                {done && card && (
                    <Mask>
                        <ResultCard src={card.src} />
                        <ResultText>
                            <p>
                                恭喜<span className="name">{window.username}</span>获得{card.name}
                            </p>
                            <p>
                                请<span className="shot">截图</span>保存，并提交到卡牌库
                            </p>
                        </ResultText>
                        <Button yes onClick={this.onSubmit}>
                            立即提交
                        </Button>
                    </Mask>
                )}
            </Container>
        )
    }
}

export default Two
