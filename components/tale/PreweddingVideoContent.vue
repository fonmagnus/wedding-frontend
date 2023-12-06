<template>
  <div
    class="prewedding-container flex flex-col h-full w-full items-center py-8 bg-black text-white gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 py-4 z-20">
      <h3 class="text-center">SPECTRUMS</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[85dvh] justify-center gap-8 relative"
    >
      <h3 class="text-center">Our Tale</h3>
      <div class="w-full">
        <iframe
          id="youtube-player"
          class="w-full h-48 object-cover"
          src="https://www.youtube.com/embed/fq2CdnfijhQ?enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h3 class="text-center">#ATaleGaloreInAGrandBridalOath</h3>
    </div>
    <Swipe />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MarkdownIt from "markdown-it";
export default {
  props: {
    page: Number,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  data() {
    return {
      timeline: null,
      hasPlayed: false,
    };
  },

  mounted() {
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = this.initYouTubePlayer;

    this.timeline = this.$gsap.timeline({
      repeat: -1,
    });
  },
  watch: {
    page(val) {
      if (val !== 1) return;
      this.changeBackgroundColor();
      this.timeline.pause();
    },
  },

  methods: {
    initYouTubePlayer() {
      this.player = new YT.Player("youtube-player", {
        events: {
          onStateChange: this.onPlayerStateChange,
        },
      });
    },
    onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        this.$nuxt.$emit("pauseAudio");
        this.timeline.resume();
      } else {
        this.timeline.pause();
        this.$nuxt.$emit("playAudio", { genre: null, index: null });
      }
    },
    renderedMarkdown(message) {
      const md = new MarkdownIt({
        html: true,
      });
      return md.render(message);
    },
    changeBackgroundColor() {
      this.timeline
        .to(".prewedding-container", {
          backgroundColor: "rgb(153 27 27)",
          duration: 50,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(194 65 12)",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(202 138 4)",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(21 128 61)",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(30 64 175)",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(91 33 182)",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(190 24 93)",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "white",
          duration: 25,
        })
        .to(".prewedding-container", {
          backgroundColor: "black",
          duration: 25,
        });
    },
  },
};
</script>
