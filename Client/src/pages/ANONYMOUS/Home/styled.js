import styled from "styled-components"
import { Col, Menu, Steps } from "antd"
import trongdongImg from "src/assets/images/home/trongdong.png"
import imgBg1 from "src/assets/images/home/Bg-ellsclip.png"

export const HomeStyled = styled.div`
  .home-background-cover {
    background-color: #062045;
    background-image: url(${imgBg1}) !important;
    background-repeat: no-repeat !important;
    position: relative;
    background-size: cover !important;
    background-position: center !important;
    height: 300px;
  }
  .box-left {
    display: inline-flex;
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    border-radius: 4px;
    background: rgba(248, 252, 255, 0.9);
    max-width: 628px;
  }
  .box-right {
    display: inline-flex;

    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    border-radius: 4px;
    background: rgba(248, 252, 255, 0.9);
    width: 628px;
  }
  .ant-divider-horizontal {
    margin: unset;
  }
  .ant-tabs-tab-btn {
    color: #000000;
    font-weight: 600;
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--color-blue) !important;
  }
  .ant-tabs-tab {
    flex: 1;
    text-align: center;
    justify-content: center;
    border: none;
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-content-holder {
    padding: 20px;
  }
  .ant-divider {
    background: var(--color-blue) !important;
    height: 2px;
  }
  .ant-input-search-button {
    background-color: #3260c5;
  }
`
export const ContentStyleAnimation = styled(Col)`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0px !important;
  margin-top: 10px;
  text-shadow: 0 1px #999;
  animation: BoxAnimate ${props => 1 + props.order * 0.3}s linear;
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 0px !important;
    /* margin-top: 40px; */
  }
  .option-box {
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
    @media only screen and (min-width: 1200px) {
      font-size: 22px;
    }
  }
  @keyframes BoxAnimate {
    0%,
    60% {
      margin-left: 100px;
      opacity: 0;
    }

    100% {
      margin-left: 0px;
      opacity: 1;
    }
  }
`
export const TabsNewsStyled = styled.div`
  .hover-red {
    :hover {
      color: #f0383e;
    }
  }
  .ant-tabs-content-holder {
    padding: 0px 0px;
  }
  .bread-crumb-tab-news {
    margin-top: 0px;
    margin-bottom: 15px;
    .ant-breadcrumb-link,
    .ant-breadcrumb-separator {
      color: #fff;
      font-weight: 400;
      opacity: 1;
      font-size: 14px;
    }
  }
  .see-more-2 {
    position: absolute;
    top: -50px;
    right: 0px;
    cursor: pointer;
  }

  .see-more-3 {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }
  .see-more {
    position: absolute;
    top: 20px;
    right: 0px;
    cursor: pointer;
  }
  .ant-tabs-tab-active {
    background: #f8f8f8;
  }
  .ant-tabs-tab {
    padding: 15px 25px;
    margin: 0px;
  }
  .ant-tabs-tab-btn {
    font-weight: 600;
    font-size: 15px;
    line-height: 120%;
    text-align: center;
    text-shadow: unset !important;
    color: #154398;
    @media only screen and (min-width: 600px) {
      font-size: 22px;
    }
    @media only screen and (min-width: 550px) {
      font-size: 18px;
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ee1d23;
  }
  .ant-tabs-ink-bar {
    height: 3px !important;
    background: linear-gradient(90deg, #154297 0%, #ed1e24 100%);
  }
`
export const MenuStyled = styled(Menu)`
  min-width: 1000px;
  .ant-menu-horizontal {
    border-bottom: none;
  }
`
export const HeaderStyled = styled.div`
  .ant-menu-horizontal {
    border-bottom: none;
  }
  padding: 24px 0;
  background: url(${trongdongImg}) no-repeat;
  background-position: center;
  background-size: cover;
`

