<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center">Wedding Gift</h2>
    <span>{{
      lang === "EN"
        ? "We appreciate any form of gift from you. However, if you'd love to support us with financial gift, you can pay to our bank account provided below : "
        : "Kami mengapresiasi segala bentuk hadiah yang Anda berikan. Namun apabila Anda berkenan memberikan hadiah dalam bentuk finansial, Anda bisa membayarnya melalui bank transfer yang tersedia di bawah ini : "
    }}</span>

    <span class="text-lg font-bold text-center">Arnold Ardianto</span>

    <div class="flex flex-col items-center gap-1">
      <span class="text-center"
        >BCA
        <span
          @click="copy('5271578581')"
          class="text-blue-600 cursor-pointer font-bold text-lg"
          >5271578581</span
        >
        a.n. Arnold Ardianto</span
      >
      <h6 @click="copy('5271578581')" class="bg-gray-200 hover:bg-gray-300 transition-all w-1/2 text-sm text-center py-2 px-2 rounded-lg border border-black font-black">Copy &nbsp; 🗒️</h6>
    </div>

    <div class="flex flex-col items-center gap-1">
      <span class="text-lg font-bold text-center">Gabrielle Agatha</span>
  
      <span class="text-center"
        >BCA
        <span
          @click="copy('2060316221')"
          class="text-blue-600 cursor-pointer font-bold text-lg"
          >2060316221</span
        >
        a.n. Gabrielle Agatha</span
      >
      <h6 @click="copy('2060316221')" class="bg-gray-200 hover:bg-gray-300 transition-all w-1/2 text-sm text-center py-2 px-2 rounded-lg border border-black font-black">Copy &nbsp; 🗒️</h6>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text);
    },
  },
};
</script>