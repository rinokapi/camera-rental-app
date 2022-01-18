<template>
  <v-app>
    <v-app-bar app color="white" class="px-10" elevate-on-scroll>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="2">
            <v-img
              src="@/assets/logo.png"
              width="175px"
              height="175px"
              contain
              class="mt-1"
            />
          </v-col>
          <!-- <v-col cols="3">
            <v-text-field
              hide-details
              dense
              outlined
              label="Search"
              append-icon="mdi-magnify"
              class="rounded-xl"
            />
          </v-col> -->
          <v-col cols="10">
            <v-btn
              v-if="currentAdmin && !currentUser"
              text
              height="50px"
              @click="$router.push('/admin')"
              >Home</v-btn
            >
            <v-btn
              v-else-if="!currentAdmin && currentUser"
              text
              height="50px"
              @click="$router.push('/')"
              >Home</v-btn
            >
            <v-btn
              v-if="!currentAdmin && !currentUser"
              text
              height="50px"
              @click="$router.push('/login')"
              >Login</v-btn
            >
            <v-btn text height="50px" @click="$router.push('/about')"
              >Tentang Kami</v-btn
            >
            <v-btn v-if="currentUser" text height="50px">{{
              currentUser.username
            }}</v-btn>
            <v-btn v-if="currentUser" text height="50px" @click="logOutUser"
              >Logout</v-btn
            >
            <v-btn v-if="currentAdmin" text height="50px">{{
              currentAdmin.username
            }}</v-btn>
            <v-btn v-if="currentAdmin" text height="50px" @click="logOutAdmin"
              >Logout</v-btn
            >
          </v-col>
        </v-row>
        <!-- <div class="d-flex align-start">
        </div>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer> -->
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    currentAdmin() {
      return this.$store.state.adminAuth.admin;
    },
  },
  methods: {
    logOutUser() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    logOutAdmin() {
      this.$store.dispatch("adminAuth/logout");
      this.$router.push("/admin/login");
    },
  },
};
</script>
