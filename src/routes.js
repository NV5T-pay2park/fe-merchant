import AboutUs from "presentation/pages/AboutUs";
import React from "react";

const Icon = React.lazy(() => import("@mui/material/Icon"));
const Checkout = React.lazy(() => import("presentation/pages/Checkout"));
const HomePage = React.lazy(() => import("presentation/pages/HomePage"));
const Login = React.lazy(() => import("presentation/pages/Login"));
const ManagePage = React.lazy(() => import("presentation/pages/Manage"));
const ViewPark = React.lazy(() => import("presentation/pages/ViewPark"));

const routes = [
  {
    name: "Trang chủ",
    icon: <Icon>home</Icon>,
    route: "/home",
    component: <HomePage />,
  },
  {
    name: "Tác giả",
    icon: <Icon>people</Icon>,
    route: "/about-us",
    component: <AboutUs />
  },
  {
    name: "Đăng nhập",
    icon: <Icon>login</Icon>,
    route: "/login",
    component: <Login />,
    hide: true,
  },
  {
    name: "Quản lý nhà xe",
    icon: <Icon>emoji_transportation_sharp</Icon>,
    route: "/manage",
    component: <ManagePage />,
    requireLoggedIn: true,
  },
  {
    hide: true,
    requireLoggedIn: true,
    route: "/manage/:parkId",
    component: <ViewPark />,
  },
  {
    hide: true,
    requireLoggedIn: true,
    route: "/manage/checkout/:parkId",
    component: <Checkout />,
  },
];

export default routes;
