<template>
    <v-container>
        <v-row v-if="allCocktails">
            <v-col
            v-for="c in allCocktails.filter(elem => {
                return (
              elem.strDrink.toLowerCase().includes(myFilter.toLowerCase()) || (
                  elem.strDrinkFR && elem.strDrinkFR.toLowerCase().includes(myFilter.toLowerCase())))
            })" 
            :key="c.idDrink"
            cols="12"
            sm="3"
            >
                <Cocktail :cocktail="c" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Cocktail from "./Cocktail"
export default {
    name: "CocktailList",
    props: {
        filteredBy: {
            type: String,
            default: "all"
        }
    },
    computed: {
        allCocktails () {
            if (this.$props.filteredBy === "all")
                return this.$store.getters.allCocktails
            else if (this.$props.filteredBy === "ingredients")
                return this.$store.getters.cocktailsFilteredByIngredients
            else
                return this.$store.getters.allCocktails
        },
        myFilter () {
            console.log("Bonjour, ", this.$store.getters.myFilter)
            return this.$store.getters.myFilter
        }
    },
    components: {
        Cocktail
    }
}
</script>

<style>

</style>