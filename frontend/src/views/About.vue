<template>
  <v-container class="mt-3">
    <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
        <span class="display-1">
          About Me
        </span>
      </v-col>
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
                  <div>
                    <p class="subtitle-1"> <b>
                      Perusahaan kami bergerak di bidang penyewaan kamera 
                      berkualitas dan berkelas, dijamin barang kami adalah yang terbaik
                    </b>
                    </p>
                    <p class="subtitle-1 red--text"><b>Harga pas barang berkualitas </b></p>
                    </div>
                </v-col>
                <v-col cols="10" class="mb-12">
                  <v-btn block depressed class="rounded-xl" color="primary">
                    Whatsapp
                  </v-btn>
                  <v-row justify="center" align="center" class="mt-1">
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',

  components: {
  },
}
</script>
<style>
.loginBox{
  border: 1px solid black;
}
</style>