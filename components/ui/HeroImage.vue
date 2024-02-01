<template>
  <div class="hero-background" :style="backgroundStyle">
    <div v-if="overlay" class="absolute inset-0 bg-black opacity-40"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "/Home Large.jpeg",
    },
    overlay: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url('${this.src}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      };
    },
  },
};
</script>

<style>
.hero-background {
  position: relative;
  height: 100vh; /* Adjust the height as needed */
}
</style>
