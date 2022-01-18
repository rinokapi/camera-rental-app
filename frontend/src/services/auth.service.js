import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  // user login service
  login(user) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  //user logout service
  logout() {
    localStorage.removeItem("user");
  }

  //user register service
  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
      fullname: user.fullname,
      phone: user.phone,
      address: user.address,
    });
  }

  // admin login service
  adminLogin(admin) {
    return axios
      .post(API_URL + "admin/signin", {
        username: admin.username,
        password: admin.password,
      })
      .then((response) => {
        if (response) {
          localStorage.setItem("admin", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  //admin logout service
  adminLogout() {
    localStorage.removeItem("admin");
  }

  //admin register service
  adminRegister(admin) {
    return axios.post(API_URL + "admin/signup", {
      username: admin.username,
      password: admin.password,
    });
  }
}

export default new AuthService();
