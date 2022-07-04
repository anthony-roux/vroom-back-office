<template class="home">
  <div id="page-home" class="">
    <div class="">
      <strat-card
        imageUrl="/assets/images/logo/logo-vroom-light.png"
        color="#333"
        subtitle="test"
        number="200"
      ></strat-card>
      <strat-card subtitle="test2" color="#222" number="250"></strat-card>
      <strat-card subtitle="test3" number="300"></strat-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StratCard from "../components/Strates/StrateCard.vue";
import StrateText from "../components/Strates/StrateText.vue";

export default {
  components: { StratCard, StrateText },
  name: "Home",
  props: {},
  computed: {
    ...mapGetters({
      isHome: "global/getIsHome",
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },

  data() {
    return {
      currentSlug: "home",
      page: this.$route.name,
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "homepage",
      },
    };
  },
  methods: {},
};
</script>

<style></style>