export const CustomMenuStyled = styled.div`
  width: 100%;
  .ant-menu {
    background-color: unset;
    width: calc(100vw - 650px);
  }
  .ant-menu-submenu-selected::after {
    border-bottom: 2px solid #154398 !important;
    content: "";
    width: 10px;
    height: 6px;
    bottom: 0px;
    right: 0;
    position: absolute;
    left: 0;
    margin: auto;
  }
  .ant-menu-item {
    height: 60px;
  }
  .ant-menu-item,
  .ant-menu-submenu {
    padding: 0px !important;
    margin-right: 8px;
    top: 11px;
    display: flex;
    align-items: center;
  }

  .ant-menu-submenu-title {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 42%;
      right: 3px;
      border-width: 6px 4px;
      border-style: solid;
      border-color: #fff transparent transparent;
    }
    .ant-menu-title-content {
      padding-right: 18px;
    }
  }

  .ant-menu-submenu-popup .ant-menu-vertical .ant-menu-submenu {
    border-bottom: 1px dashed #e1e1e1;
    &:last-child {
      border-bottom: unset;
    }
  }
  .ant-menu-submenu:hover::after {
    border-bottom: unset !important;
  }
  .ant-menu-horizontal {
    border-bottom: 0px;
  }
  .ant-menu-title-content {
    color: #000000;
    padding: 12px;

    color: #154398;
    font-weight: 600;
  }

  .ant-menu-item:hover::after {
    border-bottom: unset !important;
  }
  .ant-menu-submenu:hover {
    color: transparent !important;
  }
  .ant-menu-submenu::after {
    border: unset !important;
  }
  .ant-menu-item-selected .ant-menu-title-content,
  .ant-menu-submenu-selected .ant-menu-submenu-title span,
  .ant-menu-item:hover .ant-menu-title-content,
  .ant-menu-overflow-item:hover
    .ant-menu-submenu-title
    .ant-menu-title-content {
    color: ${({ theme }) => theme["primary-color"]} !important;
    background-color: #fff;
    transition: all linear 0.3s;
  }
  .ant-menu-overflow-item.ant-menu-overflow-item-rest.ant-menu-submenu-selected,
  .ant-menu-overflow-item.ant-menu-submenu-selected[aria-hidden="true"] {
    .ant-menu-submenu-title span {
      background-color: transparent;
    }
  }
  .ant-menu-overflow-item:hover .ant-menu-submenu-title,
  .ant-menu-submenu-selected .ant-menu-submenu-title {
    &::after {
      border-color: ${({ theme }) => theme["primary-color"]} transparent
        transparent;
    }
  }

  .ant-menu-overflow-item-rest .ant-menu-submenu-title {
    &::after {
      display: none;
    }
    svg path {
      fill: #fff;
    }
  }

  .ant-menu-item-selected::after {
    border-bottom: unset !important;
    content: "";
    width: 10px;
    height: 6px;
    bottom: 0px;
    right: 0;
    position: absolute;
    left: 0;
    margin: auto;
  }
  .ant-menu-item-active::after {
    border-bottom: unset !important;
  }
  .ant-menu-horizontal > .ant-menu-item::after {
    transition: unset !important;
  }
`

export const Content = styled.div`
  max-width: 1600px;
  .step {
    background: #154398;
    border-radius: 8px;
  }
  .number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
  }
  .box-shadow {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
  .field-item {
    border: 1px solid black;
    border-color: ${({ theme }) => theme["primary-color"]};
    border-radius: 4px;
  }
  .border-box {
    border: 1px solid rgba(0, 0, 0, 0.32);
  }
  .box-dossier {
    max-height: 300px;
    overflow: auto;
  }
  .box-result {
    max-height: 250px;
    overflow: auto;
  }
`
export const WrapperFieldSupport = styled.div`
  background-color: #f1f3f5;
  margin: 60px 0;
  padding: 30px 0;
  .box-item {
    position: relative;
    width: 220px;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    padding: 20px 0;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      border-bottom: 5px solid transparent;
      transition: height 0.3s ease;
    }
    &:hover {
      cursor: pointer;
      &::before {
        border-bottom-color: #00cfff;
        border-radius: 0 0 16px 16px;
      }
    }
  }
`
export const WrapperStep = styled.div`
  background-color: #30486f;
  padding: 30px 0;
  .ant-steps-item-content {
    margin-top: 10px !important;
    text-align: left !important;
  }
  .ant-steps-item-content > .ant-steps-item-title {
    color: white !important;
  }
  .ant-steps-item-tail {
    margin-top: 22px;
    padding: 0 !important;
    margin-inline-start: 85px !important;
    &::after {
      background-color: white !important;
      height: 2px !important;
    }
  }
  .step-text {
    width: 150px;
  }
`
export const WrapperInstruction = styled.div`
  background-color: #f1f3f5;
  padding: 24px 0;
  .slick-prev {
    &::before {
      color: black !important;
    }
  }
  .slick-next {
    &::before {
      color: black !important;
    }
  }
  .instruction-text {
    font-weight: 600;
    color: #595959;
  }
  .instruction-text:hover {
    color: #69b1ff;
  }
`
export const WrapperProcedure = styled.div`
  margin: 64px 0;
  .box-procedure {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
    padding: 20px;
  }
  .item-procedure {
    padding: 10px;
    background-color: #eff1f5;
    border-radius: 8px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.12);
    .text1:hover {
      /* color: red; */
    }
    .text2:hover {
      color: #000;
    }
  }
`
export const WrapperContact = styled.div`
  padding: 20px 0;
  background-color: #f1f3f5;
  .box {
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
  }
  .custom-icon {
    width: 36px;
    height: 36px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .custom-icon:hover {
    cursor: text;
  }
`
