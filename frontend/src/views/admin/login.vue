<template>
  <v-container class="mt-3">
    <v-row justify="center" align="center">
      <v-col cols="5">
        <v-img
          src="@/assets/camera-operator 1.png"
          height="600px"
          width="600px"
          contain
        />
      </v-col>
      <v-col cols="5" offset="2">
        <div class="pa-10 rounded-lg loginBox">
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
                  label="Username"
                  class="rounded-xl"
                  v-model="admin.username"
                  type="text"
                />
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  dense
                  hide-details
                  label="Password"
                  type="password"
                  class="rounded-xl"
                  v-model="admin.password"
                />
              </v-col>
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
              <v-col cols="10" class="mb-12">
                <v-btn
                  block
                  depressed
                  class="rounded-xl"
                  color="primary"
                  type="submit"
                  @click="handleLogin"
                >
                  Login
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

//
<script>
import Admin from "@/models/admin";

export default {
  name: "Login",
  data() {
    return {
      admin: new Admin("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.adminAuth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      console.log("loggedin!");
      this.$router.push("/admin");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if (this.admin.username && this.admin.password) {
        this.$store.dispatch("adminAuth/login", this.admin).then(
          () => {
            this.$router.push("/admin");
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
};
</script>

<style>
.loginBox {
  border: 1px solid black;
}
</style>
