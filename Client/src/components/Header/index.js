import { Link, NavLink, useLocation  } from "react-router-dom";
import { CusDropdown, CusLink, HeaderContainer, PrevHeader } from "./styled";
import React, { useEffect, useState } from "react";
import Modal from "antd/es/modal/Modal";
import Login from "../Login";
import Register from "../Register";
import { Button } from "antd";
// import QRCode from "qrcode.react";
import { HomeOutlined } from "@ant-design/icons";

const Header = () => {
    const [isModalLogin, setIsModalLoginn] = useState(false);
    const [isModalRegister, setIsModalRegister] = useState(false);

    const handleCancelLogin = () => {
        setIsModalLoginn(false);
    };
    const showModalLogin = () => {
        setIsModalLoginn(true)
    }
    const handleCancelRegister = () => {
        setIsModalRegister(false);
    };
    const showModalRegister = () => {
        setIsModalRegister(true)
    }

    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState(location.pathname);
  
    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location.pathname]);

    const myQR_url = 'https://www.instagram.com/_htung.104/'

    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                    setIsSticky(true);
            } else {
                    setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (  
        <>
            <PrevHeader style={{backgroundImage: `url('https://bizweb.dktcdn.net/100/330/208/files/1217368.jpg?v=1640828889682')`}} className="mh-50 d-flex justify-content-space-between justify-item-center align-items-center">
                <div className="h-100pe ml-80" style={{backgroundColor: 'black', width: '100px'}}>
                    {/* logo */}
                </div>
                <div className="mr-80 d-flex justify-content-space-between">
                    <NavLink className="login" to={currentUrl} onClick={showModalLogin}>Đăng ký</NavLink>
                    <NavLink className="register" to={currentUrl} onClick={showModalRegister}>Đăng nhập</NavLink>
                </div>
                
                
            </PrevHeader>
            
            <HeaderContainer style={{ position: isSticky ? 'fixed' : 'static', top: isSticky ? 0 : 'auto', zIndex: isSticky ? 1000 : 'auto' }}>
                {/* <div className="ml-20">
                    <QRCode style={{height: '50px', width: '50px'}} value={myQR_url} />
                </div> */}
                <div className="ml-80 d-flex justify-content-space-between">  
                    <div className="d-flex">
                        <CusLink to={'/'}> <HomeOutlined className="fs-28" /> </CusLink>
                        <CusLink to={'/the-loai'}> Thể loại </CusLink>
                        <CusLink to={'/theo-doi'}> Theo dõi </CusLink>
                        <CusLink to={'/xep-hang'}> Xếp hạng </CusLink>
                        <CusLink to={'/danh-muc'}> Danh mục </CusLink>
                        <CusLink to={'/thong-tin'}> Thông báo </CusLink>
                    </div>                  
                    <div></div>                  
                </div>
                
                {/* modal register */}
                <Modal
                    title="Register"
                    open={isModalRegister}
                    footer={null}
                    onCancel={handleCancelRegister}
                    centered
                >
                    <Register/>
                </Modal>

                {/* modal login */}
                <Modal
                    title="Login"
                    open={isModalLogin}
                    footer={null}
                    onCancel={handleCancelLogin}
                    centered
                >
                    <Login/>
                </Modal>

            </HeaderContainer>
        </>

    );
}
 
export default Header;