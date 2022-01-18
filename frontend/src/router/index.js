import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: function () {
      return import(/* webpackChunkName: "About" */ "../views/About.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import(/* webpackChunkName: "Login" */ "../views/Login.vue");
    },
  },
  {
    path: "/product/:id",
    name: "Product",
    component: function () {
      return import(
        /* webpackChunkName: "Product" */ "../views/product/id.vue"
      );
    },
  },
  {
    path: "/sewa",
    name: "Sewa",
    component: function () {
      return import(/* webpackChunkName: "sewa" */ "../views/Sewa.vue");
    },
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: function () {
      return import(/* webpackChunkName: "SignUp" */ "../views/Sign-up.vue");
    },
  },
  {
    path: "/approved",
    name: "Approved",
    component: function () {
      return import(/* webpackChunkName: "Approved" */ "../views/approved.vue");
    },
  },
  {
    path: "/admin/data-camera/",
    name: "Camera",
    component: function () {
      return import(
        /* webpackChunkName: "Camera" */ "../views/admin/data-camera.vue"
      );
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/data-pelanggan",
    name: "Pelanggan",
    component: function () {
      return import(
        /* webpackChunkName: "pelanggan" */ "../views/admin/data-pelanggan.vue"
      );
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/camera-form",
    name: "FormCamera",
    component: function () {
      return import(
        /* webpackChunkName: "Form edit dan tambah" */ "../views/admin/camera-form.vue"
      );
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/info-pelanggan/:id",
    name: "InfoPelanggan",
    component: function () {
      return import(
        /* webpackChunkName: "From Info" */ "../views/admin/info-pelanggan.vue"
      );
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/edit-camera/:id",
    name: "edit",
    component: function () {
      return import(
        /* webpackChunkName: "edit" */ "../views/admin/edit-camera.vue"
      );
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin",
    name: "home",
    component: function () {
      return import(/* webpackChunkName: "login" */ "../views/admin/home.vue");
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/login",
    name: "login",
    component: function () {
      return import(/* webpackChunkName: "login" */ "../views/admin/login.vue");
    },
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/logout",
    name: "logout",
    component: function () {
      return import(
        /* webpackChunkName: "logout" */ "../views/admin/logout.vue"
      );
    },
    meta: {
      admin: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
