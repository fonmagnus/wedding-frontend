<template>
  <div
    id="invitation-page"
    class="page-container w-full flex flex-col text-white relative opacity-0"
  >
    <HeroImage src="/Cover Large.jpeg" />
    <Invitation />
  </div>
</template>

<script>
import { TimelineLite, Power2 } from "gsap";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
    }),
  },
  mounted() {
    this.$gsap.to("#invitation-page", { opacity: 1, duration: 1.5 });
  },
  // transition: {
  //   name: "page",
  //   mode: "out-in",
  //   css: false,
  //   beforeEnter(el) {
  //     // Initialize the enter animation
  //     let tl = new TimelineLite();
  //     tl.to(el, {
  //       rotationY: 90,
  //       transformOrigin: "right",
  //       duration: 1,
  //       ease: Power2.easeInOut,
  //     });
  //   },
  //   enter(el, done) {
  //     // Create the enter animation
  //     let tl = new TimelineLite();
  //     tl.fromTo(
  //       el,
  //       { rotationY: -90 },
  //       { rotationY: 0, duration: 1, ease: Power2.easeInOut, onComplete: done }
  //     );
  //   },
  //   leave(el, done) {
  //     // Create the leave animation
  //     let tl = new TimelineLite();
  //     tl.to(el, {
  //       rotationY: -90,
  //       transformOrigin: "left",
  //       duration: 1,
  //       ease: Power2.easeInOut,
  //       onComplete: done,
  //     });
  //   },
  // },
};
</script>

<style scoped>
.page-container {
  backface-visibility: hidden;
  background-color: gray;
}
</style>
