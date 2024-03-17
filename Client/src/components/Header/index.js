import { NavLink, useLocation  } from "react-router-dom";
import { CusLink, HeaderContainer, PrevHeader } from "./styled";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Drawer, Tabs } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import TabPane from "antd/es/tabs/TabPane";

const Header = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [activeTab, setActiveTab] = useState('login');

    const handleCancelLogin = () => {
        setOpenLogin(false);
    };
    const showLogin = () => {
        setOpenLogin(true)
        setActiveTab('login')
    }
    const showRegister = () => {
        setOpenLogin(true)
        setActiveTab('register')
    }

    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState(location.pathname);
  
    useEffect(() => {
      setCurrentUrl(location.pathname);
    }, [location.pathname]);

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

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (  
        <>
            <PrevHeader style={{backgroundImage: `url('https://bizweb.dktcdn.net/100/330/208/files/1217368.jpg?v=1640828889682')`}} className="mh-50 d-flex justify-content-space-between justify-item-center align-items-center">
                <div className="h-100pe ml-80" style={{width: '100px'}}>
                    {/* logo */}
                    <img style={{width: '100%', height: '100%'}} src="https://scontent.xx.fbcdn.net/v/t1.15752-9/430477722_875102571057099_6767844936237845455_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1aguASm8b5QAX9aXVqN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTNxxx58qBB_sSQWlnsqQQDl0xqkMP5-kPals8lXhueDg&oe=661ACCB1" alt="logo"/>
                </div>
                <div className="mr-80 d-flex justify-content-space-between">
                    <NavLink className="login" to={currentUrl} onClick={showLogin}>Đăng nhập</NavLink>
                    <NavLink className="register" to={currentUrl} onClick={showRegister}>Đăng ký</NavLink>
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
                    <div>
                    </div>                  
                </div>

                <Drawer 
                    closable={false}
                    onClose={handleCancelLogin} 
                    open={openLogin}
                    placement="right"
                    width={300}
                    className="drawer-lo-regis"
                >
                    <div className="d-flex mb-5" style={{height: '60px'}}>
                        <div className="mt-35 mr-85 fw-600">Chào khách!</div>
                        <div>
                            <img height={90} src="https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" alt='avt' />
                        </div>
                    </div>
                    
                    <Tabs activeKey={activeTab} onChange={handleTabChange}>
                        <TabPane tab={<span className="fs-12">ĐĂNG NHẬP</span>} key="login">
                            <Login/>
                        </TabPane>
                        <TabPane tab={<span className="fs-12">ĐĂNG KÝ</span>} key="register">
                            <Register/>
                        </TabPane>
                    </Tabs>
                </Drawer>

            </HeaderContainer>
        </>

    );
}
 
export default Header;