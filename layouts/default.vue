<template>
  <div
    class="flex justify-center w-full min-h-screen h-full relative overflow-scroll"
  >
    <div
      v-if="$route.path !== '/'"
      class="fixed top-4 left-4 z-30 cursor-pointer bg-black text-white rounded-full w-8 h-8 text-center flex items-center justify-center"
      @click.stop="goBack"
    >
      <span class="text-sm fa fa-chevron-left text-center"></span>
    </div>

    <div
      class="fixed z-30 bottom-0 right-0 rounded-full px-4 py-3 bg-white cursor-pointer m-3"
      @click="playAudio"
    >
      🎵
    </div>
    <nuxt-child />
    <audio
      v-for="(src, i) in musicSrcSet"
      :key="i"
      :ref="`music-${i}`"
      @ended="switchMusic"
    >
      <source :src="src" type="audio/ogg" />
    </audio>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      musicIsPlayed: false,
      activeMusic: 0,
      musicPlayer: null,
      musicSrcSet: [
        "https://res.cloudinary.com/hdi-bee-bot-test-cloud/video/upload/v1696465740/audio/Richard_Clayderman_-_Ballade_Pour_Adeline_hb5mvk.mp4",
      ],
    };
  },
  mounted() {
    // this.playAudio();
    this.getInvitee();
  },
  created() {
    this.$nuxt.$on("playAudio", () => {
      this.playAudio();
    });
  },
  methods: {
    ...mapActions({
      setInvitee: "data/setInvitee",
    }),
    selectAudio() {},
    playAudio() {
      this.musicPlayer = this.$refs[`music-${this.activeMusic}`][0];
      this.musicPlayer.play();
      this.musicIsPlayed = true;
    },
    switchMusic() {
      this.activeMusic = (this.activeMusic + 1) % this.musicSrcSet.length;
      this.playAudio();
    },
    getInvitee() {
      fetch(`${process.env.API_URL}/main/me/${this.$route.query.code}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Invitation Code not Found");
          }
          return response.json();
        })
        .then((data) => {
          this.setInvitee(data);
        });
    },
    goBack() {
      this.$router.back(); // This is a shortcut for going back to the previous page
    },
  },
};
</script>

<style>
.nuxt-progress {
  background-color: gray;
}
</style>