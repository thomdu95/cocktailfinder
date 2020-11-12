<template>
  <v-container>
    <v-row class="text-center d-flex justify-center">
      <v-col cols="4" class="justify-center">
        <h1 class="white--text">Recherchez votre Cocktail par ingrédients</h1>
        <!-- <v-text-field
          label="Solo"
          placeholder="Tapez un ingredient"
          solo
        ></v-text-field> -->
        <!-- <v-list dense three-line>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in ingredients" :key="i">

              <v-list-item-content>
                <v-list-item-title
                  v-text="item.strIngredient1"
                ></v-list-item-title>
                              <v-divider
               
              ></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios"
export default {
  name: "HeroIngredients",
  computed: {
    ingredients() {
      return this.$store.getters.ingredients;
    },
  },
};
</script>

<style>
</style>