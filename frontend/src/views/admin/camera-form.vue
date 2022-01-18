<template>
  <v-container class="mt-4">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <span class="display-1 font-weight-bold"> Tambah Camera </span>
      </v-col>
      <v-col cols="5" class="formBox rounded-lg text-center pa-4">
        <v-text-field
          label="Nama Camera"
          dense
          outlined
          hide-details
          v-model="item.name"
        />
        <v-textarea
          label="Spesifikasi"
          dense
          rows="3"
          outlined
          hide-details
          class="mt-4"
          v-model="item.description"
        />
        <v-text-field
          label="Harga Sewa"
          dense
          outlined
          hide-details
          class="mt-4"
          v-model="item.cost"
        />
        <v-file-input
          label="Gambar"
          dense
          outlined
          hide-details
          class="mt-4"
          v-model="item.url"
        />
        <v-btn
          color="primary"
          depressed
          class="mt-4 rounded-xl"
          block
          @click="handleCreate"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from "../../models/item";

export default {
  name: "Create",
  data() {
    return {
      item: new Item("", "", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
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
  },
  methods: {
    handleCreate() {
      console.log("gud lak!");
      this.item.url =
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png";
      this.message = "";
      this.submitted = true;
      this.$store.dispatch("adminAuth/addItem", this.item).then(
        (response) => {
          this.$router.push("/admin/data-camera");
          this.successful = true;
          console.log(response);
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
.formBox {
  border: 1px solid black;
}
</style>
