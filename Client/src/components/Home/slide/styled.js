import styled from 'styled-components'


export const SlideContainer = styled.div `
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;

    .details, :where(.css-dev-only-do-not-override-1vr7spz).ant-card .ant-card-body {
        padding: 0;
        border-radius: none;
    }

    .next,
    .prev {
        z-index: 1; 
        width: 50px;
        height: 60px;
        top: 30%;
        opacity: 0.6;
        position: absolute;
        font-size: 25px;
    }

   .next {
        left: 10px;
    }
    
    .prev {
        right: 10px;
    }

    .main {
        width: 100%;
    }

`