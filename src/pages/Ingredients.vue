<template>
    <div>
        <hero-ingredients></hero-ingredients>
        <choose-ingredients></choose-ingredients>
        <cocktail-list :filteredBy="'ingredients'"></cocktail-list>
    </div>
</template>

<script>
import axios from "axios"
import HeroIngredients from "../components/HeroIngredients"
import ChooseIngredients from '../components/ChooseIngredients.vue'
import CocktailList from '../components/CocktailList.vue'
export default {
  name: "Ingredients",
  components: { HeroIngredients, ChooseIngredients, CocktailList },
//   computed: {
//     ingredients () {
//       return this.$store.getters.ingredients
//     },
//   },
  mounted() {
    //   if (this.ingredients == []) {
          axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
          .then(response => {
              this.$store.dispatch("fulfillIngredients", response.data.drinks)
          })
    //   }
  }
}
</script>

<style>
</style>