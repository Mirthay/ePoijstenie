<template>
  <div>
    <base-card>
      <h1>{{ title }}</h1>
      <p>{{ textUp }}</p>

      <company-slot
        v-for="(com, index) in company"
        :key="index"
        :ico="com.ico"
        :name="com.name"
        :src="com.src"
      ></company-slot>
      <p>{{ textDown }}</p>
      <div class="containerBtn">
        <base-button @click="closeModalWhy" v-if="modal">Zavřít</base-button>
      </div>
    </base-card>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
  props: ['modal'],

  setup() {
    const store = useStore();
    const title = ref(store.getters.whyMail.title);
    const textUp = ref(store.getters.whyMail.textUp);
    const textDown = ref(store.getters.whyMail.textDown);
    const company = ref(store.getters.companySlot);
    const closeModalWhy = () => {
      store.commit('modalWhyWe', false);
    };
    return {
      title,
      textUp,
      textDown,
      company,
      closeModalWhy
    };
  }
};
</script>

<style scoped></style>
