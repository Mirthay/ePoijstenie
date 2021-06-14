<template>
  <div>
    <base-card>
      <base-button @click="openModalWhy">
        Modal Proč?
      </base-button>
      <base-dialog :show="true" v-if="modalWhy">
        <why-mail :modal="true"></why-mail
      ></base-dialog>
      <base-button @click="openModalAbout">Modal O nás</base-button>
      <base-dialog :show="true" v-if="modalAbout">
        <about-us :modal="true"></about-us
      ></base-dialog>
    </base-card>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import AboutUs from './AboutUs.vue';
import WhyMail from './WhyMail.vue';
export default {
  components: { AboutUs, WhyMail },
  setup() {
    const store = useStore();
    const modalAbout = computed(() => store.getters.modalAbout);
    const modalWhy = computed(() => store.getters.modalWhy);

    const openModalAbout = () => {
      store.commit('modalAboutUs', true);
    };
    const openModalWhy = () => {
      store.commit('modalWhyWe', true);
    };

    return {
      modalAbout,
      modalWhy,
      store,
      openModalWhy,
      openModalAbout
    };
  }
};
</script>

<style>
button,
a {
  padding: 0.75rem 6.1rem;
}
</style>
