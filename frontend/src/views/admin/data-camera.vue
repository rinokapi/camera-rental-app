<template>
  <v-container class="mt-3">
    <v-row>
      <v-col cols="12" class="text-center">
        <span class="display-1 font-weight-bold"> Data Camera </span>
      </v-col>
      <v-col cols="12">
        <v-row justify="end" align="center">
          <v-col cols="1">
            <v-btn
              depressed
              outlined
              @click="$router.push('/admin/camera-form')"
            >
              <v-icon> mdi-plus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <template v-for="(data, index) in productData">
        <v-col cols="12" :key="index">
          <div class="box rounded-lg py-2">
            <v-row justify="center" align="center">
              <!-- camera -->
              <v-col cols="2">
                <v-img :src="data.url" contain />
              </v-col>
              <!-- Keterangan -->
              <v-col cols="7">
                <p class="title">{{ data.name }}</p>
                <p class="subtitle-1">Harga Sewa : {{ data.cost }}</p>
              </v-col>
              <!-- Button -->
              <v-col cols="1">
                <v-btn large block depressed dark @click="jumpTo(index)">
                  Edit
                </v-btn>
              </v-col>
              <v-col cols="1">
                <v-btn large block depressed dark @click="handleDelete(index)">
                  Hapus
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  name: "Home",
  components: {},
  data: () => ({
    productData: [],
  }),
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
  methods: {
    jumpTo(index) {
      const id = this.productData[index]._id;
      this.$router.push({
        path: "/admin/edit-camera/" + id,
      });
    },
    handleDelete(index) {
      const id = this.productData[index]._id;
      UserService.removeItem(id).then(
        (response) => {
          console.log(response);
          this.$router.go();
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
  },
};
</script>

<style>
.box {
  background-color: #c4c4c4;
}
</style>
