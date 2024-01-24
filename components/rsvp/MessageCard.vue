<template>
  <div
    v-if="message && message.invitee"
    class="flex flex-col rounded-lg bg-slate-50 p-2 shadow-xl"
  >
    <div class="flex w-full justify-between">
      <h6 class="font-black text-base">{{ message.invitee.name }}</h6>
      <span v-if="message.invitee.is_attended" class="text-green-600 font-black"
        >{{ lang === "EN" ? "Attending" : "Hadir" }} ✅</span
      >
      <span v-else class="text-red-600 font-black"
        >{{ lang === "EN" ? "Not Attending" : "Tidak Hadir" }} ❌</span
      >
    </div>
    <h6 class="italic text-sm">{{ message.message }}</h6>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    message: Object,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
};
</script>