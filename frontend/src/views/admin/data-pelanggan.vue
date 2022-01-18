<template>
  <v-container class="mt-3">
    <v-row>
      <v-col cols="12" class="text-center">
        <span class="display-1 font-weight-bold"> Data Pelanggan </span>
      </v-col>
      <v-col cols="12">
        <v-row justify="end" align="center"> </v-row>
      </v-col>
      <template v-for="(data, index) in productData">
        <v-col cols="12" :key="index">
          <div class="box rounded-lg py-2">
            <v-row justify="center" align="center">
              <!-- camera -->
              <v-col cols="2">
                <v-img src="@/assets/user.png" contain />
              </v-col>
              <!-- Keterangan -->
              <v-col cols="7">
                <p class="title">{{ data.name }}</p>
                <p class="subtitle-1">Nama Lengkap: {{ data.fullname }}</p>
                <p class="subtitle-1">Alamat : {{ data.address }}</p>
                <!-- <p class="subtitle-1">Id Pelanggan : {{ data._id }}</p> -->
                <!-- <p class="subtitle-1">HP : {{ data.phone }}</p> -->
                <p class="subtitle-1">Email : {{ data.email }}</p>
                <!-- <p class="subtitle-1">
                  Produk yang di sewa : {{ data.produk_yang_di_sewa }}
                </p>
                <p class="subtitle-1">Tanggal Sewa : {{ data.tanggal_sewa }}</p>
                <p class="subtitle-1">
                  Tanggal Kembali : {{ data.tanggal_kembali }}
                </p>
                <p class="subtitle-1">
                  Total Transaksi : {{ data.total_transaksi }}
                </p> -->
              </v-col>
              <!-- Button -->
              <v-col cols="1">
                <v-btn large block depressed dark @click="jumpTo(index)">
                  Info
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
import UserService from "../../services/user.service";

export default {
  name: "Home",
  components: {},
  data: () => ({
    productData: [],
  }),
  methods: {
    jumpTo(index) {
      const id = this.productData[index]._id;
      this.$router.push({
        path: "/admin/info-pelanggan/" + id,
      });
    },
    handleDelete(index) {
      const id = this.productData[index]._id;
      UserService.removeUser(id).then(
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
    UserService.getAllUsers().then(
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
/* .image {
  background-color: #383a39;
  cursor: pointer;
  transition: transform 0.2s;
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.imageBox:hover {
  transform: scale(1.1);
} */
.box {
  background-color: #c4c4c4;
}
</style>
