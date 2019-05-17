<template>
  <div id="app" class="container">
    <h1 class='display-4'>ZoloStays Food Update Table</h1>
    <p>
      <router-link to="/wastage">Wastage Table</router-link> <br>
      <router-link to="/products">Food-Menu Table</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
</style>