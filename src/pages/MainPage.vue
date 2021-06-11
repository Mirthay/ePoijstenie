<template>
  <div>
    <base-card>
      <base-button @click="modalWhy = true"> Modal Proč</base-button>
      <base-dialog :show="true" v-if="modalWhy">
        <why-mail :modal="true"></why-mail
      ></base-dialog>
      <base-button @click="modalAbout = true"> Modal O nás</base-button>
      <base-dialog :show="true" v-if="modalAbout">
        <about-us :modal="true"></about-us
      ></base-dialog>
    </base-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import AboutUs from './AboutUs.vue';
import WhyMail from './WhyMail.vue';
export default {
  components: { AboutUs, WhyMail },
  setup() {
    const modalAbout = ref(false);
    const modalWhy = ref(false);
    const close = ref(true);
    return { modalAbout, modalWhy, close };
  }
};
</script>

<style>
button,
a {
  padding: 0.75rem 6.1rem;
}
</style>
