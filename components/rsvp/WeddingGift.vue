<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center">Wedding Gift</h2>
    <span>{{
      lang === "EN"
        ? "We appreciate any form of gift from you. However, if you'd love to support us with financial gift, you can pay to our bank account provided below : "
        : "Kami mengapresiasi segala bentuk hadiah yang Anda berikan. Namun apabila Anda berkenan memberikan hadiah dalam bentuk finansial, Anda bisa membayarnya melalui bank transfer yang tersedia di bawah ini : "
    }}</span>

    <span class="text-lg font-bold text-center">Arnold Ardianto</span>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
      alt=""
    />
    <span class="text-center"
      >BCA
      <span class="text-blue-600 cursor-pointer font-bold text-lg"
        >5271578581</span
      >
      a.n. Arnold Ardianto</span
    >
    <span class="text-lg font-bold text-center">Gabrielle Agatha</span>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
      alt=""
    />
    <span class="text-center"
      >BCA
      <span class="text-blue-600 cursor-pointer font-bold text-lg"
        >2060316221</span
      >
      a.n. Gabrielle Agatha</span
    >
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
};
</script>