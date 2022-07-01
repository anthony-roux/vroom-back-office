import Vue from "vue";

// import Page from '~/components/ContentType/Page.vue';
// Vue.component('page', Page);

// Base
import UseSvg from "~/components/Base/UseSvg.vue";

Vue.component("base-use-svg", UseSvg);

// CORE

// import Slider from "~/components/Core/Slider.vue";

// Vue.component("core-slider", Slider);

// COMMON (layout, Header, footer etc..)

import SvgIcons from "~/components/Common/SvgIcons.vue";

Vue.component("c-svg-icons", SvgIcons);

// STRATES

import StrateText from "~/components/Strates/StrateText.vue";
import StrateCard from "~/components/Strates/StrateCard.vue";

Vue.component("strate-text", StrateText);
Vue.component("strate-card", StrateCard);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
