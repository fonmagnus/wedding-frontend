<template>
  <intersect @enter="enterHandler">
    <h6 class="text-sm">
      <i class="hand-pointer text-xs fa fa-hand-pointer"></i>
      {{
        lang === "EN"
          ? "swipe left to continue reading"
          : "geser kiri untuk lanjut membaca"
      }}
    </h6>
  </intersect>
</template>

<script>
import Intersect from "vue-intersect";
import { mapGetters } from "vuex";
export default {
  props: {},
  components: {
    Intersect,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  mounted() {
    this.$gsap.to(".hand-pointer", {
      x: -10,
      repeat: -1,
      duration: 1,
    });
  },
  methods: {
    enterHandler() {
      this.$emit("enter");
    },
  },
};
</script>