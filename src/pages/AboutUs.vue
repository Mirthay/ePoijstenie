<template>
  <div>
    <base-card>
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <company-slot
        v-for="(com, index) in company"
        :key="index"
        :ico="com.ico"
        :name="com.name"
        :src="com.src"
      ></company-slot>
      <div class="containerBtn">
        <base-button @click="closeModalAbout" v-if="modal">Zavřít</base-button>
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
    const title = ref(store.getters.aboutUs.title);
    const text = ref(store.getters.aboutUs.text);
    const company = ref(store.getters.companySlot);

    const closeModalAbout = () => {
      store.commit('modalAboutUs', false);
    };

    return {
      title,
      text,
      company,
      closeModalAbout
    };
  }
};
</script>

<style>
.containerBtn {
  width: 100%;
}
</style>
