<template class="home">
  <div id="page-home" class="">
    <strat-card subtitle="test" number="200"></strat-card>
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
