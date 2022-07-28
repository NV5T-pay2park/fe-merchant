import Icon from "@mui/material/Icon";
import HomePage from "presentation/pages/HomePage";
import Login from "presentation/pages/Login";
import ManagePage from "presentation/pages/Manage";
import ViewPark from "presentation/pages/ViewPark";

const routes = [
  {
    name: "Trang chủ",
    icon: <Icon>home</Icon>,
    route: "/home",
    component: <HomePage />
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
    hide: true,
    requireLoggedIn: true,
    route: "/manage/:parkId",
    component: <ViewPark title="ahihi dongok"/>
  }
]

export default routes;
