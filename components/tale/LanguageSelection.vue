<template>
  <div class="flex flex-col absolute bottom-28 w-full items-center gap-1">
    <span class="text-center">{{ contentTitle[lang] }}</span>
    <div class="flex gap-4">
      <div class="flex flex-col gap-1 items-center">
        <span
          @click.stop="setLang('EN')"
          class="text-3xl p-4 rounded-full border border-white transition-all"
          :class="[
            {
              'bg-white': lang === 'EN',
            },
          ]"
          >🇬🇧</span
        >
      </div>
      <div class="flex flex-col gap-1 items-center">
        <span
          @click.stop="setLang('ID')"
          class="text-3xl p-4 rounded-full border border-white transition-all"
          :class="[
            {
              'bg-white': lang === 'ID',
            },
          ]"
          >🇮🇩</span
        >
      </div>
    </div>
    <h6 class="text-center text-sm">{{ contentSubtitle[lang] }}</h6>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  data() {
    return {
      contentTitle: {
        EN: "Select Language",
        ID: "Pilih Bahasa",
      },
      contentSubtitle: {
        EN: "Turn on sound for better experience 🔉",
        ID: "Nyalakan suara untuk pengalaman yang lebih seru 🔉"
      }
    };
  },
  methods: {
    ...mapActions({
      setLang: "data/setLang",
    }),
  },
};
</script>