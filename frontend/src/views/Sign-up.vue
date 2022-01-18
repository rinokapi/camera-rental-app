<template>
  <v-container class="mt-3">
    <v-row justify="center" align="center">
      <v-col cols="5">
        <div class="py-5 rounded-lg loginBox">
          <div class="d-flex align-center">
            <v-img
              src="@/assets/logo.png"
              width="100px"
              height="100px"
              contain
            />
          </div>
          <v-container>
            <v-row justify="center" align="center">
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  hide-details
                  label="Nama Lengkap"
                  class="rounded-lg"
                  v-model="user.fullname"
                />
              </v-col>
              <v-col cols="10">
                <v-textarea
                  outlined
                  dense
                  rows="3"
                  hide-details
                  label="Alamat"
                  class="rounded-lg"
                  v-model="user.address"
                />
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  hide-details
                  label="No. Telepon"
                  class="rounded-lg"
                  v-model="user.phone"
                />
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  hide-details
                  label="Email"
                  class="rounded-lg"
                  v-model="user.email"
                />
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  hide-details
                  label="Username"
                  class="rounded-lg"
                  v-model="user.username"
                />
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  hide-details
                  label="Password"
                  type="password"
                  class="rounded-lg"
                  v-model="user.password"
                />
              </v-col>
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
              <v-col cols="10" class="">
                <v-btn
                  block
                  depressed
                  class="rounded-lg"
                  color="primary"
                  type="submit"
                  @click="handleRegister"
                >
                  Buat akun
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from "../models/user";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", "", "", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister() {
      console.log("gud lak!");
      this.message = "";
      this.submitted = true;
      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          this.$router.push("/login");
          this.message = data.message;
          this.successful = true;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
  },
};
</script>

<style>
.loginBox {
  border: 1px solid black;
}
</style>
