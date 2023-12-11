<template>
  <div
    class="w-full px-3 py-4 flex flex-col top-0 gap-6 overflow-auto h-96 bg-red-700 rounded-lg"
  >
    <div v-for="(genre, i) in musics" :key="i" class="flex flex-col gap-2">
      <h6 class="font-black">{{ genre.genre }}</h6>
      <div
        v-for="(music, j) in genre.music"
        :key="j"
        class="flex gap-2 rounded-lg pl-2 py-2 hover:bg-red-900 transition-all"
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
</template>

<script>
import musics from "~/assets/data/musics.json";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      musics,
    };
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  methods: {
    playAudio(i, j) {
      this.$nuxt.$emit("playAudio", { genre: i, index: j });
    },
  },
};
</script>