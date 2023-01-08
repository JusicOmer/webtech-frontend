<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <br>
    <h1 class="h1">Willkommen zu deiner Stundenplan-App</h1>
    <br>
    <h2>Schau dir deine Fächer im Courses-Sektor an!</h2>
    <br>
    <img alt="plan" class="stundenplan" src="../assets/faecher.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
};

</script>
<style>
.stundenplan{
  width: 47%;
}
.h1{
  font-family: "Lucida Handwriting";
  font-weight: 3;
}
</style>
