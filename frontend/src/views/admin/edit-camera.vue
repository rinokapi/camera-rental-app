<template>
  <v-container class="mt-4">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <span class="display-1 font-weight-bold"> Edit Camera </span>
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
          @click="handleEdit"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from "../../models/item";
import UserService from "../../services/user.service";

export default {
  data() {
    return {
      item: new Item("", "", "", ""),
      passedData: "",
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

    const id = this.$route.params.id;
    UserService.findOne(id).then(
      (response) => {
        this.passedData = response.data;
        this.item.name = this.passedData.name;
        this.item.description = this.passedData.description;
        this.item.cost = this.passedData.cost;
        this.item.url = this.passedData.url;
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
    handleEdit() {
      this.item.url = this.item.url.name;
      let body = {
        name: this.item.name,
        description: this.item.description,
        cost: this.item.cost,
        url: this.item.url,
      };
      const id = this.$route.params.id;
      UserService.updateItem(id, body).then(
        (response) => {
          this.$router.push({
            path: "/admin/data-camera",
          });
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
.formBox {
  border: 1px solid black;
}
</style>
