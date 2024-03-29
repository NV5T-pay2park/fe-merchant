import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

export default function TicketTable({ tickets }) {
  const columns = [
    { field: "ticketID", headerName: "Vé xe", width: 180},
    { field: "licensePlate", headerName: "Biển số xe", width: 140 },
    { field: "checkInTime", headerName: "Giờ vào", width: 180 },
    { field: "endUserName", headerName: "Khách hàng", width: 250}
  ];
  return (
    <Grid container sx={{mx: "auto"}} height="40rem">
      <DataGrid
        rows={tickets}
        columns={columns}
      />
    </Grid>
  )
}
