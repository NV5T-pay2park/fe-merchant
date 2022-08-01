import Axios from "./Axios";


const loginMerchant = (phone, userName, password) => {
  return Axios.post(`loginmerchant`, {
    phone, userName, password
  })
}

const authAPI = {
  loginMerchant
};

export default authAPI;