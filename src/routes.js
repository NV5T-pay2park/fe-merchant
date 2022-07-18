import Icon from "@mui/material/Icon";
import AboutUs from "pages/AboutUs";

const routes = [
  {
    name: "Trang chủ",
    icon: <Icon>home</Icon>,
    route: "/home",
    component: <AboutUs />
  },
  {
    name: "Giải pháp thanh toán",
    icon: <Icon>credit_score</Icon>,
    route: "/payment-solution"
    // component: <AboutUs />
  },
]

export default routes;
