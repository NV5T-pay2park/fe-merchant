import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MKBox from "presentation/components/MKBox";

export default function PriceTable({ vehicles, data }) {
  const columns = [
    {
      field: "duration",
      headerName: "Khoảng giờ",
      width: 100,
      type: "number",
      editable: true,
    },
    { field: "description", headerName: "Mô tả", width: 150 },
  ].concat(
    vehicles.map((vehicle) => ({
      field: `id${vehicle.id}`,
      headerName: vehicle.name,
      width: 150,
      editable: true,
      valueFormatter: (params) => {
        if (params.value == null)
          return '0 VNĐ/1h';
        let perUnitIndex = params.value.toString().indexOf('/');
        let unit = 1;
        if (perUnitIndex > -1 && perUnitIndex < params.value.length - 1) {
          unit = parseInt(params.value.toString().slice(perUnitIndex + 1))
        }
        if (perUnitIndex === -1) {
          perUnitIndex = params.value.length
        }
        return `${params.value.toString().slice(0, perUnitIndex)} VNĐ/${unit}h`
      }
    }))
  );

  console.log(columns);

  const rows = [
    { id: 1, duration: "4", description: "4 giờ đầu", id1: 10, id2: 112.31 },
    { id: 2, duration: "8", description: "4..8 giờ", id3: 11.11, id2: 112.31 },
    {
      id: 3,
      duration: "8",
      description: "4 giờ tiếp theo",
      id3: 11.11,
      id2: 112.31,
    },
    {
      id: 4,
      duration: "8",
      description: "4 giờ tiếp theo",
      id3: 11.11,
      id2: 112.31,
    },
    {
      id: 5,
      duration: "8",
      description: "4 giờ tiếp theo",
      id3: 11.11,
      id2: 112.31,
    },
    {
      id: 6,
      duration: "8",
      description: "4 giờ tiếp theo",
      id3: 11.11,
      id2: 112.31,
    },
    {
      id: 7,
      duration: "8",
      description: "4 giờ tiếp theo",
      id3: 11.11,
      id2: 112.31,
    },
  ];

  return (
    <MKBox>
      <Grid container sx={{ mx: "auto" }} height="20rem">
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Grid>
    </MKBox>
  );
}
