<template>
  <div id="app" class="container">
    <h5 class='display-2'>ZoloStays Menu Update Table</h5>
    <!-- <p>
      <router-link to="/wastage">Wastage Table</router-link> <br>
      <router-link to="/menu">Food-Menu Table</router-link><br> -->
    <!-- </p> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

.container{
  width: 50px;
  margin: 50px;

  

}
.display-2 {
  text-align: center;
  color: rgb(40, 40, 131);
  font-size: 2.5rem;
  font-weight: bold;
  /* width: 50px; */

}
</style>