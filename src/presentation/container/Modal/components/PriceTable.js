import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import { useCallback, useState } from "react";
import { deleteRow } from "services/price.service";
import { createColumns, editRow, createNewRow } from "services/price.service";

export default function PriceTable({ vehicles, data }) {
  const [rows, setRows] = useState([
    { id: 1, duration: "", description: "Đồng giá" },
  ]);

  const [deletedRow, setDeletedRow] = useState(-1);

  const columns = createColumns(vehicles);

  const handleAddNewRow = () => {
    // TODO: set description
    setRows(createNewRow(rows));
  };

  const handleRowSelection = useCallback((params) => {
    setDeletedRow(params.id);
  }, []);

  const handleDeleteRow = () => {
    if (rows.length > 1) {
      setRows(deleteRow(rows, deletedRow));
    }
    setDeletedRow(-1);
  };

  const handleChangeCell = (params, event) => {
    event.defaultMuiPrevented = true;
    setRows(editRow(params, rows));
  }

  return (
    <MKBox>
      <MKBox display="flex" justifyContent="flex-start">
        <MKButton
          sx={{ mb: 1 }}
          size="small"
          color="info"
          variant="gradient"
          onClick={handleAddNewRow}
        >
          Thêm giờ
        </MKButton>

        {deletedRow > -1 && (
          <MKButton
            sx={{ mb: 1, mx: 2 }}
            size="small"
            color="error"
            variant="gradient"
            onClick={handleDeleteRow}
          >
            Xóa
          </MKButton>
        )}
      </MKBox>
      <Grid container sx={{ mx: "auto" }} height="20rem" color>
        <DataGrid
          rows={rows}
          columns={columns}
          onCellEditCommit={handleChangeCell}
          onCellClick={handleRowSelection}
          // experimentalFeatures={{ newEditingApi: true }}
        />
      </Grid>
    </MKBox>
  );
}
