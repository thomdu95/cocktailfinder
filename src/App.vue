<template>
  <v-app class="myApp">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn
          text
        >
          <span class="mr-2">Par Nom</span>
          <v-icon>mdi-lead-pencil</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/ingredients">
        <v-btn
          text
        >
          <span class="mr-2">Par Ingrédients</span>
          <v-icon>mdi-food-fork-drink</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
.v-application--wrap {
  background-image: url("./assets/bghight.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>