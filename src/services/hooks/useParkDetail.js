import manageAPI from "data/manageAPI";
import parkAPI from "data/parkAPI";
import { useDispatch, useSelector } from "react-redux";
import { uploadParkInformation } from "services/park.service";
import { createNewPark } from "services/park.service";
import { uploadImagesByParkId } from "services/park.service";
import { convertJSONToRows } from "services/price.service";
import { getAllVehciles } from "services/price.service";
import { convertRowsToJSON } from "services/price.service";
import { setAlertMessage } from "services/redux/actions/alertActions";

const { useState, useEffect } = require("react");

const useParkDetail = (parkId) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [vehicles, setVehicles] = useState([]);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([])
  const [position, setPosition] = useState();
  const [street, setStreet] = useState("");
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("TP. Hồ Chí Minh");
  const [name, setName] = useState("");
  const [openTime, setOpenTime] = useState("08:00");
  const [closeTime, setCloseTime] = useState("22:00");
  const [phone, setPhone] = useState("");
  const [numberSlot, setNumberSlot] = useState(0);
  const [rows, setRows] = useState([
    { id: 1, duration: "", description: "Đồng giá" },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
        }
        const {data: imageData} = await parkAPI.getAllImagesByParkId(parkId);
        if (imageData.status === "OK") {
          setPreviewImages(imageData.data.map(image => image.url));
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
    const data = {
      merchantId: currentUser.merchantId,
      parkingLotName: name,
      street, ward, district, city,
      ...position,
      timeOpen: openTime + ':00',
      timeClose: closeTime + ':00',
      numberSlot: parseInt(numberSlot), 
      phoneNumber: phone,
      priceTable: convertRowsToJSON(rows, vehicles),
    };
    if (parkId !== -1) {
      data['parkingLotId'] = parkId;
    }
    return data;
  }

  const checkInputValid = () => {
    if (!name || name.length === 0) {
      dispatch(setAlertMessage('Vui lòng nhập Tên nhà xe', 'warning'))
      return false;
    }
    if (!street || ward.strêt === 0) {
      dispatch(setAlertMessage('Vui lòng nhập Đường', 'warning'))
      return false;
    }
    if (!ward || ward.length === 0) {
      dispatch(setAlertMessage('Vui lòng nhập Phường', 'warning'))
      return false;
    }
    if (!district || district.length === 0) {
      dispatch(setAlertMessage('Vui lòng nhập Quận', 'warning'))
      return false;
    }
    if (!city || district.length === 0) {
      setCity('TP. Hồ Chí Minh');
    }
    if (!position) {
      dispatch(setAlertMessage('Vui lòng chọn tọa độ trên bản đồ', 'warning'))
      return false;
    }
    if (!openTime || openTime.length === 0) {
      dispatch(setAlertMessage('Vui lòng nhập giờ mở cửa', 'warning'))
      return false;
    }
    if (!closeTime || closeTime.length === 0) {
      dispatch(setAlertMessage('Vui lòng nhập giờ đóng cửa', 'warning'))
      return false;
    }
    if (!phone || phone.length !== 10) {
      dispatch(setAlertMessage('Số điện thoại không chính xác', 'warning'))
      return false;
    }
    if (numberSlot <= 0) {
      dispatch(setAlertMessage('Vui lòng nhập số chỗ giữ xe', 'warning'))
      return false;
    }
    return true;
  }

  const submitForm = () => {
    if (!checkInputValid()) {
      return;
    }
    if (parkId === -1) {
      createNewPark(getJSONFormat(), dispatch);
      uploadImagesByParkId(parkId, images);
    } else {

      uploadImagesByParkId(parkId, images);
    }
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