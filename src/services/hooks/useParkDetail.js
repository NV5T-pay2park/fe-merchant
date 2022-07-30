import { convertRowsToJSON } from "services/price.service";

const { useState, useEffect } = require("react");

const useParkDetail = (parkId) => {
  const [vehicles, setVehicles] = useState([]);
  const [images, setImages] = useState([
    "https://thumbs.dreamstime.com/b/parking-lot-856838.jpg",
    "https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI=",
    "https://www.ledgerinsights.com/wp-content/uploads/2020/05/parking-lot-cars.jpg",
    "https://images.unsplash.com/photo-1589018057745-8c699b3f361c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1wdHklMjBwYXJraW5nJTIwbG90fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ]);
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
  }

  return {
    vehicles,
    setVehicles,
    images,
    setImages,
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