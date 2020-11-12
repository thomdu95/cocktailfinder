<template>
  <div>
        <Hero/>
        <CocktailList/>
  </div>
</template>

<script>
import Hero from '../components/Hero';
import CocktailList from '../components/CocktailList'

export default {
  name: "Home",
  components: {
    Hero,
    CocktailList
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch("changeFilterDisplay", "")
    this.$store.dispatch("fulfillCocktails", [])

    next()
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }
}
</script>

<style>

</style>