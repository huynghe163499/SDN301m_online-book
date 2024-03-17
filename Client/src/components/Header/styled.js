import { Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'


export const PrevHeader = styled.div `
    width: 100%;
    /* background-color: #E9E9EB; */
    
    .login,
    .register {
        color: white;
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        height: 100%;
        width: 90px;
        justify-content: center;
        align-items: center;

        &:hover {
            /* background-color: #F6E9F9; */
            color: #000; 
        }   
    }
`

export const HeaderContainer = styled.div `
    width: 100%;
    height: 50px;
    background-color: #81FB89;
    display: flex;
`

export const CusLink = styled(NavLink) `
    text-decoration: none;
    color: #333;
    font-weight: 600;
    height: 100%;
    align-self: center;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #F6E9F9;
        color: #000; 
    }

    &.active {
        background-color: #F0B8FA;
        color: #000; 
    }
` 

export const CusDropdown = styled(Dropdown) `
    margin-top: 12px
`