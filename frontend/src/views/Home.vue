<template>
  <v-container class="mt-3">
    <v-row>
      <v-col cols="12" class="text-center">
        <span class="display-1"> Produk </span>
      </v-col>
      <template v-for="(d, i) in productData">
        <v-col cols="4" :key="i">
          <div class="imageBox rounded-xl" @click="jumpTo(i)">
            <v-img :src="d.url" class="mt-1" />
          </div>
          <div class="text-center mt-3">
            <span class="title">
              {{ d.name }}
            </span>
          </div>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  components: {},
  data: () => ({
    productData: [],
  }),
  methods: {
    jumpTo(item) {
      const id = this.productData[item]._id;
      this.$router.push({
        path: "/product/" + id,
      });
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    // if (this.$store.state.adminAuth.admin) {
    //   this.$router.push({
    //     path: "/admin",
    //   });
    // } else if (!this.$store.state.auth.user) {
    //   this.$router.push({
    //     path: "/login",
    //   });
    // }
    UserService.getPublicContent().then(
      (response) => {
        this.productData = response.data;
        console.log(this.productData);
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
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
