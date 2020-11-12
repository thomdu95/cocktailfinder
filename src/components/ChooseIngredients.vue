<template>
  <v-card
    class="mx-auto"
    max-width="500">
    <v-container class="py-0">
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          class="shrink"
        >
          <v-chip
            :disabled="loading"
            close
            @click:close="selected.splice(i, 1)"
          >
            <v-icon
              left
              v-text="selection.icon"
            ></v-icon>
            {{ selection.strIngredient1 }}
          </v-chip>
        </v-col>

        <v-col
          v-if="!allSelected"
          cols="12"
        >
          <v-text-field
            ref="search"
            v-model="search"
            full-width
            hide-details
            label="Search"
            single-line
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-divider v-if="!allSelected"></v-divider>

    <v-list>
      <template v-for="(item, index) in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.strIngredient1"
          :disabled="loading"
          @click="selected.push(item) && categories.splice(index, 1)"
        >
          <v-list-item-avatar>
            <v-icon
              :disabled="loading"
            >mdi-checkbox-marked-circle</v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.strIngredient1"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>

    <v-pagination
      v-model="page"
      circle
      :length="parseInt(pageToShow) || 0"
    ></v-pagination>

    <v-divider></v-divider>
  </v-card>
</template>


<script>
import axios from "axios"
  export default {
    data: () => ({
      loading: false,
      search: '',
      selected: [],
      page: 1,
      toShow: 5,
      newresults: 0
    }),

    computed: {
      allSelected () {
        return this.selected.length === this.ingredients.length
      },
      categories () {
        const search = this.search.toLowerCase()
        const start = this.page * this.toShow
        const stop = (this.page * this.toShow) + this.toShow
        if (!search) return this.ingredients.slice(start, stop)

        return this.ingredients.filter(item => {
          const text = item.strIngredient1.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
      ingredients() {
        return this.$store.getters.ingredients;
      },
      pageToShow() {
        if (!this.search)
          return parseInt(this.ingredients.length / this.toShow).toFixed(0)
        else
          return parseInt(this.categories.length / this.toShow).toFixed(0)
      }
    },

    watch: {
      selected () {
        this.search = ''
        this.$store.dispatch("addFilterIngredients", this.selected[this.selected.length])
        if (this.selected.length == 0) {
            this.$store.dispatch("fulfillCocktailsFilteredByIngredients", [])
        }

        if (this.selected.length == 1) {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.selected[0].strIngredient1}`)
            .then(response => {
                console.log(response.data.drinks)
                response.data.drinks.forEach(elem => {
                    if (!this.$store.getters.cocktailsFilteredByIngredients.some(c => elem.idDrink == c.idDrink)) {
                        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${elem.idDrink}`)
                        .then(data => {
                            const c = data.data.drinks[0]
                            c.ingre = []
                            for (let i = 0; i < 15; i++) {
                                if (c[`strIngredient${i}`] != null) {
                                    c.ingre.push(c[`strIngredient${i}`])
                                }
    
                            }
                            this.$store.dispatch("addCocktailsFilteredByIngredients", c)
                            console.log(c)
                        })
                        .catch(err => {
                            console.error(err)
                        })
                    }

                })
            })
            .catch(error => {
                console.error("List Per Ingredients ERROR => ", error)
            })
        } 
        else if (this.selected.length > 1) {
            console.log(this.selected, this.$store.getters.cocktailsFilteredByIngredients[0].ingre)
            console.log("TESSSSSSSST => ", this.selected.every((val) => this.$store.getters.cocktailsFilteredByIngredients[0].ingre.includes(val.strIngredient1)))
            console.log(this.$store.getters.cocktailsFilteredByIngredients.filter(elem => {
                return this.selected.length < elem.ingre.length && this.selected.every((val) => elem.ingre.includes(val.strIngredient1))

            }));
            this.$store.dispatch("fulfillCocktailsFilteredByIngredients", this.$store.getters.cocktailsFilteredByIngredients.filter(elem => {
                return this.selected.length < elem.ingre.length && this.selected.every((val) => elem.ingre.includes(val.strIngredient1))

            }))
        }
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },
  }
</script>