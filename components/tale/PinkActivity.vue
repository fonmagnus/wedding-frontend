<template>
  <div
    id="pink-activity"
    class="flex flex-col py-4 px-4 bg-pink-300 relative items-center justify-center gap-2"
  >
    <h6 class="text-red-600 text-2xl font-black">
      <span class="text-base font-normal text-white fa fa-heart"></span>&nbsp;
      {{ loveGiven }}
    </h6>
    <div
      class="rounded-full w-32 h-32 text-5xl flex items-center justify-center"
      :class="bgColor"
      @click="toggleBackground"
    >
      💖
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isGray: false,
      loveGiven: 0,
    };
  },
  computed: {
    bgColor() {
      return this.isGray ? "bg-gray-300" : "bg-white";
    },
  },
  created() {
    fetch(`${process.env.API_URL}/main/get-loves`)
      .then((res) => res.json())
      .then((data) => {
        this.loveGiven = data.loves;
      });
  },  
  mounted() {
    // this.initializeLoveGiven();
  },
  methods: {
    toggleBackground() {
      this.isGray = true;
      setTimeout(() => {
        this.isGray = false;
      }, 100); // Time in milliseconds
      this.fadeHeart();
      // this.setLoveGiven(this.loveGiven + 1);
      this.loveGiven += 1;
      fetch(
        `${process.env.API_URL}/main/send-loves/${this.$route.query.code}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          this.loveGiven = data.loves;
        });
    },
    fadeHeart() {
      const container = document.getElementById("pink-activity");
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.position = "absolute";
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = "24px";
      heart.innerText = "❤️";
      container.appendChild(heart);

      this.$gsap.to(heart, {
        y: -400,
        opacity: 0,
        duration: 1,
        fontSize: "54px",
      });
    },
  },
};
</script>


<style scoped>
.bg-gray-300 {
  background-color: #e5e7eb; /* Tailwind CSS color */
  transition: background-color 0.1s ease;
}

.bg-white {
  background-color: #ffffff;
  transition: background-color 0.1s ease;
}
</style>
