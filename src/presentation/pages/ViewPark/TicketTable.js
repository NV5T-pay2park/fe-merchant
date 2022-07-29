import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function TicketTable({ data }) {
  const columns = [
    { field: "license", headerName: "Biển số xe", width: 200 },
    { field: "checkinTime", headerName: "Giờ vào", width: 200 },
  ];
  return (
    <Grid container sx={{mx: "auto"}} height="40rem">
      <DataGrid
        rows={data}
        columns={columns}
      />
    </Grid>
  )
}
