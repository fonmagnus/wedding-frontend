<template>
  <div id="tale-page" class="book relative w-full text-white opacity-0">
    <TaleCover
      id="tale-cover"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <PreweddingVideoContent
      id="prewed-video-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <BlackContent
      id="black-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <RedContent
      id="red-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <OrangeContent
      id="orange-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <YellowContent
      id="yellow-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <GreenContent
      id="green-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <BlueContent
      id="blue-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <VioletContent
      id="violet-content"
      :page="page"
      class="absolute top-0"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <PinkContent
      id="pink-content"
      :page="page"
      class="absolute top-0"
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
        "prewed-video-content",
        "black-content",
        "red-content",
        "orange-content",
        "yellow-content",
        "green-content",
        "blue-content",
        "violet-content",
        "pink-content",
      ],
      startX: 0,
    };
  },
  mounted() {
    this.$gsap.to("#tale-page", { opacity: 1, duration: 1 });
    window.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("touchmove", this.onTouchHold);
    window.addEventListener("touchend", this.onTouchEnd);
    this.assignZIndex();
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
          transform: "rotateY(160deg)",
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
      const ele = document.getElementById(`${this.pages[this.page]}`);
      ele.scrollTo({ top: 0 });
    },
    prevPage() {
      this.page--;
      if (this.page < 0) this.page = 0;
      const ele = document.getElementById(`${this.pages[this.page]}`);
      ele.scrollTo({ top: 0 });
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
    assignZIndex() {
      for (let i = 0; i < this.pages.length; i++) {
        const elem = document.getElementById(`${this.pages[i]}`);
        elem.style.zIndex = this.pages.length - i;
        console.log(elem.style.zIndex);
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