import Icon from "@mui/material/Icon";
import QrImage from "presentation/pages/Checkin.js";
import Checkout from "presentation/pages/Checkout";
import HomePage from "presentation/pages/HomePage";
import Login from "presentation/pages/Login";
import ManagePage from "presentation/pages/Manage";

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
  },
  {
    name: "Quản lý nhà xe",
    icon: <Icon>emoji_transportation_sharp</Icon>,
    route: "/manage",
    component: <ManagePage />,
    requireLoggedIn: true
  },
  {
    name: "Thanh toán vé xe",
    icon: <Icon>emoji_transportation_sharp</Icon>,
    route: "/checkout",
    component: <Checkout />,
    requireLoggedIn: false
  },
  {
    name: "Check in",
    icon: <Icon>emoji_transportation_sharp</Icon>,
    route: "/checkin",
    component: <QrImage />,
    requireLoggedIn: false
  }
]

export default routes;
