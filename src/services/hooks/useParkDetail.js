import { uploadImagesByParkId } from "services/park.service";
import { convertRowsToJSON } from "services/price.service";

const { useState, useEffect } = require("react");

const useParkDetail = (parkId) => {
  const [vehicles, setVehicles] = useState([]);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([])
  const [position, setPosition] = useState();
  const [street, setStreet] = useState("");
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("TP. Ho Chi Minh");
  const [name, setName] = useState("");
  const [openTime, setOpenTime] = useState("08:00");
  const [closeTime, setCloseTime] = useState("22:00");
  const [phone, setPhone] = useState("");
  const [numberSlot, setNumberSlot] = useState("");
  const [rows, setRows] = useState([
    { id: 1, duration: "", description: "Đồng giá" },
  ]);

  useEffect(() => {
    if (parkId === -1) {
      return;
    }
    // TODO: load info
  }, [parkId]);


  const submitForm = () => {
    console.log(position)
    console.log(street)
    console.log(phone);
    console.log(openTime + " " + closeTime);
    console.log(rows);
    console.log(images);
    console.log(convertRowsToJSON(rows, vehicles))
    uploadImagesByParkId(parkId, images);
  }

  return {
    vehicles,
    setVehicles,
    images,
    setImages,
    previewImages,
    setPreviewImages,
    position,
    setPosition,
    street,
    setStreet,
    ward,
    setWard,
    district,
    setDistrict,
    city,
    setCity,
    name,
    setName,
    openTime,
    setOpenTime,
    closeTime,
    setCloseTime,
    phone,
    setPhone,
    numberSlot,
    setNumberSlot,
    rows,
    setRows,
    submitForm
  };
};

export default useParkDetail;