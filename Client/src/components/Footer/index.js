import { Col, Divider, Row } from "antd"
import { FooterStyled } from "./styled"
import logo from "src/assets/images/home/logo-shtt.png"
import imgfooter from "src/assets/images/home/img-footer.png"
const Footer = () => {
  return (
    <FooterStyled>
      <Divider />
      <div className="bg-footer p-30">
        <Row>
          <Col xl={3}>{/* <img src={logo} alt="logo" /> */}</Col>
          <Col xl={9}>
            <div className="white mb-10">
              <span className="fw-600">Cơ quan chủ quản:</span> Cục sở hữu trí
              tuệ (IP VIETNAM)
            </div>
            <div className="white">
              <span className="fw-600 mb-10">Địa chỉ:</span> 384-386, đường
              Nguyễn Trãi, quận Thanh Xuân, Thành phố Hà Nội.
            </div>
            <div className="white mb-10 mt-10">
              <span className="fw-600">Tổng đài:</span> (024) 3858 3069 (Máy lẻ
              2206)
            </div>
            {/* <div className="white mb-5">
              {" "}
              Giấy phép thiết lập Website số 55/GP-BC do Cục Báo chí - Bộ Văn
              hoá Thông tin cấp ngày 04/05/2005
            </div>
            <div className="white mb-5">
              <span className="fw-500">Email:</span> vietnamipo@ipvietnam.gov.vn
            </div>
            <div className="fw-500 white mb-5">
              Ghi rõ nguồn từ "IP VIETNAM" khi phát hành lại thông tin từ Cổng
              thông tin điện tử này
            </div> */}
          </Col>
          <Col xl={9}>
            {/* <img src={imgfooter} alt="img" /> */}
            <div className="fw-500 white mb-10">
              <span>
                Giấy phép thiết lập Website số 55/GP-BC do Cục Báo chí - Bộ Văn
                hoá Thông tin cấp ngày 04/05/2005
              </span>
            </div>
            <div className="white mb-10">
              <span className="fw-600">Email:</span> vietnamipo@ipvietnam.gov.vn
            </div>
            <div className="fw-500 white mb-10">
              Ghi rõ nguồn từ "IP VIETNAM" khi phát hành lại thông tin từ Cổng
              thông tin điện tử này
            </div>
          </Col>
          <Col xl={3}>{/* <img src={logo} alt="logo" /> */}</Col>
        </Row>
      </div>
      <div className="footer-last p-10 d-flex-center">
        <div className="text-center white">
          © CỔNG THÔNG TIN ĐIỆN TỬ CỤC SỞ HỮU TRÍ TUỆ
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
