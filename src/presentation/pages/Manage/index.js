
import { Icon } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import BaseLayout from "presentation/container/BaseLayout";

import {Grid} from "@mui/material";
import ParkCard from "presentation/components/ParkCard";

import { getParks } from "services/park.service"

import { useSelector } from "react-redux";


export default function ManagePage() {
  
  const { user: currentUser } = useSelector((state) => state.auth);

  

  const createNewParkButton = (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      mb={10}
      component="section"
      sx={{overflow: "hidden"}}
    >
      <MKButton
        variant="gradient"
        size="medium"
        color="success"
      >
        <Icon sx={{mr:1}} >add_circle_round</Icon>
        Thêm nhà xe
      </MKButton>
      
    </MKBox>
  );
  
  const renderParkList = (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      mb={12}
      component="section"
      sx={{overflow: "hidden"}}
    >
      
    </MKBox>
  );
  

  return (
    <BaseLayout
      title="Quản lý bãi giữ xe"
      breadcrumb={[
        { label: "home"},
        { label: "Quản lý bãi giữ xe"},
      ]}
    >
      {createNewParkButton}
      {renderParkList}  
      
      <Grid 
            container 
            xs={12} 
            lg={4} 
            sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <ParkCard
              image="https://demos.creative-tim.com/material-kit-pro-react/static/media/product-2-min.0ef21c35.jpg"
              title="Single room in the center of the city"
              address="30 Lý Chính Thắng, phường 2, quận 3"
              time="10h00 - 12h00"
              information={{
                label: "Đang phục vụ 12",
                color: "success"
              }}
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