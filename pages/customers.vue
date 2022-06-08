<template>
  <section id="page-drivers" class="">
    <div class="overflow-hidden">
      <div class="mx-auto">
        <BreadcrumbBookmark
          titlebreadcrumb="Parents"
          breadcrumb_item_parent="Parents"
          breadcrumb_item_active=""
          bookmark_active= true
        />
      </div>
    </div>
  </section>
</template>

<script>
import BreadcrumbBookmark from "@/components/Common/BreadcrumbBookmark";
export default {
  name: "Drivers",
  components: {
    BreadcrumbBookmark,
  },
  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "drivers",
      },
    };
  },
  methods: {},
};
</script>
