<template>
  <div
    class="flex gap-2 rounded-lg pl-2 py-2 hover:bg-slate-800 transition-all select-none cursor-pointer"
    :class="[
      {
        'bg-slate-700': isActive,
      },
    ]"
    @click.stop="play"
  >
    <img :src="music.icon" alt="" class="w-12 h-12 object-cover" />
    <div class="flex flex-col justify-center">
      <h6 class="text-sm">
        {{ music.title }}
      </h6>
      <h6 class="text-xs">{{ music.artist }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    music: Object,
    isActive: Boolean,
    keyI: Number,
    keyJ: Number,
  },
  methods: {
    play() {
      this.$emit("play", { i: this.keyI, j: this.keyJ });
    },
  },
};
</script>