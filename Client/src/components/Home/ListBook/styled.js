import styled from 'styled-components'


export const PageContainer = styled.div `
    width: 100%;

    .details, :where(.css-dev-only-do-not-override-1vr7spz).ant-card .ant-card-body {
        padding: 5px;
        border-radius: none;
        margin-bottom: 20px;
    }

    .history, .following, .rank {
        border: 1px solid #E2E2E2;
        width: 100%;
    }

    .zoom-on-hover {
        overflow: hidden;
        position: relative;
        transition: transform 0.3s;
    }

    .zoom-on-hover:hover .zoom-image {
        transform: scale(1.1);
    }

    .zoom-image {
        transition: transform 0.3s;
    }
`