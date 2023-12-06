<template>
  <div id="tale-page" class="book relative w-full text-white opacity-0">
    <TaleCover
      id="tale-cover"
      class="absolute top-0"
      style="z-index: 10"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <BlackContent
      id="black-content"
      class="absolute top-0"
      style="z-index: 9"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <RedContent
      id="red-content"
      class="absolute top-0"
      style="z-index: 8"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <TaleNavigation
      class="z-30"
      :page="page"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      pages: [
        "tale-cover", 
        "black-content", 
        "red-content"
      ],
      startX: 0,
    };
  },
  mounted() {
    this.$gsap.to("#tale-page", { opacity: 1, duration: 1 });
    window.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("touchmove", this.onTouchHold);
    window.addEventListener("touchend", this.onTouchEnd);
  },
  destroyed() {
    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchmove", this.onTouchHold);
    window.removeEventListener("touchend", this.onTouchEnd);
  },
  watch: {
    page(newVal, oldVal) {
      // open page to right
      if (newVal > oldVal) {
        this.$gsap.to(`#${this.pages[oldVal]}`, {
          x: -window.innerWidth,
          duration: 1.5,
          transform: "rotateY(180deg)",
        });
      }
      // open page to left
      else {
        this.$gsap.to(`#${this.pages[newVal]}`, {
          x: 0,
          duration: 1.5,
          transform: "rotateY(0)",
        });
      }
    },
  },
  methods: {
    nextPage() {
      this.page++;
      if (this.page >= this.pages.length) this.page = this.pages.length - 1;
    },
    prevPage() {
      this.page--;
      if (this.page < 0) this.page = 0;
    },
    onTouchStart(e) {
      this.startX = e.changedTouches[0].screenX;
    },
    onTouchHold(e) {
      const d = e.changedTouches[0].screenX - this.startX;
      const x = d;
      const ele = document.getElementById("tale-page");
      const width = ele.getBoundingClientRect().width;
      const percentOnScreen = (Math.abs(d) / window.innerWidth) * 100;
      console.log(percentOnScreen);

      if (x < 0 && percentOnScreen > 14) {
        if (this.page === this.pages.length - 1) return;
        this.$gsap.to(`#${this.pages[this.page]}`, {
          x,
        });
      } else if (percentOnScreen > 14) {
        if (this.page === 0) return;

        this.$gsap.to(`#${this.pages[this.page - 1]}`, {
          x: -window.innerWidth + x,
          transform: "rotateY(0)",
        });
      }
    },
    onTouchEnd(e) {
      const d = e.changedTouches[0].screenX - this.startX;
      const percentOnScreen = (Math.abs(d) / window.innerWidth) * 100;
      console.log(percentOnScreen);
      if (d < 0 && percentOnScreen <= 25) {
        if (this.page === this.pages.length - 1) return;
        this.$gsap.to(`#${this.pages[this.page]}`, { x: 0 });
      }
      if (d > 0 && percentOnScreen <= 25) {
        if (this.page === 0) return;
        this.$gsap.to(`#${this.pages[this.page - 1]}`, {
          x: -window.innerWidth,
        });
      }
    },
  },
};
</script>

<style scoped>
/* .book {
  perspective: 1000px;
}
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 1s;
} */
</style>