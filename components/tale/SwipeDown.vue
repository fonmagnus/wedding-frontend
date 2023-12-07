<template>
  <div
    class="flex flex-col absolute bottom-8 left-1/2 -translate-x-1/2 items-center"
  >
    <h6 class="scroll-down-instruction text-xs">
      {{
        lang === "EN"
          ? "scroll down to continue"
          : "geser bawah untuk lanjut baca"
      }}
    </h6>
    <i class="hand-down fa fa-arrow-down"></i>
  </div>
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
  mounted() {
    this.animateHand();
  },
  methods: {
    animateHand() {
      this.$gsap.to(".hand-down", {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    },
  },
};
</script>