<template>
  <div class="flex absolute top-1/2 w-screen bg-none">
    <Button
      v-if="page > 0"
      id="nav-prev"
      @click="$emit('prevPage')"
      class="absolute top-1/2 rounded-full border border-slate-200 cursor-pointer w-8 h-8 flex items-center justify-center left-0 hover:border-slate-500 hover:text-slate-500"
    >
      <i class="fa fa-chevron-left text-sm"></i>
    </Button>
    <Button
      v-if="page > 0 && page < 10"
      id="nav-next"
      @click="$emit('nextPage')"
      class="absolute top-1/2 rounded-full border border-slate-200 cursor-pointer w-8 h-8 flex items-center justify-center right-0 hover:border-slate-500 hover:text-slate-500"
    >
      <i class="fa fa-chevron-right text-sm"></i>
    </Button>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
  },
  data() {
    return {
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  created() {
    window.addEventListener("wheel", this.scrollNav);
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchend", this.touchEnd);
  },

  destroyed() {
    window.removeEventListener("wheel", this.scrollNav);
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchend", this.touchEnd);
  },

  methods: {
    scrollNav() {
      this.$gsap.to("#nav-prev", { opacity: 0, duration: 1 });
      this.$gsap.to("#nav-next", { opacity: 0, duration: 1 });

      setTimeout(() => {
        this.$gsap.to("#nav-prev", { opacity: 1, duration: 1 });
        this.$gsap.to("#nav-next", { opacity: 1, duration: 1 });
      }, 2000);
    },
    touchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },
    touchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    },
    handleSwipe() {
      const d = this.touchEndX - this.touchStartX;
      console.log(d);
      if (d < -100) {
        console.log("Swiped left");
        this.$emit("nextPage");
      }
      if (d > 100) {
        console.log("Swiped right");
        this.$emit("prevPage");
      }
    },
  },
};
</script>