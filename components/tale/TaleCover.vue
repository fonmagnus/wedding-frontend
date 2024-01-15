<template>
  <div class="flex flex-col w-full h-full max-h-screen items-center">
    <img
      src="@/assets/images/tale/head.png"
      alt=""
      class="w-36 object-fit mt-6 content opacity-0"
    />
    <img
      src="@/assets/images/tale/border.png"
      alt=""
      class="w-96 object-fit content opacity-0"
    />
    <Anagram @animationEnded="letterInPlace++" />
    <LanguageSelection class="opacity-0 absolute content" />
    <img
      src="@/assets/images/tale/body.png"
      class="w-24 object-fit absolute top-1/3 content opacity-0"
      alt=""
    />
    <img
      src="@/assets/images/tale/dance.png"
      class="w-48 object-fit absolute bottom-1/4 -translate-y-1/2 content opacity-0"
      alt=""
    />
    <!-- <Button
      @click="$emit('nextPage')"
      class="opacity-0 absolute bottom-28 rounded-lg border border-slate-50 content"
    >
      <h6>{{ buttonText[lang] }}</h6>
    </Button> -->
    <!-- <span class="absolute bottom-20 opacity-0 content text-xs">{{
      lang === "EN" ? "or" : "atau"
    }}</span> -->
    <Swipe class="absolute bottom-20 opacity-0 content" />
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
    },
  },
};
</script>