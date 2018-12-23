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
import bgMp3 from '../sounds/bg.mp3'

let canplay = false
if( typeof Audio !== undefined){
    window.ad = new Audio(bgMp3)
    window.ad.addEventListener('canplay', () => {
        canplay = true
    }, false)
}

// images
import oneImg from '../images/one.jpg'
import leftAntlerImg from '../images/leftAntler.png'
import rightAntlerImg from '../images/rightAntler.png'

@withRouter
class One extends React.Component {
    state = {
        name: '',
        pass: false
    }
    onStart = () => {
        if (this.state.name) {
            this.props.history.push('/two')

            window.username = this.state.name
        }
    }
    onInputClick = () => {
        window.ad && canplay && ad.play()
    }
    onChange = e => {
        this.setState({
            name: e.target.value,
            pass: !!e.target.value
        })
    }
    render() {
        const { name, pass } = this.state
        return (
            <Container>
                <BackgroundImg src={oneImg} />
                <Content>
                    <Blank />
                    <InputBox>
                        <Input value={name} maxLength="16" placeholder="输入姓名" onChange={this.onChange} onClick={this.onInputClick} />
                        <Button pass={pass} onClick={this.onStart}>
                            开始抽卡
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
                    </InputBox>
                </Content>
            </Container>
        )
    }
}

export default One
