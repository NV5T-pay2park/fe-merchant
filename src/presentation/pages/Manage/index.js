import { Grid } from "@mui/material";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import ParkCard from "presentation/components/ParkCard";
import BaseLayout from "presentation/container/BaseLayout";

export default function ManagePage() {
  return (
    <BaseLayout
      title="Quản lý bãi giữ xe"
      breadcrumb={[
        { label: "home"},
        { label: "Quản lý bãi giữ xe"},
      ]}
    >
      

    </BaseLayout>
  )
}

/*
<Grid 
            container 
            xs={12} 
            lg={4} 
            sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <ParkCard
              image="https://demos.creative-tim.com/material-kit-pro-react/static/media/product-2-min.0ef21c35.jpg"
              title="Single room in the center of the city"
              description="Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
              infomation="10h00 - 12h00"
              actions={[{
                route: "https://mc.zalopay.vn/mso-v3/register",
                color: "info",
                label: "Cập nhật",
                icon: "edit",
              },
              {
                route: "https://mc.zalopay.vn/mso-v3/register",
                color: "error",
                label: "Xóa",
                icon: "delete",
              },]}
            />
          </Grid>
*/