<template>
  <div class="relative flex flex-col h-screen w-full bg-slate-50">
    <Rsvp v-if="invitee" />
    <FallingFlower class="z-10" />
    <HeroImage
      class="opacity-40"
      :overlay="false"
      src="https://wallpaperaccess.com/full/2149545.jpg"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
    }),
  },
};
</script>