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
          src="https://media.istockphoto.com/id/1329787511/photo/asian-young-men-wearing-white-shirt-and-eyeglasses-at-park.jpg?s=612x612&w=0&k=20&c=9Gh5l5EoMwGskbyLJ5oyNblC29hhmr3AhGB7JNPBodI="
          class="rounded-full w-32 h-32 object-cover"
        />
        <h3 class="text-xl font-black">Arnold Ardianto</h3>

        <div class="flex flex-col w-full items-center">
          <span class="text-sm italic">
            {{ lang === "EN" ? "The first son of" : "Putra pertama dari" }}
          </span>

          <span>
            {{ lang === "EN" ? "Mr." : "Bp." }} Hillarius Handrij Oten
          </span>
          <span> & </span>
          <span>
            {{ lang === "EN" ? "Mrs." : "Ibu." }} Clementine Ardiati
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
          src="https://img.freepik.com/premium-photo/asian-woman-wearing-white-tshirt-smiling-white-background_80983-4321.jpg"
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
            {{ lang === "EN" ? "Mrs." : "Ibu." }} It Lian (Gouw Lian)
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
      console.log(id);
      const ele = document.getElementById(id);
      this.$gsap.to(ele, { opacity: 1, duration: 2 });
    },
    leaveHandler() {},
  },
};
</script>

