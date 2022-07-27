import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import { useState } from "react";

export default function PriceTable({ vehicles, data }) {
  const [rows, setRows] = useState([{ id: 1, duration: "4", description: "4 giờ đầu", id1: 10, id2: 112.31 },
  { id: 2, duration: "8", description: "4..8 giờ", id3: 11.11, id2: 112.31 },
  ])
  
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

  const handleAddNewRow = () => {
    // TODO: set description
    setRows(rows.concat({
      id: rows.at(-1).id + 1,
      description: "trở đi",
      duration: 0
    }))
  }

  return (
    <MKBox>
      <MKBox display="flex" justifyContent="flex-start">
        <MKButton
          sx={{mb:1}}
          size="small"
          color="info"
          variant="gradient"
          onClick={handleAddNewRow}
        >
          Thêm giờ
        </MKButton>
      </MKBox>
      <Grid container sx={{ mx: "auto" }} height="20rem" color>
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Grid>
    </MKBox>
  );
}
