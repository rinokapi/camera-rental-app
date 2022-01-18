<template>
  <v-container class="mt-3">
    <v-row justify="center" align="center">
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
                  <v-text-field
                    outlined
                    dense
                    hide-details
                    label="Username"
                    class="rounded-xl"
                  />
                </v-col>
                <v-col cols="10">
                  <v-text-field
                    outlined
                    dense
                    hide-details
                    label="Password"
                    type="password"
                    class="rounded-xl"
                  />
                </v-col>
                <v-col cols="10" class="mb-12">
                  <v-btn block depressed class="rounded-xl" color="primary">
                    Logout
                  </v-btn>
                  <v-row justify="center" align="center" class="mt-1">
                    <v-col cols="6">
                      <v-btn text small class="rounded-xl">
                        Lupa password ?
                      </v-btn>
                    </v-col>
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