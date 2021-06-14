<template>
  <div class="container">
    <img :src="src" width="150" />
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
  width: 50%;
  text-align: left;
}
h3,
p {
  padding-left: 5px;
}
p {
  margin-top: -15px;
}
</style>
