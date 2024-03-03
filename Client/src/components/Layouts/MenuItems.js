import ROUTER from "src/router"
import SvgIcon from "../SvgIcon"
const MenuItemBreadcrumb = () => {
  return [
    // {
    //   label: "Đăng nhập",
    //   key: ROUTER?.DANG_NHAP,
    // },
    // {
    //   label: "Đăng ký",
    //   key: ROUTER?.DANG_KY,
    // },
    
  ]
}

export default MenuItemBreadcrumb

export const MenuItemAdmin = () => {
  return [
    // {
    //   label: "Quản lý hồ sơ",
    //   key: "subkey2",
    //   icon: <SvgIcon name="document" />,
    //   TabID: [9, 10, 11, 12, 13],
    //   children: [
    //     {
    //       label: "Tiếp nhận Trực Tuyến",
    //       key: ROUTER.HO_SO_TRUC_TUYEN,
    //       TabID: [9],
    //     },
    //   ],
    // },
  ]
}

export const MenuItemUser = () => {
  return [
    // {
    //   key: ROUTER.HOME,
    //   label: "Trang chủ",
    //   icon: <SvgIcon name="home" />,
    //   TabID: [],
    // },
  ]
}
