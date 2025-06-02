<template>
 <div class="sidebar">
  <h2>Barra Literal</h2>
  <ul>
  <li><router-link to="/contador">Contador</router-link></li>
  <li><router-link to="/tarea">ListaDeTarea</router-link></li>
  </ul>
 </div>
</template>

<script setup>

</script>   

<style>
 .sidebar {
   width: 200px;
   background-color: aqua;
   padding: 20px;
 }
</style>