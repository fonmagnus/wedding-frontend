<template>
  <div class="hero-background" :style="backgroundStyle">
    <div v-if="overlay" class="absolute inset-0 bg-black opacity-60"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default:
        "https://shanewebber.com/wp-content/uploads/2018/09/how-to-get-the-best-wedding-portraits-10001.jpg",
    },
    overlay: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.src})`,
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
