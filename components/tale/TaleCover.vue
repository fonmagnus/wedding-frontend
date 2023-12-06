<template>
  <div class="flex flex-col w-full h-full items-center">
    <Anagram @animationEnded="letterInPlace++" />
    <LanguageSelection class="opacity-0 absolute content" />
    <!-- <Button
      @click="$emit('nextPage')"
      class="opacity-0 absolute bottom-28 rounded-lg border border-slate-50 content"
    >
      <h6>{{ buttonText[lang] }}</h6>
    </Button> -->
    <!-- <span class="absolute bottom-20 opacity-0 content text-xs">{{
      lang === "EN" ? "or" : "atau"
    }}</span> -->
    <h6 class="absolute bottom-24 opacity-0 content text-sm">
      <i id="hand-pointer" class="text-xs fa fa-hand-pointer"></i>
      {{
        lang === "EN"
          ? "swipe left to read our tale"
          : "geser kiri untuk membaca"
      }}
    </h6>
  </div>
</template>

<script>
const ANAGRAM_LENGTH = 29;
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
    allLetterInPlace() {
      return this.letterInPlace === ANAGRAM_LENGTH;
    },
  },
  data() {
    return {
      letterInPlace: 0,
      buttonText: {
        EN: "Read Our Tale",
        ID: "Baca kisah kami",
      },
    };
  },
  watch: {
    allLetterInPlace(val) {
      if (!val) return;
      this.$gsap.fromTo(
        ".content",
        {
          opacity: 0,
        },
        { opacity: 1 }
      );

      this.$gsap.to("#hand-pointer", {
        x: -10,
        repeat: -1,
        duration: 1,
      });
    },
  },
};
</script>