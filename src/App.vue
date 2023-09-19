<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cabin&family=Poppins:wght@300&family=Raleway:wght@300&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: #2c3e50; */
}
</style>
