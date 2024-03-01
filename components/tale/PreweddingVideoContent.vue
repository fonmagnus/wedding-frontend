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
          src="https://www.youtube.com/embed/y0fkTcRZvwU?si=SwwPmhre2CMRfcWV&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h3 class="text-center">#ATaleGaloreInAGrandBridalOath</h3>
    </div>
    <Swipe @enter="$emit('endTale')" />
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
      this.pauseVideo();
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
          onReady: this.onPlayerReady,
        },
      });
    },
    onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        this.$nuxt.$emit("pauseAudio");
        const videoDuration = this.player.getDuration();
        this.adjustTimeline(videoDuration);
        this.timeline.resume();
      } else {
        this.timeline.pause();
      }
    },
    onPlayerReady(event) {
      this.player.pauseVideo();
    },
    pauseVideo() {
      if (this.player && this.player.pauseVideo) {
        this.player.pauseVideo();
      }
    },
    adjustTimeline(videoDuration) {
      const currentTime = this.player.getCurrentTime();
      const videoProgress = currentTime / videoDuration;
      this.timeline.progress(videoProgress);
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
          backgroundColor: "black",
          duration: 40,
        })
        // * black -> red
        .to(".prewedding-container", {
          backgroundColor: "rgb(153 27 27)",
          duration: 2,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(153 27 27)",
          duration: 34,
        })
        // * red -> orange
        .to(".prewedding-container", {
          backgroundColor: "rgb(194 65 12)",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(194 65 12)",
          duration: 25,
        })
        // * orange -> yellow
        .to(".prewedding-container", {
          backgroundColor: "rgb(202 138 4)",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(202 138 4)",
          duration: 35,
        })
        // * yellow -> green
        .to(".prewedding-container", {
          backgroundColor: "rgb(21 128 61)",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(21 128 61)",
          duration: 28,
        })
        // * green -> blue
        .to(".prewedding-container", {
          backgroundColor: "rgb(96 165 250)",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(96 165 250)",
          duration: 34,
        })
        // * blue -> violet
        .to(".prewedding-container", {
          backgroundColor: "rgb(91 33 182)",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(91 33 182)",
          duration: 33,
        })
        // * violet -> pink
        .to(".prewedding-container", {
          backgroundColor: "rgb(249 168 212)",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(249 168 212)",
          duration: 28,
        })
        // * pink -> white
        .to(".prewedding-container", {
          backgroundColor: "white",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "white",
          duration: 87.5,
        })
        .to(".prewedding-container", {
          backgroundColor: "black",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "black",
          duration: 9.5,
        });
    },
  },
};
</script>

<!--

black 0-40        40
black->red 40-42   2
red 42-76         34
red->orange 76-79  3
orange 79-104     25
orange->yellow 104-107 3
yellow 107-142    35
yellow->green 142-145 3
green 145-173     28
green->blue 173-176 3
blue 176-210      34
blue->violet 210-213 3
violet 213-246    33
violet->pink 246-249 3
pink 249-279      30
pink->white 279-282 3
white 282-367     85
white->black 367-370 3
black 370-380 10

-->