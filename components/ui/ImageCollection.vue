<template>
  <div
    class="image-collection flex relative justify-center"
    :class="[
      {
        'h-64 w-full': orientation === 'landscape',
        'h-96 w-full': orientation === 'portrait',
      },
    ]"
  >
    <div
      v-for="(image, index) in images"
      :key="`${image}-${index}`"
      class="image-wrapper h-full w-full"
      :class="{ 'is-active': index === activeIndex }"
    >
      <img
        :src="image"
        :alt="`Image ${index}`"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    orientation: {
      type: String,
      default: "landscape",
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  mounted() {
    if (this.images.length === 1) return;
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        const nextIndex = (this.activeIndex + 1) % this.images.length;
        this.fadeTransition(this.activeIndex, nextIndex);
        this.activeIndex = nextIndex;
      }, 2500);
    },
    fadeTransition(currentIndex, nextIndex) {
      const currentImage = this.$el.children[currentIndex];
      const nextImage = this.$el.children[nextIndex];

      gsap.to(currentImage, { opacity: 0, duration: 0.5 });
      gsap.fromTo(nextImage, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    },
  },
};
</script>

<style>
.image-wrapper {
  position: absolute;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-wrapper.is-active {
  opacity: 1;
}
</style>
