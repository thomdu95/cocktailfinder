<template>
  <v-container>
    <v-row class="text-center d-flex justify-center">
        <v-col cols="4" class="justify-center">
            <h1 class="white--text">Bienvenue sur Cocktail Finder</h1>
            <v-text-field
              label="Solo"
              placeholder="Recherchez un cocktail"
              solo
              @input="makeResearch"
            ></v-text-field>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
    name: "Hero",
    methods: {
        makeResearch(e) {
            this.$store.dispatch("changeFilterDisplay", e)
            if (e.length <= 1) {
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`)
                .then(response => {
                    console.log(response.data.drinks)
                    response.data.drinks.forEach(drink => {
                        drink.ingre = []
                        for (let i = 0; i < 15; i++) {
                            if (drink[`strIngredient${i}`] != null) {
                                drink.ingre.push(drink[`strIngredient${i}`])
                            }

                        }
                    })
                    this.$store.dispatch("fulfillCocktails", response.data.drinks)
    
                })
                .catch(error => {
                    console.error(error)
                })
            }
            if (e.length == 0) {
                this.$store.dispatch("fulfillCocktails", [])
            }
        }
    }
}
</script>

<style>

</style>