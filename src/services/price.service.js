import { getAllVehiclesType } from "./park.service";

export const createColumns = (vehicles) => {
  return [
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
      field: `${vehicle.id}`,
      headerName: vehicle.name,
      width: 150,
      editable: true,
      valueFormatter: (params) => {
        if (params.value == null) return "0 VNĐ/1h";
        let perUnitIndex = params.value.toString().indexOf("/");
        let unit = 1;
        if (perUnitIndex > -1 && perUnitIndex < params.value.length - 1) {
          unit = parseInt(params.value.toString().slice(perUnitIndex + 1));
        }
        if (perUnitIndex === -1) {
          perUnitIndex = params.value.length;
        }
        return `${params.value.toString().slice(0, perUnitIndex)} VNĐ/${unit}h`;
      },
    }))
  );
};

const editRowDescription = (rows, index) => {
  if (index < 0) return "";
  if (index === 0) {
    return `${rows.at(index).duration || "?"} giờ đầu`;
  } else if (index < rows.length - 1) {
    return `từ ${rows.at(index - 1).duration || "?"} đến ${
      rows.at(index).duration || "?"
    } giờ`;
  } else {
    return `${rows.at(index - 1).duration || "?"} trở đi`;
  }
};

export const createNewRow = (rows) => {
  const currentRow = {
    id: rows.at(-1).id + 1,
    description: editRowDescription(rows, rows.length),
    duration: "",
  };

  const newRows = rows.concat(currentRow);
  newRows.at(-2).description = editRowDescription(newRows, rows.length - 1);
  return newRows;
};

export const editRow = (params, rows) => {
  // check invalid duration
  if (params.field === "duration" && params.value <= 0) {
    return rows;
  }
  let index = -1;
  const newRows = rows.map((r, idx) => {
    if (r.id === params.id) {
      index = idx;
      return { ...r, [params.field]: params.value };
    }
    return { ...r };
  });
  // if edit duration of the last row
  if (params.field === "duration") {
    if (params.id === rows.at(-1).id) {
      return createNewRow(newRows);
    }
    newRows[index].description = editRowDescription(newRows, index);
    newRows[index + 1].description = editRowDescription(newRows, index + 1);
  }
  return newRows;
};

export const deleteRow = (rows, deletedRow) => {
  let index = -1;
  const newRows = rows.filter((data, idx) => {
    if (data.id === deletedRow) {
      index = idx;
      return false;
    }
    return true;
  });
  // if only remain one
  if (newRows.length === 1) {
    newRows[0].description = "Đồng giá";
  } else {
    if (index > 0) {
      newRows[index - 1].description = editRowDescription(newRows, index - 1);
    }
    if (index < newRows.length) {
      newRows[index].description = editRowDescription(newRows, index);
    }
  }
  return newRows;
};

export const convertRowsToJSON = (rows, vehicles) => {
  const result = vehicles.map((vehicle) => {
    const vehicleTypeId = vehicle.id;
    const prices = rows.map((row, index) => {
      const [price, unit = 1] = row[vehicleTypeId] ? row[vehicleTypeId].toString().split('/').map(x => +x) : [0, 0];
      const duration = index > 0 ? rows[index - 1].duration : 0;
      return { price, unit, duration };
    });
    return {vehicleTypeId, prices};
  });
  return result;
};

export const convertJSONToRows = (priceTable) => {
  // console.log(priceTable[0].prices)
  // return priceTable[0].prices.map((duration, idx) => {
  //   const price = priceTable.map(data => ({[data.vehicleTypeId]: data.prices[idx]}));
  //   console.log(price);
  //   return {
  //     duration,

  //   }
  // })
  return [];
}


export const getAllVehciles = (data) => {
  const allVehiclesType = getAllVehiclesType();
  return data.map(x => allVehiclesType.find((vehicleType) => vehicleType.id === x.vehicleTypeId));
}