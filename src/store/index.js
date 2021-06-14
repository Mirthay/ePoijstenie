import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      modalWhy: false,
      modalAbout: false,
      whyMail: {
        title: 'Proč si od nás nechat posílat nabídky a tipy?',
        textUp:
          'Skupina Srovjnejto.cz Vám umí ušetřít peníze na mnoha místech. Zvládneme najít slevu na pojištění, zlevnit Váš mobilní tarif,najít levnou elektřinu a nebo výhodnou pujčku. Abych Vám s tímto mohli pomocti, potřebujeme Vás souhlas s použiváním Vašich osobních údaju pro marketingové účely pro naše specializované společnosti, kterymi jsou:',
        textDown:
          'Nemusíte se bát, jde jen o to, aby zmíněné společnosti mohly promyslet a zanalyzovat (včetně profilování), jaké výhodné služby jsou vhodné pro Vás, a aby tyto společnosti měly právo Vás oslovit se svými nabídkami i nabídkami svých partnerů, a to i prostřednictvím elektronických forem komunikace. A pokud byste si to rozmysleli, můžete souhlas kdykoliv jednoduše odvolat, sice nás to bude mrzet, nicméně Vaše přání bychom respektovali a dále Vám nic nenabízeli. Detailní informace o zpracování osobních údajů najdete zde.'
      },
      aboutUs: {
        title: 'Jsme součástí Srovnejto.cz',
        text:
          'ePojisteni.cz je součástí Srovnejto.cz, která Vám umí ušetřit peníze na mnoha místech. Zvládneme najít slevu na pojištění, zlevnit Váš mobilní tarif, najít levnou elektřinu a nebo výhodnou pújčku. Celou skupinu tvorí tyto specializované společnosti:'
      },
      companySlot: [
        {
          name: 'Srovnejto.cz a.s.',
          src: require('../assets/logo.svg'),
          ico: 'IČO: 03514374'
        },
        {
          name: 'ePojisteni.cz s.r.o.',
          src: require('../assets/logo.svg'),
          ico: 'IČO: 28480406'
        },
        {
          name: 'Tarifomat.cz s.r.o.',
          src: require('../assets/logo.svg'),
          ico: 'IČO: 29283183'
        },
        {
          name: 'Elephant Orchestra s.r.o.',
          src: require('../assets/logo.svg'),
          ico: 'IČO: 03272974'
        }
      ]
    };
  },
  getters: {
    whyMail(state) {
      return state.whyMail;
    },
    aboutUs(state) {
      return state.aboutUs;
    },
    companySlot(state) {
      return state.companySlot;
    },
    modalWhy(state) {
      return state.modalWhy;
    },
    modalAbout(state) {
      return state.modalAbout;
    }
  },
  mutations: {
    modalAboutUs(state, payload) {
      state.modalAbout = payload;
    },
    modalWhyWe(state, payload) {
      state.modalWhy = payload;
    }
  },
  actions: {
    modalAboutUs(context) {
      context.commit('modalAboutUs');
      console.log(context);
    },
    modalWhyWe(context) {
      context.commit('modalWhyWe');
      console.log(context);
    }
  }
});

export default store;
