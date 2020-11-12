<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="cocktail.strDrinkThumb || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
    >
      <v-card-title> {{ cocktail.strDrinkFR || cocktail.strDrink }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ cocktail.strAlcoholic == "Non alcoholic" ? "Cocktail Sans Alcool" : "Cocktail avec Alcool"}} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><v-chip>
          <v-icon left >mdi-glass-wine</v-icon>
          {{ cocktail.strCategory }}
          </v-chip></div>

      <div><span v-for="i in cocktail.ingre" :key="i">{{ i }}, </span></div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Share </v-btn>

      <v-btn v-if="cocktail.strVideo" color="orange" :href="cocktail.strVideo" text> Vidéo </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'Cocktail',
    props: {
        cocktail: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
</style>