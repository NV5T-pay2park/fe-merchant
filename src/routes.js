import Icon from "@mui/material/Icon";
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
    icon: <Icon>credit_score</Icon>,
    route: "/payment-solution"
    // component: <AboutUs />
  },
  {
    name: "Đăng nhập",
    icon: <Icon>login</Icon>,
    route: "/login",
    component: <Login />,
    hide: true
  }
]

export default routes;
