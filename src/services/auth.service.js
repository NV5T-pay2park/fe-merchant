const mockAccount = {
  userId: '2142001',
  username: 'tienthanh214',
  roles: ["add", "edit", "delete", "export"],
  status: "success",
  expried: "2022/08/30",
  tokenId: "ahihidongok",
}

const login = (phone, username, password) => {
  console.log(phone, username, password)
  if (username === mockAccount.username) {
    localStorage.setItem("user", JSON.stringify(mockAccount))
    return mockAccount;
  } else {
    return null;
  }
}

const logout = () => {
  localStorage.removeItem("user"); 
}

const authService = { login, logout };

export default authService;