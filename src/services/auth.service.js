// TODO: current code using localStorage may be XXS attack
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-3-storing-a-user-token-with-sessionstorage-and-localstorage


const mockAccount = {
  userId: '2142001',
  username: 'tienthanh214',
  roles: ["add", "edit", "delete", "export"],
  status: "success",
  expried: "2022/08/30",
  tokenId: "ahihidongok",
}

const authentication = () => {
  return true;
}

const login = (phone, username, password) => {
  return new Promise(function(resolve, reject) {
    console.log(phone, username, password)
    if (username === mockAccount.username) {
      resolve(mockAccount)
    } else {
      reject()
    }
  }).then((response) => {
    localStorage.setItem("user", JSON.stringify(response))
    return response
  })
}

const logout = () => {
  localStorage.removeItem("user"); 
}

const authService = { login, logout };

export default authService;