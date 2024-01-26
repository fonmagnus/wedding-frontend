<template>
  <div
    class="flex justify-center w-full min-h-screen h-full relative overflow-scroll"
  >
    <div
      v-if="$route.path !== '/'"
      class="fixed top-2 left-2 z-30 cursor-pointer bg-black text-white rounded-full w-8 h-8 text-center flex items-center justify-center"
      @click.stop="goBack"
    >
      <span class="text-sm fa fa-chevron-left text-center"></span>
    </div>

    <div
      class="fixed z-30 bottom-0 right-0 rounded-full px-4 py-3 bg-white cursor-pointer m-3"
      @click="toggleMusicDialog"
    >
      🎵
    </div>
    <div
      id="music-dialog"
      class="w-0 h-0 fixed z-30 bottom-12 right-12 bg-black text-white border border-white shadow-lg rounded-lg flex flex-col overflow-hidden"
    >
      <div
        class="absolute top-2 right-2 rounded-full flex justify-center items-center z-40 bg-black w-7 h-7"
        @click.stop="toggleMusicDialog"
      >
        <i class="fa fa-close"></i>
      </div>
      <div class="w-full px-3 py-4 flex flex-col top-0 gap-6 overflow-auto">
        <div
          v-for="(genre, i) in musicSrcSet"
          :key="i"
          class="flex flex-col gap-2"
        >
          <h6 class="font-black">{{ genre.genre }}</h6>
          <div
            v-for="(music, j) in genre.music"
            :key="j"
            class="flex gap-2 rounded-lg pl-2 py-2 hover:bg-slate-800 transition-all"
            :class="[
              {
                'bg-slate-800':
                  i === activeMusicGenreIndex && j === activeMusicIndex,
              },
            ]"
            @click.stop="playAudio(i, j)"
          >
            <img :src="music.icon" alt="" class="w-12 h-12 object-cover" />
            <div class="flex flex-col justify-center">
              <h6 class="text-sm">
                {{ music.title }}
              </h6>
              <h6 class="text-xs">{{ music.artist }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 absolute bottom-4 right-4">
        <div
          @click.stop="randomAudio"
          class="border border-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <i class="fa fa-dice"></i>
        </div>
        <div
          v-if="!musicIsStopped"
          @click.stop="stopAudio"
          class="border border-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <i class="fa fa-stop"></i>
        </div>
        <div
          v-if="musicIsPlayed"
          @click.stop="pauseAudio"
          class="border border-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <i class="fa fa-pause"></i>
        </div>
        <div
          v-if="!musicIsPlayed || musicIsStopped"
          @click.stop="playAudio(0, 0)"
          class="border border-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <i class="fa fa-play"></i>
        </div>
      </div>

      <template v-for="(genre, i) in musicSrcSet">
        <template v-for="(music, j) in genre.music">
          <audio
            :ref="`music-${music.slug}`"
            :key="`${i},${j}`"
            @ended="switchMusic"
          >
            <source :src="music.src" type="audio/ogg" />
          </audio>
        </template>
      </template>
    </div>

    <!-- <div class="fixed top-2 right-2 z-20 flex gap-0.5 font-black">
      <div
        class="w-12 border-2 rounded-full text-center transition-all"
        :class="[
          {
            'bg-black text-gray-200 border-black shadow-glow': lang === 'EN',
            'bg-gray-200 text-black border-black': lang === 'ID',
          },
        ]"
        @click.stop="setLang('EN')"
      >
        <h6>EN</h6>
      </div>
      <div
        class="w-12 border-2 rounded-full text-center transition-all"
        :class="[
          {
            'bg-black text-gray-200 border-black shadow-glow': lang === 'ID',
            'bg-gray-200 text-black border-black': lang === 'EN',
          },
        ]"
        @click.stop="setLang('ID')"
      >
        <h6>ID</h6>
      </div>
    </div> -->

    <nuxt-child />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import musics from "~/assets/data/musics.json";

export default {
  data() {
    return {
      musicIsPlayed: false,
      musicIsStopped: true,
      isOpenMusicDialog: false,
      activeMusic: "",
      activeMusicGenreIndex: 0,
      activeMusicIndex: 0,
      musicPlayer: null,
      musicSrcSet: musics,
    };
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  mounted() {
    // this.playAudio();
    this.getInvitee();
  },
  created() {
    this.$nuxt.$on("playAudio", (data) => {
      const { genre, index } = data;
      this.playAudio(genre, index);
    });
    this.$nuxt.$on("stopAudio", () => {
      this.stopAudio();
    });
    this.$nuxt.$on("pauseAudio", () => {
      this.pauseAudio();
    });
    this.$nuxt.$on("randomAudio", () => {
      this.randomAudio();
    });
  },
  watch: {
    isOpenMusicDialog(val) {
      if (val) {
        this.$gsap.to("#music-dialog", {
          width: "20rem",
          height: "30rem",
          overflow: "auto",
        });
      } else {
        this.$gsap.to("#music-dialog", {
          width: "0rem",
          height: "0rem",
          overflow: "hidden",
        });
      }
    },
  },
  methods: {
    ...mapActions({
      setInvitee: "data/setInvitee",
      setLang: "data/setLang",
    }),
    selectAudio() {},
    playAudio(i, j) {
      if (i === null) {
        i = this.activeMusicGenreIndex;
      }
      if (j === null) {
        j = this.activeMusicIndex;
      }
      if (i !== this.activeMusicGenreIndex || j !== this.activeMusicIndex) {
        this.stopAudio();
      }
      this.activeMusicGenreIndex = i;
      this.activeMusicIndex = j;
      const musicGenre = this.musicSrcSet[this.activeMusicGenreIndex];
      this.activeMusic = musicGenre.music[this.activeMusicIndex].slug;

      this.musicPlayer = this.$refs[`music-${this.activeMusic}`][0];
      this.musicPlayer.play();
      this.musicIsPlayed = true;
      this.musicIsStopped = false;
    },
    pauseAudio() {
      if (!this.activeMusic) return;
      this.musicPlayer = this.$refs[`music-${this.activeMusic}`][0];
      this.musicPlayer.pause();
      this.musicIsPlayed = false;
    },
    stopAudio() {
      this.activeMusic =
        this.musicSrcSet[this.activeMusicGenreIndex].music[
          this.activeMusicIndex
        ].slug;
      this.musicPlayer = this.$refs[`music-${this.activeMusic}`][0];
      this.musicPlayer.pause();
      this.musicPlayer.currentTime = 0;
      this.musicIsPlayed = false;
      this.musicIsStopped = true;
    },
    switchMusic(repeat = true) {
      if (!repeat)
        this.activeMusicIndex =
          (this.activeMusicIndex + 1) %
          this.musicSrcSet[this.activeMusicGenreIndex].music.length;
      this.playAudio(this.activeMusicGenreIndex, this.activeMusicIndex);
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
    toggleMusicDialog() {
      this.isOpenMusicDialog = !this.isOpenMusicDialog;
    },
    randomAudio() {
      this.stopAudio();
      this.activeMusicGenreIndex = Math.floor(
        Math.random() * this.musicSrcSet.length
      );
      const musicGenre = this.musicSrcSet[this.activeMusicGenreIndex];
      this.activeMusicIndex = Math.floor(
        Math.random() * musicGenre.music.length
      );
      this.playAudio(this.activeMusicGenreIndex, this.activeMusicIndex);
    },
  },
};
</script>

<style>
.nuxt-progress {
  background-color: gray;
}
</style>