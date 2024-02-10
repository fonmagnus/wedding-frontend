<template>
  <div class="w-full px-3 py-4 flex flex-col top-0 gap-6 overflow-auto">
    <div v-for="(genre, i) in musicSrcSet" :key="i" class="flex flex-col gap-2">
      <h6 class="font-black text-center text-xl">{{ genre.genre }}</h6>
      <MusicCard
        v-for="(music, j) in genre.music"
        :music="music"
        :key="j"
        :key-i="i"
        :key-j="j"
        @play="playAudio"
        :is-active="i === activeMusicGenreIndex && j === activeMusicIndex"
      >
      </MusicCard>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeMusicGenreIndex: Number,
    activeMusicIndex: Number,
    musicSrcSet: {
      type: Array,
      required: true,
    },
  },

  methods: {
    playAudio({ i, j }) {
      this.$emit("playAudio", { i, j });
    },
  },
};
</script>