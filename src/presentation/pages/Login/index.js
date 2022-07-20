// https://github.dev/bezkoder/react-redux-hooks-jwt-auth/blob/master/src/reducers/auth.js
// https://github1s.com/bezkoder/react-redux-login-example/blob/master/src/slices/auth.js

// https://www.pluralsight.com/guides/how-to-router-redirect-after-login

import { useState } from "react";

import routes from "routes";

import Navbar from "presentation/container/NavBar";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

import MKTypography from "presentation/components/MKTypography";
import MKInput from "presentation/components/MKInput";
import MKButton from "presentation/components/MKButton";
import MKBox from "presentation/components/MKBox";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, Navigate } from "react-router-dom";

import { login } from "redux/authSlice";

export default function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handlePhoneOnChange(e) {
    setPhone(e.target.value);
  }

  function handleUsernameOnChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordOnChange(e) {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    setLoading(true);
    dispatch(login({ phone, username, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // if logged in then redirect
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Navbar
        routes={routes}
        action={{
          type: "external",
          route: "https://mc.zalopay.vn/mso-v3/register",
          label: "đăng ký",
          color: "info",
        }}
      />
      <MKBox
        width="100%"
        height="100vh"
        mx="auto"
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        px={1}
        varient="gradient"
        bgColor="grey[100]"
      >
        <Grid
          container
          spacing={1}
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                textAlign="center"
                mx={2}
                mt={-3}
                mb={1}
                py={3}
                px={1}
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Đăng nhập
                </MKTypography>

                <MKTypography
                  variant="overline"
                  color="white"
                  fontWeight="regular"
                  mt={1}
                >
                  Sử dụng tài khoản đã đăng ký trên ZaloPay Merchant
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="tel"
                      label="Số điện thoại Merchant Admin"
                      placeholder="0123456789"
                      value={phone}
                      onChange={(e) => handlePhoneOnChange(e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Tên đăng nhập"
                      placeholder="nhaxebigc_nv1"
                      value={username}
                      onChange={(e) => handleUsernameOnChange(e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Mật khẩu"
                      placeholder="*******"
                      value={password}
                      onChange={(e) => handlePasswordOnChange(e)}
                      fullWidth
                    />
                  </MKBox>
                  {/* login button */}

                  <MKBox textAlign="center" mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fontWeight="medium"
                      onClick={handleLogin}
                    >
                      Đăng nhập
                    </MKButton>
                  </MKBox>

                  {/* sign up button */}
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Trở thành đối tác?{" "}
                      <MKTypography
                        component={MuiLink}
                        href="https://mc.zalopay.vn/mso-v3/register"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Đăng ký
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}
