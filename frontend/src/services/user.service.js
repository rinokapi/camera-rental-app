import axios from "axios";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  // get all items
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  // add to order list
  orderItem(order) {
    return axios.post(API_URL + "order", {
      name: order.name,
      address: order.address,
      phone: order.phone,
      photo: order.photo,
      date: order.date,
      time: order.time,
      item: order.item,
      cost: order.cost,
    });
  }

  // find item by id
  findOne(id) {
    return axios.get(API_URL + `all/${id}`);
  }

  // add item
  addItem(item) {
    return axios.post(API_URL + "admin/add", {
      name: item.name,
      description: item.description,
      cost: item.cost,
      url: item.url,
    });
  }

  // get last from order list
  lastOrder() {
    return axios.get(API_URL + "print");
  }

  //remove item
  removeItem(id) {
    return axios.delete(API_URL + `admin/delete/${id}`);
  }

  //update item
  updateItem(id, body) {
    return axios.put(API_URL + `admin/update/${id}`, body);
  }

  // export data
  exportData() {
    return axios.get(API_URL + "admin/export");
  }

  //get all users
  getAllUsers() {
    return axios.get(API_URL + "admin/users");
  }

  // get user by id
  getUser(name) {
    return axios.get(API_URL + `admin/users/${name}`);
  }

  // remove item
  removeUser(id) {
    return axios.delete(API_URL + `admin/user/delete/${id}`);
  }
}

export default new UserService();
