import MKBox from "presentation/components/MKBox";

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

export default function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="schedule"
                    title="Nhanh chóng"
                    description="Thanh toán nhanh bằng Zalopay không cần tiền mặt"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Tiện lợi"
                    description="Không cần thẻ xe, chỉ cần chiếc điện thoại của bạn"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="qr_code_2"
                    title="Đơn giản"
                    description="Sử dụng QR code để checkin và checkout"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="security"
                    title="An toàn"
                    description="Không sợ bị mất vé giữ xe gây nhiều phiền toái"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid 
            item 
            xs={12} 
            lg={4} 
            sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://mc.zalopay.vn/assets/imgs/home/right-banner.png"
              title="Lợi ích khi trở thành đối tác"
              description="Pay2Park là một ứng dụng được thiết kế tinh chỉnh, thân thiện, hiện đại. Cho phép người dùng làm thủ tục gửi xe và thanh toán một cách nhanh chóng, an toàn và tiện lợi. Chủ nhà xe có thể chia sẻ nhà xe để tiếp cận với người dùng một cách dễ dàng."
              action={{
                type: "external",
                route: "https://mc.zalopay.vn/mso-v3/register",
                color: "info",
                label: "đăng ký",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}