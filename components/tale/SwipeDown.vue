<template>
  <div
    class="flex flex-col absolute bottom-0 left-1/2 -translate-x-1/2 items-center w-full bg-gradient-to-b h-20"
    :class="[
      {
        'from-black to-gray-700': variant === 'black',
        'from-red-800 to-red-500': variant === 'red',
        'from-orange-600 to-orange-400': variant === 'orange',
        'from-yellow-500 to-yellow-200': variant === 'yellow',
        'from-green-700 to-green-500': variant === 'green',
        'from-blue-400 to-blue-200': variant === 'blue',
        'from-violet-800 to-violet-600': variant === 'violet',
        'from-pink-300 to-pink-200': variant === 'pink',
      },
      `swipe-down-${variant}`,
    ]"
  >
    <i :class="`hand-down-${variant}`" class="fa fa-arrow-down text-2xl"></i>
    <h6 class="scroll-down-instruction text-xs absolute bottom-4">
      {{
        lang === "EN"
          ? "scroll down to continue reading"
          : "geser bawah untuk lanjut baca"
      }}
    </h6>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    page: Number,
    onPage: Number,
    variant: String,
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
      this.$gsap.to(`.hand-down-${this.variant}`, {
        y: 20,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    },
  },
};
</script>