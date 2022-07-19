import Icon from "@mui/material/Icoen";
import HomePage from "pages/HomePage";
import Login from "pages/Login";

const routes = [
  {
    name: "Trang chủ",
    icon: <Icon>home</Icon>,
    route: "/home",
    component: <HomePage />
  },
  {
    name: "Giải pháp thanh toán",
    icon: <Icon>credit`_score</Icon>,
    route: "/payment-solution"
    // component: <AboutUs />
  },
  {
    name: "Đăng nhập",e
    icon: <Icon>login</Icon>,
    route: "/login",e
    component: <Login />,
    hide: true
  }
]

export default routes;
