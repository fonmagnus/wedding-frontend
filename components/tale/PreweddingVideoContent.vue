<template>
  <div
    class="prewedding-container flex flex-col h-full w-full items-center py-8 bg-black text-white gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 py-4 z-20">
      <h3 class="text-center">SPECTRUMS</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[85dvh] justify-center items-center gap-8 relative"
    >
      <h3 class="text-center" :class="[{
        'opacity-0': isPlayingVideo
      }]">Our Tale</h3>
      <div class="video-responsive">
        <iframe
          id="youtube-player"
          src="https://www.youtube.com/embed/n_kbAC8uOd4?enablejsapi=1&rel=0&vq=hd720"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>

      <h3 class="text-center" :class="[{
        'opacity-0': isPlayingVideo
      }]">#ATaleGaloreInAGrandBridalOath</h3>
      
      <div class="flex flex-col" :class="[{
        'opacity-0': isPlayingVideo
      }]">
        <span class="text-xs text-center">Credits to our beloved friends:</span>
        <span class="text-sm text-center"><b>Reinard Sulaiman</b>, Genius behind the <b>video</b></span>
        <span class="text-sm text-center"><b>Stefani Leoni</b>, Genius behind the <b>soundtrack</b></span>
      </div>
    </div>
    <Swipe @enter="$emit('endTale')" 
      :class="[{ 'opacity-0': isPlayingVideo }]"
    />
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
      isPlayingVideo: false,
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
    isPlayingVideo(val) {
      if(val) this.$emit('play');
      else this.$emit('stop');
    }
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
        this.isPlayingVideo = true;
      } else {
        this.timeline.pause();
        this.isPlayingVideo = false;
      }
    },
    onPlayerReady(event) {
      this.player.pauseVideo();
    },
    pauseVideo() {
      if (this.player && this.player.pauseVideo) {
        this.player.pauseVideo();
        this.isPlayingVideo = false;
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
          duration: 44,
        })
        // * black -> red
        .to(".prewedding-container", {
          backgroundColor: "rgb(153 27 27)",
          duration: 2,
        })
        .to(".prewedding-container", {
          backgroundColor: "rgb(153 27 27)",
          duration: 32,
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
          backgroundColor: "#fde047",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "#fde047",
          duration: 34,
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
          duration: 86.5,
        })
        .to(".prewedding-container", {
          backgroundColor: "black",
          duration: 3,
        })
        .to(".prewedding-container", {
          backgroundColor: "black",
          duration: 10,
        });
    },
  },
};
</script>

<style scoped>
.video-responsive {
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    position: relative;
    width: 100%;
}

.video-responsive iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>

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