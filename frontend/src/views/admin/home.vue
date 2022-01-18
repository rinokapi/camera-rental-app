<template>
  <v-container class="mt-3">
    <v-row>
      <template v-for="(d, i) in productData">
        <v-col cols="6" :key="i">
          <div class="text-center mt-10">
            <a class="title" @click="jumpTo(i)"> {{ d.name }}</a>
          </div>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
// import UserService from "../services/user.service";

export default {
  name: "Home",
  components: {},
  data: () => ({
    productData: [
      {
        name: "Data Camera",
        url: "data-camera",
      },
      {
        name: "Data Pelanggan",
        url: "data-pelanggan",
      },
    ],
  }),
  //   computed: {
  //     currentUser() {
  //       this.$store.state.auth.user
  //     // this.$store.dispatch("auth/logout"
  //     },
  //   },
  mounted() {
    if (this.$store.state.auth.user) {
      this.$router.push({
        path: "/",
      });
    } else if (!this.$store.state.adminAuth.admin) {
      this.$router.push({
        path: "/admin/login",
      });
    }
  },
  methods: {
    jumpTo(item) {
      const param = this.productData[item].url;
      this.$router.push({
        path: "/admin/" + param,
      });
    },
  },
};
</script>
<style>
.imageBox {
  background-color: #383a39;
  cursor: pointer;
  transition: transform 0.2s;
}
.imageBox:hover {
  transform: scale(1.1);
}
</style>
