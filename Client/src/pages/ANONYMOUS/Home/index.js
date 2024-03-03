import { Form, Input } from "antd"
import { useEffect, useState } from "react"
import { HomeStyled } from "./styled"
import { useLocation } from "react-router-dom"
import ROUTER from "src/router"

function HomePage({ children }) {
  const location = useLocation()
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (location.pathname === ROUTER.XAC_NHAN) setOpenModal(true)
  }, [])

  return (
    <HomeStyled>
      <div className="home-background-cover d-flex-center">
        <div className="d-flex align-items-center flex-column">
          <div className="white fs-40 mb-24">Bạn cần trợ giúp</div>
          <Form style={{ width: "700px" }}>
            <Form.Item>
              <Input.Search
                placeholder="Nhập từ khóa"
                enterButton
                size="large"
              />
            </Form.Item>
          </Form>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
    </HomeStyled>
  )
}
export default HomePage
