import 'normalize.css'
import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    TipBox,
    TitleBox,
    Antler,
    Text,
    Button,
    Container,
    BackgroundImg,
    Content,
    Blank,
    InputBox,
    Input,
    Tips
} from './styled'

// images
import oneImg from '../images/one.jpg'
import leftAntlerImg from '../images/leftAntler.png'
import rightAntlerImg from '../images/rightAntler.png'

@withRouter
class One extends React.Component {
    onStart = () => {
        this.props.history.push('/two')
    }
    render() {
        return (
            <Container>
                <BackgroundImg src={oneImg} />
                <Content>
                    <Blank />
                    <InputBox>
                        <Input maxLength="16" placeholder="输入姓名" />
                        <Button onClick={this.onStart}>开始抽卡</Button>
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
                    </InputBox>
                </Content>
            </Container>
        )
    }
}

export default One