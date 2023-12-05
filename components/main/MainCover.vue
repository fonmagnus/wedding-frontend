<template>
  <div
    class="flex flex-col justify-between absolute top-0 py-20 text-white items-center h-screen w-full overflow-scroll"
  >
    <div class="flex flex-col gap-4">
      <span class="text-center">The Wedding of</span>

      <div class="flex items-center text-white">
        <h1>(Arnold & Gabrielle)</h1>
      </div>

      <h3 class="text-xs text-center text-white">
        #ATaleGaloreInAGrandBridalOath
      </h3>
    </div>

    <div class="flex flex-col gap-4 items-center text-center px-8 text-sm">
      <!-- <span class="text-xl">Holy Matrimony</span> -->
      <span>
        <span class="fa fa-calendar"></span> &nbsp; Saturday, 4<sup>th</sup> May
        2024
      </span>
      <span> <span class="fa fa-clock"></span> &nbsp; 11.00 - 12.30 WIB </span>
      <!-- <span>
        <span class="fa fa-location-dot"></span> &nbsp; Stella Maris Pluit
        Catholic Church
        <br />
        <span class="text-xs leading-3">
          Jl. Taman Pluit Permai Timur No. 17, Kel. Pluit, Kec. Penjaringan,
          Kota Jakarta Utara, Prov. DKI Jakarta, Indonesia 14450
        </span>
      </span> -->
    </div>

    <div class="flex flex-col items-center text-center px-8">
      <span>Dear Our Invited Guest,</span>
      <h4 class="text-2xl">{{ invitee.name }}</h4>
      <span class="text-xs mt-4">You have been invited to our wedding</span>
      <div
        class="py-2 px-4 rounded-xl bg-black text-yellow-500 mt-2 cursor-pointer hover:bg-yellow-500 hover:text-black transition-all"
        @click="$router.push(`invitation?code=${(code = $route.query.code)}`)"
      >
        <span>
          <span class="fa fa-envelope"></span> &nbsp; OPEN INVITATION
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
    }),
  },
};
</script>