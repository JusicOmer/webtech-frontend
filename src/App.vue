<template>
  <navbar></navbar>
  <router-view/>
</template>

<script>
// eslint-disable-next-line import/extensions
import Navbar from '@/components/Navbar';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
