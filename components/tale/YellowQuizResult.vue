<template>
  <div class="flex flex-col px-4 py-6 items-center">
    <h6 class="text-md">
      {{ lang === "EN" ? "Congratulations! 🙌 👏 " : "Selamat! 🙌 👏" }}
    </h6>
    <h6 class="text-sm">
      {{
        lang === "EN"
          ? "You successfully get a point of "
          : "Kamu berhasil mendapat poin sebesar "
      }}
    </h6>
    <h6 class="text-4xl font-black text-yellow-800">
      {{ correctAnswerCount * 10 }} point
    </h6>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    correctAnswerCount: Number,
    questionCount: Number,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
};
</script>