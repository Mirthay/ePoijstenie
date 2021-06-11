<template>
  <div class="container">
    <img :src="src" />
    <h3>{{ name }}</h3>
    <p>{{ ico }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'ico', 'src']
};
</script>

<style scoped>
.container {
  width: 40%;
  margin: 10px;
  padding: 10px;
}
h3,
p {
  padding-left: 5px;
}
p {
  margin-top: -15px;
}
</style>
