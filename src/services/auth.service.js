// TODO: current code using localStorage may be XXS attack
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-3-storing-a-user-token-with-sessionstorage-and-localstorage

import authAPI from "data/authAPI";


const mockAccount = {
  userId: 1,
  username: 'tienthanh214',
  roles: ["add", "edit", "delete", "export"],
  status: "success",
  expried: "2022/08/30",
  tokenId: "ahihidongok",
  merchantId: 1
}


const authentication = () => {
  return true;
}

const login = (phone, username, password) => {
  return authAPI.loginMerchant(phone, username, password).then((result) => {
    if (result.data.status === "OK") {
      const userData = {
        ...result.data.data,
        username: result.data.data.userName,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } else {
      return result.data;
    }
  });
}

const logout = () => {
  localStorage.removeItem("user"); 
}

const authService = { login, logout };

export default authService;