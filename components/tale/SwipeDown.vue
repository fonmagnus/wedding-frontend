<template>
  <h6
    class="scroll-down-instruction text-xs absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    {{
      lang === "EN"
        ? "scroll down to continue"
        : "geser bawah untuk lanjut baca"
    }}
  </h6>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    page: Number,
    onPage: Number,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  watch: {
    page(val) {
      return;
      setTimeout(() => {
        this.$gsap.to(".scroll-down-instruction", { opacity: 0, duration: 2 });
      }, 4000);
    },
  },
  methods: {},
};
</script>