<template>
  <h6 class="text-sm">
    <i class="hand-pointer text-xs fa fa-hand-pointer"></i>
    {{
      lang === "EN"
        ? "swipe left to continue reading"
        : "geser kiri untuk lanjut membaca"
    }}
  </h6>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {},
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  mounted() {
    this.$gsap.to(".hand-pointer", {
      x: -10,
      repeat: -1,
      duration: 1,
    });
  },
};
</script>