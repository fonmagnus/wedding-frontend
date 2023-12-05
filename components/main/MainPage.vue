<template>
  <div id="container" class="flex flex-col gap-12 relative w-screen">
    <!-- <FallingFlower /> -->
    <HeroImage />
    <MainCover />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      contents: {},
    };
  },
  mounted() {
    this.$gsap.fromTo(
      "#container",
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  },
  methods: {
    playMusic() {
      this.$nuxt.$emit("playAudio");
    },
  },
};
</script>