<template>
  <v-container class="mt-3">
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" class="text-center">
        <span class="display-1">Deskripsi Produk</span>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="passedData.url"
          class="mt-1"
          height="500px"
          width="500px"
        />
      </v-col>
      <v-col cols="4">
        <div>
          <p class="display-1">{{ passedData.text }}</p>
        </div>
        <div>
          <p class="subtitle-1">{{ passedData.description }}</p>
          <p class="subtitle-1 red--text">
            Harga Sewa : Rp. {{ passedData.cost }} (1 Hari)
          </p>
        </div>
        <div>
          <v-row>
            <v-col cols="4">
              <v-btn
                class="rounded-xl"
                depressed
                color="primary"
                @click="jumpTo()"
              >
                Sewa Sekarang
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  name: "Product",
  data: () => ({
    passedData: "",
    qty: 1,
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    UserService.findOne(id).then(
      (response) => {
        this.passedData = response.data;
        console.log(this.passedData);
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
    jumpTo() {
      this.$router.push({
        path: "/sewa",
        query: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style></style>
