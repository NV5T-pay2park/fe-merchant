import manageAPI from "data/manageAPI";
import { useSelector } from "react-redux";
import { uploadParkInformation } from "services/park.service";
import { createNewPark } from "services/park.service";
import { uploadImagesByParkId } from "services/park.service";
import { convertJSONToRows } from "services/price.service";
import { getAllVehciles } from "services/price.service";
import { convertRowsToJSON } from "services/price.service";

const { useState, useEffect } = require("react");

const useParkDetail = (parkId) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
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

  const [isLoading, setIsLoading] = useState(false);

  const setupParkDetail = (data) => {
    setPosition({lat: data.lat, lng: data.lng});
    setStreet(data.street);
    setWard(data.ward);
    setDistrict(data.district);
    setCity(data.city)
    setName(data.name);
    setOpenTime(data.timeOpen.slice(0, -3));
    setCloseTime(data.timeClose.slice(0, -3));
    setPhone(data.phoneNumber);
    setNumberSlot(data.numberSlot);
    setVehicles(getAllVehciles(data.priceTable));
    setRows(convertJSONToRows(data.priceTable));
  }

  useEffect(() => {
    if (parkId === -1) {
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        const {data} = await manageAPI.getParkDetailById(parkId);
        if (data.status === "OK") {
          setupParkDetail(data.data);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err)
      }
    })();
  }, [parkId]);

  const getJSONFormat = () => {
    //TODO: add merchant id
    return ({
      merchantId: currentUser.merchantId,
      parkingLotName: name,
      street, ward, district, city,
      ...position,
      timeOpen: openTime + ':00',
      timeClose: closeTime + ':00',
      numberSlot: parseInt(numberSlot), 
      phoneNumber: phone,
      priceTable: convertRowsToJSON(rows, vehicles),
    })
  }

  const submitForm = () => {
    if (parkId === -1) {
      createNewPark(getJSONFormat())
    }
    // console.log(JSON.stringify(getJSONFormat()));
    // uploadParkInformation(parkId, )
    // uploadImagesByParkId(parkId, images);
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