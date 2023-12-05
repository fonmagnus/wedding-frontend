<template>
  <div
    class="flex flex-col items-center relative py-16 px-8 bg-black text-white w-full"
  >
    <span>
      <span id="A0" class="tale text-xl text-yellow-500">A</span>
      <span id="A1" class="tale text-xl text-yellow-500">R</span>
      <span id="A2" class="tale text-xl text-yellow-500">N</span>
      <span id="A3" class="tale text-xl text-yellow-500">O</span>
      <span id="A4" class="tale text-xl text-yellow-500">L</span>
      <span id="A5" class="tale text-xl text-yellow-500">D</span>
      &nbsp;
      <span id="A6" class="tale text-xl text-yellow-500">A</span>
      <span id="A7" class="tale text-xl text-yellow-500">R</span>
      <span id="A8" class="tale text-xl text-yellow-500">D</span>
      <span id="A9" class="tale text-xl text-yellow-500">I</span>
      <span id="A10" class="tale text-xl text-yellow-500">A</span>
      <span id="A11" class="tale text-xl text-yellow-500">N</span>
      <span id="A12" class="tale text-xl text-yellow-500">T</span>
      <span id="A13" class="tale text-xl text-yellow-500">O</span>
    </span>
    <span>
      <span id="A14" class="tale text-xl text-yellow-500">G</span>
      <span id="A15" class="tale text-xl text-yellow-500">A</span>
      <span id="A16" class="tale text-xl text-yellow-500">B</span>
      <span id="A17" class="tale text-xl text-yellow-500">R</span>
      <span id="A18" class="tale text-xl text-yellow-500">I</span>
      <span id="A19" class="tale text-xl text-yellow-500">E</span>
      <span id="A20" class="tale text-xl text-yellow-500">L</span>
      <span id="A21" class="tale text-xl text-yellow-500">L</span>
      <span id="A22" class="tale text-xl text-yellow-500">E</span>
      &nbsp;
      <span id="A23" class="tale text-xl text-yellow-500">A</span>
      <span id="A24" class="tale text-xl text-yellow-500">G</span>
      <span id="A25" class="tale text-xl text-yellow-500">A</span>
      <span id="A26" class="tale text-xl text-yellow-500">T</span>
      <span id="A27" class="tale text-xl text-yellow-500">H</span>
      <span id="A28" class="tale text-xl text-yellow-500">A</span>
    </span>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  data() {
    return {
      coordinates: [],
    };
  },
  created() {
    this.initializeCoordinates();
  },
  mounted() {
    setTimeout(() => {
      this.animateAnagram();
    }, 1000);
  },
  methods: {
    initializeCoordinates() {
      this.coordinates = [
        {
          id: 0,
          xPercent: 5,
          yPercent: -40,
          add: 1.5,
        },
        {
          id: 1,
          xPercent: 11,
          yPercent: -25,
          add: 1,
        },
        {
          id: 2,
          xPercent: 19.5,
          yPercent: -35,
          add: 1,
        },
        {
          id: 3,
          xPercent: 35,
          yPercent: -40,
          add: 1.5,
        },
        {
          id: 4,
          xPercent: 27,
          yPercent: -40,
          add: 1.5,
        },
        {
          id: 5,
          xPercent: 18,
          yPercent: -30,
          add: 1,
        },
        {
          id: 6,
          xPercent: -5,
          yPercent: -25,
          add: 1,
        },
        {
          id: 7,
          xPercent: -7,
          yPercent: -30,
          add: 0,
        },
        {
          id: 8,
          xPercent: -20,
          yPercent: -25,
          add: 1,
        },
        {
          id: 9,
          xPercent: -23,
          yPercent: -35,
          add: 1,
        },
        {
          id: 10,
          xPercent: -12,
          yPercent: -40,
          add: 1.5,
        },
        {
          id: 11,
          xPercent: -21,
          yPercent: -30,
          add: 1,
        },
        {
          id: 12,
          xPercent: -10,
          yPercent: -25,
          add: 1,
        },
        {
          id: 13,
          xPercent: -25,
          yPercent: -25,
          add: 1,
        },
        {
          id: 14,
          xPercent: 37,
          yPercent: -50,
          add: 1.5,
        },
        {
          id: 15,
          xPercent: 44,
          yPercent: -35,
          add: 1,
        },
        {
          id: 16,
          xPercent: 0,
          yPercent: -35,
          add: 1,
        },
        {
          id: 17,
          xPercent: 41,
          yPercent: -50,
          add: 1.5,
        },
        {
          id: 18,
          xPercent: 1.5,
          yPercent: -35,
          add: 1,
        },
        {
          id: 19,
          xPercent: 4,
          yPercent: -50,
          add: 1.5,
        },
        {
          id: 20,
          xPercent: 6,
          yPercent: -35,
          add: 1,
        },
        {
          id: 21,
          xPercent: -10,
          yPercent: -50,
          add: 1.5,
        },
        {
          id: 22,
          xPercent: 22,
          yPercent: -50,
          add: 1.5,
        },
        {
          id: 23,
          xPercent: -17,
          yPercent: -40,
          add: 1,
        },
        {
          id: 24,
          xPercent: -27,
          yPercent: -40,
          add: 0,
        },
        {
          id: 25,
          xPercent: -20,
          yPercent: -45,
          add: 1,
        },
        {
          id: 26,
          xPercent: -50,
          yPercent: -50,
          add: 1.5,
        },
        {
          id: 27,
          xPercent: -10,
          yPercent: -35,
          add: 1,
        },
        {
          id: 28,
          xPercent: -55,
          yPercent: -50,
          add: 1.5,
        },
      ];
    },
    animateAnagram() {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      for (let i = 0; i < 29; i++) {
        const elemId = `A${i}`;
        const elem = document.getElementById(elemId);

        const { xPercent, yPercent, add } = this.coordinates[i];

        const targetX = window.innerWidth * (xPercent / 100);
        const targetY = window.innerHeight * (yPercent / 100);

        const additionalPixel = add * rem;
        const x = targetX + additionalPixel;
        const y = targetY;

        const duration = Math.random() * 2.5 + 1;
        this.$gsap.to(elem, { x, y, duration, ease: "power1.inOut" });
      }
    },
  },
};
</script>

