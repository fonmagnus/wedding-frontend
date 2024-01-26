<template>
  <div
    id="white-activity"
    class="flex flex-col py-4 bg-gray-200 relative items-center justify-center gap-2"
  >
    <ImageCollection
      :images="[
        require(`~/assets/images/spectrum/white/verses/${lang}/00.png`),
        require(`~/assets/images/spectrum/white/verses/${lang}/01.png`),
        require(`~/assets/images/spectrum/white/verses/${lang}/02.png`),
        require(`~/assets/images/spectrum/white/verses/${lang}/03.png`),
        require(`~/assets/images/spectrum/white/verses/${lang}/04.png`),
        require(`~/assets/images/spectrum/white/verses/${lang}/05.png`),
      ]"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
};
</script>

