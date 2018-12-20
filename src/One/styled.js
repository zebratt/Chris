import styled from 'styled-components'
import yellowButtonImg from '../images/yellow.png'


export const Container = styled.div`
    position: relative;
`

export const BackgroundImg = styled.img`
    display: block;
    width: 100%;
`

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`

export const Blank = styled.div`
    flex: 2;
`

export const InputBox = styled.div`
    flex: 1;
`

export const Input = styled.input`
    display: block;
    width: 75%;
    margin: 20px auto;
    padding: 4px 25px;
    height: 42px;
    border-radius: 20px;
    background: #fff;
    border: #333;
    box-sizing: border-box;
    outline: none;
    color: #666;
    font-size: 16px;
`

export const Button = styled.div`
    width: 78%;
    height: 58px;
    line-height: 48px;
    margin: 0 auto;
    background: url(${yellowButtonImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    font-size: 23px;
    color: #e8441b;
`

export const TipBox = styled.div`
    width: 80%;
    background: #e44142;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 6px;
    margin: 20px auto;
`

export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
`

export const Antler = styled.img`
    height: 15px;
`

export const Text = styled.div`
    color: #ffc71e;
    font-size: 15px;
    padding: 3px 6px;
    letter-spacing: 2px;
`

export const Tips = styled.div`
    color: #fff;
    font-size: 13px;
    padding: 4px 6px;
    line-height: 1.4;
`