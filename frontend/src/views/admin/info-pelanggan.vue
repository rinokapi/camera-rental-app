<template>
  <v-container class="mt-3">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <span class="display-1 font-weight-bold">Info Pelanggan</span>
      </v-col>
      <v-col cols="4">
        <v-img src="@/assets/user.png" contain height="350px" width="350px" />
      </v-col>
      <v-col cols="4">
        <div class="">
          <p class="title">{{ productData.name }}</p>
          <p class="subtitle-1">Id Pelanggan: {{ productData._id }}</p>
          <p class="subtitle-1">Nama Lengkap: {{ productData.fullname }}</p>
          <p class="subtitle-1">Alamat : {{ productData.address }}</p>
          <p class="subtitle-1">HP : {{ productData.phone }}</p>
          <p class="subtitle-1">Email : {{ productData.email }}</p>
          <!-- <p class="subtitle-1">
            Produk yang di sewa : {{ productData.produk_yang_di_sewa }}
          </p>
          <p class="subtitle-1">
            Tanggal Sewa : {{ productData.tanggal_sewa }}
          </p>
          <p class="subtitle-1">
            Tanggal Kembali : {{ productData.tanggal_kembali }}
          </p>
          <p class="subtitle-1">
            Total Transaksi : {{ productData.total_transaksi }}
          </p> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  data() {
    return {
      productData: "",
    };
  },
  mounted() {
    const id = this.$route.params.id;
    UserService.getUser(id).then(
      (response) => {
        this.productData = response.data;
        console.log(this.productData.username);
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

<style></style>
