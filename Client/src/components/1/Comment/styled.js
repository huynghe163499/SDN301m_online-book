import {styled} from 'styled-components'


export const DivContainer = styled.div `
    width: 80%;
    margin: 24px auto;
    background-color: #fff;
    height: 100vh;
    display: flex;
    line-height: 1.2;
    font-family: sans-serif;
`

export const CommentDiv = styled.div `
    margin-left: 12px;
    flex: 1;
`

export const CreatedDate = styled.div `
    margin: 4px 0 15px 0;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
`

export const CommentDetails = styled.div `
    margin: 15px 0;
    font-family: Helvetica Neue;
    display: block;
    color: rgba(0, 0, 0, 0.87);
    box-sizing: border-box;
    font-size: 14px;
    text-wrap: wrap;
    word-break: break-word;
`

export const Action = styled.div `
    margin-top: 20px;
    display: flex;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
`