<style scoped>
#A0 {
  top: 50%;
  left: calc(10% + 0 * 1.1rem);
}

#A1 {
  top: 50%;
  left: calc(10% + 1 * 1.1rem);
}

#A2 {
  top: 50%;
  left: calc(10% + 2 * 1.1rem);
}

#A3 {
  top: 50%;
  left: calc(10% + 3 * 1.1rem);
}

#A4 {
  top: 50%;
  left: calc(10% + 4 * 1.1rem);
}

#A5 {
  top: 50%;
  left: calc(10% + 5 * 1.1rem);
}

#A6 {
  top: 50%;
  left: calc(10% + 7 * 1.1rem);
}
#A7 {
  top: 50%;
  left: calc(10% + 8 * 1.1rem);
}
#A8 {
  top: 50%;
  left: calc(10% + 9 * 1.1rem);
}
#A9 {
  top: 50%;
  left: calc(10% + 10 * 1.1rem);
}
#A10 {
  top: 50%;
  left: calc(10% + 11 * 1.1rem);
}
#A11 {
  top: 50%;
  left: calc(10% + 12 * 1.1rem);
}
#A12 {
  top: 50%;
  left: calc(10% + 13 * 1.1rem);
}
#A13 {
  top: 50%;
  left: calc(10% + 14 * 1.1rem);
}

#A14 {
  top: 60%;
  left: calc(10% + 0 * 1.1rem);
}
#A15 {
  top: 60%;
  left: calc(10% + 1 * 1.1rem);
}
#A16 {
  top: 60%;
  left: calc(10% + 2 * 1.1rem);
}
#A17 {
  top: 60%;
  left: calc(10% + 3 * 1.1rem);
}
#A18 {
  top: 60%;
  left: calc(10% + 4 * 1.1rem);
}
#A19 {
  top: 60%;
  left: calc(10% + 5 * 1.1rem);
}
#A20 {
  top: 60%;
  left: calc(10% + 6 * 1.1rem);
}
#A21 {
  top: 60%;
  left: calc(10% + 7 * 1.1rem);
}
#A22 {
  top: 60%;
  left: calc(10% + 8 * 1.1rem);
}
#A23 {
  top: 60%;
  left: calc(10% + 10 * 1.1rem);
}
#A24 {
  top: 60%;
  left: calc(10% + 11 * 1.1rem);
}
#A25 {
  top: 60%;
  left: calc(10% + 12 * 1.1rem);
}
#A26 {
  top: 60%;
  left: calc(10% + 13 * 1.1rem);
}
#A27 {
  top: 60%;
  left: calc(10% + 14 * 1.1rem);
}
#A28 {
  top: 60%;
  left: calc(10% + 15 * 1.1rem);
}
</style>