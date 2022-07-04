<template>
  <section class="my-32 md:my-60 strate-text">
    <div class="container">
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="b-r-4 card-body" :style="{ background: `${color}` }">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-database"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div class="media-body">
                <span class="m-0">{{ subtitle }}</span>
                <h4 class="mb-0 counter">{{ number }}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-database icon-bg"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateCard",
  props: {
    color: {
      type: String,
      required: false,
      default: "#FF0000",
    },
    imageUrl: {
      type: String,
      required: false,
      default: "@/assets/images/logo/logo-vroom-light.png",
    },
    number: {
      type: String,
      required: false,
      default: "88,9",
    },
    subtitle: {
      type: String,
      required: false,
      default: "Our Annual Income",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>
