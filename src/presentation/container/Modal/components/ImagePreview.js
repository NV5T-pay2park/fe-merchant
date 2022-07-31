import { AddAPhoto } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import MKAvatar from "presentation/components/MKAvatar";
import MKBox from "presentation/components/MKBox";
import MKTypography from "presentation/components/MKTypography";

export default function ImagePreview({ images, setImages, previewImages, setPreviewImages }) {
  const addSelectedImages = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = [...images];
      const newPreviewImages = [...previewImages];
      for (let i = 0; i < e.target.files.length; ++i) {
        newImages.push(e.target.files[i]);
        newPreviewImages.push(URL.createObjectURL(e.target.files[i]))
      }
      setImages(newImages);
      setPreviewImages(newPreviewImages);
    }
  }
  return (
    <Container>
      <MKTypography variant="body">Hình ảnh minh họa</MKTypography>
      <Grid
        item
        container
        md={12}
        lg={12}
        xs={12}
        sx={{ mx: 3 }}
        align="center"
      >
        <Grid
          item
          md={6}
          lg={3}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              multiple
              id="browser-images"
              onChange={addSelectedImages}
            />
            <label htmlFor="browser-images">
              <MKBox sx={{ cursor: "pointer" }}>
                <AddAPhoto fontSize="large" />
                <MKTypography variant="body2">Thêm ảnh</MKTypography>
              </MKBox>
            </label>
          </>
        </Grid>
        {previewImages.map((image) => (
          <Grid item md={6} lg={3} xs={12} key={image.toString()}>
            <MKAvatar src={`${image}`} size="xxl" variant="square" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
