<template>
  <div class="w-full h-full relative">
    <img
      :src="src"
      class="h-full w-full absolute inset-0"
      @click.stop="zoomIn"
    />
    <img
      :src="src"
      class="fixed h-0 w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 object-cover"
      style="z-index: 31"
      :id="name"
    />
    <div
      :id="`${name}-overlay`"
      class="fixed h-screen w-screen inset-0 bg-black opacity-0 invisible z-30"
      @click.stop="zoomOut"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    name: String,
  },
  methods: {
    zoomIn() {
      this.$gsap.to(`#${this.name}-overlay`, {
        opacity: 0.7,
        visibility: "visible",
        duration: 0.6,
      });

      this.$gsap.to(`#${this.name}`, {
        duration: 0.6,
        height: "50%",
        opacity: 1,
      });
    },
    zoomOut() {
      this.$gsap.to(`#${this.name}-overlay`, {
        opacity: 0,
        visibility: "hidden",
        duration: 1,
      });

      this.$gsap.to(`#${this.name}`, {
        duration: 0.6,
        height: 0,
        opacity: 0,
      });
    },
  },
};
</script>