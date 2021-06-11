<template>
  <div>
    <button v-if="!link" :class="mode">
      <slot> </slot>
    </button>
    <router-link v-else :to="to" :class="mode">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  font: inherit;
  border: 2px solid white;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
  background-color: rgba(44, 147, 255);
  color: rgba(255, 255, 255);
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  width: 100%;
}

a:hover,
a:active,
button:hover,
button:active {
  opacity: 0.8;
  border-color: lightblue;
}

.flat {
  background-color: transparent;
  color: lightblue;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: lightblue;
  color: lightblue;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: lightblue;
}
</style>
