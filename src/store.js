import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cocktails: [],
    filterDisplay: "",
    ingredients: [],
    filterIngredients: [],
    cockailsFilteredByIngredients: [],
  },
  mutations: {
    ADD_COCKTAIL(state, cocktail) {
      state.cocktails.push(cocktail);
    },
    FULFILL_COCKTAILS(state, cocktails) {
      state.cocktails = cocktails;
    },
    CHANGE_FILTER_DISPLAY(state, filter) {
      state.filterDisplay = filter;
    },
    FULFILL_INGREDIENTS(state, ingredients) {
      state.ingredients = ingredients;
    },
    ADD_FILTER_INGREDIENTS(state, ingredient) {
      state.filterIngredients.push(ingredient);
    },
    FULFILL_COCKTAILS_FILTERED_BY_INGREDIENTS(state, cocktails) {
      state.cockailsFilteredByIngredients = cocktails;
    },
    ADD_COCKTAILS_FILTERED_BY_INGREDIENTS(state, cocktails) {
      state.cockailsFilteredByIngredients.push(cocktails);
    },
  },
  actions: {
    addCocktail(context, cocktail) {
      context.commit("ADD_COCKTAIL", cocktail);
    },
    fulfillCocktails(context, cocktails) {
      context.commit("FULFILL_COCKTAILS", cocktails);
    },
    changeFilterDisplay(context, filter) {
      context.commit("CHANGE_FILTER_DISPLAY", filter);
    },
    fulfillIngredients(context, ingredients) {
      context.commit("FULFILL_INGREDIENTS", ingredients);
    },
    addFilterIngredients(context, ingredient) {
      context.commit("ADD_FILTER_INGREDIENTS", ingredient);
    },
    fulfillCocktailsFilteredByIngredients(context, cocktails) {
      context.commit("FULFILL_COCKTAILS_FILTERED_BY_INGREDIENTS", cocktails);
    },
    addCocktailsFilteredByIngredients(context, cocktails) {
      context.commit("ADD_COCKTAILS_FILTERED_BY_INGREDIENTS", cocktails);
    },
  },
  getters: {
    allCocktails: (state) => {
      return state.cocktails;
    },
    myFilter: (state) => {
      return state.filterDisplay;
    },
    ingredients: (state) => {
      return state.ingredients;
    },
    cocktailsFilteredByIngredients: (state) => {
      return state.cockailsFilteredByIngredients;
    },
  },
});

export default store
