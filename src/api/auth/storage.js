import jwt_decode from "jwt-decode";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        return null;
      }
      return decoded;
    } catch (error) {
      console.log("Invalid token:", error);
      localStorage.removeItem("token");
      return null;
    }
  }
  return null;
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export { storeToken, checkToken, removeToken };
