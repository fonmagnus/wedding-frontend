<template>
  <div
    id="white-bride"
    class="flex flex-col py-4 px-4 bg-gray-200 relative items-center justify-center gap-12"
  >
    <intersect
      @enter="enterHandler('white-bride-man')"
      @leave="leaveHandler"
      :threshold="[0.1]"
    >
      <div
        class="flex flex-col gap-2 items-center opacity-0"
        id="white-bride-man"
      >
        <img
          :src="require('~/assets/images/spectrum/white/Arnold_s Bio.jpg')"
          class="rounded-full w-32 h-32 object-cover"
        />
        <h3 class="text-xl font-black">Arnold Ardianto</h3>

        <div class="flex flex-col w-full items-center">
          <span class="text-sm italic">
            {{ lang === "EN" ? "The first son of" : "Putra pertama dari" }}
          </span>

          <span>
            {{ lang === "EN" ? "Mr." : "Bp." }} Hilarius Handrij Oten
          </span>
          <span> & </span>
          <span>
            {{ lang === "EN" ? "Mrs." : "Ibu." }} Clementine Ardiati (Sandy)
          </span>
        </div>
      </div>
    </intersect>
    <intersect
      @enter="enterHandler('white-bride-woman')"
      @leave="leaveHandler"
      :threshold="[0.1]"
    >
      <div
        class="flex flex-col gap-2 items-center opacity-0"
        id="white-bride-woman"
      >
        <img
          :src="require('~/assets/images/spectrum/white/Gabrielle_s Bio.jpg')"
          class="rounded-full w-32 h-32 object-cover"
        />
        <h3 class="text-xl font-black">Gabrielle Agatha</h3>

        <div class="flex flex-col w-full items-center">
          <span class="text-sm italic">
            {{ lang === "EN" ? "The only daughter of" : "Putri tunggal dari" }}
          </span>

          <span>
            {{ lang === "EN" ? "Mr." : "Bp." }} Herman Kurniawan (Kwee Kim Ong)
            (✝)
          </span>
          <span> & </span>
          <span>
            {{ lang === "EN" ? "Mrs." : "Ibu." }} It Lian (Gouw It Lian)
          </span>
        </div>
      </div>
    </intersect>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Intersect from "vue-intersect";
export default {
  components: {
    Intersect,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  methods: {
    enterHandler(id) {
      const ele = document.getElementById(id);
      this.$gsap.to(ele, { opacity: 1, duration: 2 });
    },
    leaveHandler() {},
  },
};
</script>

