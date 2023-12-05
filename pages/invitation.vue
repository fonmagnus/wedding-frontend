<template>
  <div class="page-container w-full flex flex-col text-white relative">
    <HeroImage
      src="https://images.squarespace-cdn.com/content/v1/5a70d9e2017db2025000ed6b/1646362214398-QBLNFH617EX1XDR4YPTH/DSCF1654+copy+%281%29.jpg?format=1000w"
    />
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
  transition: {
    name: "page",
    mode: "out-in",
    css: false,
    beforeEnter(el) {
      // Initialize the enter animation
      let tl = new TimelineLite();
      tl.to(el, {
        rotationY: 90,
        transformOrigin: "right",
        duration: 1,
        ease: Power2.easeInOut,
      });
    },
    enter(el, done) {
      // Create the enter animation
      let tl = new TimelineLite();
      tl.fromTo(
        el,
        { rotationY: -90 },
        { rotationY: 0, duration: 1, ease: Power2.easeInOut, onComplete: done }
      );
    },
    leave(el, done) {
      // Create the leave animation
      let tl = new TimelineLite();
      tl.to(el, {
        rotationY: -90,
        transformOrigin: "left",
        duration: 1,
        ease: Power2.easeInOut,
        onComplete: done,
      });
    },
  },
};
</script>

<style>
.page-container {
  backface-visibility: hidden;
  background-color: gray;
}
</style>
