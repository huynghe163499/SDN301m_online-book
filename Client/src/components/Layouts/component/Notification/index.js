import { Badge, Col, Dropdown } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SvgIcon from "src/components/SvgIcon"
// import NotifyService from "src/services/NotifyService"
import NotifyForm from "./components/NotifyForm"
// import Notice from "src/components/Notice"

const Notification = () => {
  const { userInfo } = useSelector(state => state?.appGlobal)
  // const navigate = useNavigate()
  const [connection, setConnection] = useState(null)
  const [listNotify, setListNotify] = useState([])
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [numberOfNewNotifies, setNumberOfNewNotifies] = useState(0)
  const [statusPay, setStatusPay] = useState(undefined)
  const [dataPay, setDataPay] = useState(undefined)
  const [statusCreateReceipt, setStatusCreateReceipt] = useState(undefined)
  const [dataGetReceipt, setDataGetReceipt] = useState(undefined)

  // const [statusCreateReceipt, setStatusCreateReceipt ] = useState(undefined)

  const dispatch = useDispatch()
  const getListNotify = (TextSearch = "") => {
    // setLoading(true)
    // let params = {}
    // if (TextSearch) {
    //   params = { TextSearch: TextSearch }
    // }
    // NotifyService.GetListNotify(params)
    //   .then(res => {
    //     if (res.isOk) {
    //       setListNotify(res?.Object)
    //     }
    //   })
    //   .finally(() => setLoading(false))
  }
  const getNewNotification = () => {
    // NotifyService.GetNewNotification().then(res => {
    //   if (res.isError) return
    //   res?.Object?.forEach(item => {
    //     if (item.UserId === userInfo?.UserID) {
    //       setNumberOfNewNotifies(item.NumberUnseen)
    //     }
    //   })
    // })
  }
  useEffect(() => {
    if (userInfo?.UserID) {
      // getNewNotification()
      // getListNotify("")
    }
  }, [userInfo])
  //process.env.REACT_APP_API_WS

  return (
    <Dropdown
      overlay={
        <NotifyForm
          getList={textSearch => getListNotify(textSearch)}
          listNotify={listNotify}
          loading={loading}
          onClose={() => setVisible(false)}
        />
      }
      onOpenChange={setVisible}
      open={visible}
      trigger={["click"]}
    >
      <Col
        className="pointer"
        onClick={() => {
          if (numberOfNewNotifies > 0) {
            setNumberOfNewNotifies(0)
            // setLoading(true)
            // NotifyService.MarkAsSeen("")
            //   .then(res => {
            //     if (res.isOk) {
            //       // getListNotify("")
            //     }
            //   })
            //   .finally(() => setLoading(false))
          }
        }}
      >
        <div className="wrap-icon">
          <Badge
            count={numberOfNewNotifies}
            overflowCount={10}
            size="small"
            className="notification_count"
          >
            <SvgIcon name="bell" />
          </Badge>
        </div>
      </Col>
    </Dropdown>
  )
}

export default Notification
