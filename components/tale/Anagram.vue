<template>
  <div
    id="animation-container"
    class="flex flex-col items-center absolute py-16 px-8 bg-black text-white w-full overflow-hidden h-full -z-10"
  >
    <span>
      <span id="A0" class="tale text-xl">A</span>
      <span id="A1" class="tale text-xl">R</span>
      <span id="A2" class="tale text-xl">N</span>
      <span id="A3" class="tale text-xl">O</span>
      <span id="A4" class="tale text-xl">L</span>
      <span id="A5" class="tale text-xl">D</span>
      &nbsp;
      <span id="A6" class="tale text-xl">A</span>
      <span id="A7" class="tale text-xl">R</span>
      <span id="A8" class="tale text-xl">D</span>
      <span id="A9" class="tale text-xl">I</span>
      <span id="A10" class="tale text-xl">A</span>
      <span id="A11" class="tale text-xl">N</span>
      <span id="A12" class="tale text-xl">T</span>
      <span id="A13" class="tale text-xl">O</span>
    </span>
    <span>
      <span id="A14" class="tale text-xl">G</span>
      <span id="A15" class="tale text-xl">A</span>
      <span id="A16" class="tale text-xl">B</span>
      <span id="A17" class="tale text-xl">R</span>
      <span id="A18" class="tale text-xl">I</span>
      <span id="A19" class="tale text-xl">E</span>
      <span id="A20" class="tale text-xl">L</span>
      <span id="A21" class="tale text-xl">L</span>
      <span id="A22" class="tale text-xl">E</span>
      &nbsp;
      <span id="A23" class="tale text-xl">A</span>
      <span id="A24" class="tale text-xl">G</span>
      <span id="A25" class="tale text-xl">A</span>
      <span id="A26" class="tale text-xl">T</span>
      <span id="A27" class="tale text-xl">H</span>
      <span id="A28" class="tale text-xl">A</span>
    </span>
    <audio ref="anagram-sparkle">
      <source :src="sparkleSound" type="audio/ogg" />
    </audio>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  data() {
    return {
      coordinates: [],
      sparkleSound:
        "https://res.cloudinary.com/hdi-bee-bot-test-cloud/video/upload/v1701865544/audio/zapsplat_fantasy_magic_glissando_harp_005_86494_nxtpel.mp3",
      // "https://res.cloudinary.com/hdi-bee-bot-test-cloud/video/upload/v1701865545/audio/zapsplat_fantasy_magic_wand_ping_bell_chime_classic_simple_010_92723_pvvyrk.mp3",
      // "https://res.cloudinary.com/hdi-bee-bot-test-cloud/video/upload/v1701865547/audio/zapsplat_fantasy_magic_magical_glissando_001_99332_zw7cwq.mp3",
      musicPlayer: {},
    };
  },
  created() {
    this.initializeCoordinates();
  },
  mounted() {
    setTimeout(() => {
      this.musicPlayer = this.$refs["anagram-sparkle"];
      this.musicPlayer.play();
      this.animateAnagram();
    }, 1500);
  },
  methods: {
    initializeCoordinates() {
      const leftOffset = [-10, -23, -10];
      this.coordinates = [
        {
          id: 0,
          top: 17,
          add: -90 + leftOffset[0],
        },
        //----
        {
          id: 26,
          top: 17,
          add: -60 + leftOffset[0],
        },
        {
          id: 28,
          top: 17,
          add: -45 + leftOffset[0],
        },
        {
          id: 21,
          top: 17,
          add: -25 + leftOffset[0],
        },
        {
          id: 19,
          top: 17,
          add: -15 + leftOffset[0],
        },
        //----
        {
          id: 14,
          top: 17,
          add: 10 + leftOffset[0],
        },
        {
          id: 10,
          top: 17,
          add: 28 + leftOffset[0],
        },
        {
          id: 4,
          top: 17,
          add: 48 + leftOffset[0],
        },
        {
          id: 3,
          top: 17,
          add: 60 + leftOffset[0],
        },
        {
          id: 17,
          top: 17,
          add: 80 + leftOffset[0],
        },
        {
          id: 22,
          top: 17,
          add: 95 + leftOffset[0],
        },
        // -------
        // -------
        {
          id: 9,
          top: 22,
          add: -60 + leftOffset[1],
        },
        {
          id: 2,
          top: 22,
          add: -45 + leftOffset[1],
        },
        // -------
        {
          id: 25,
          top: 22,
          add: -15 + leftOffset[1],
        },
        // --------
        {
          id: 24,
          top: 22,
          add: 15 + leftOffset[1],
        },
        {
          id: 7,
          top: 22,
          add: 35 + leftOffset[1],
        },
        {
          id: 23,
          top: 22,
          add: 50 + leftOffset[1],
        },
        {
          id: 11,
          top: 22,
          add: 70 + leftOffset[1],
        },
        {
          id: 5,
          top: 22,
          add: 90 + leftOffset[1],
        },
        // -------
        // -------
        {
          id: 16,
          top: 27,
          add: -90 + leftOffset[2],
        },
        {
          id: 1,
          top: 27,
          add: -70 + leftOffset[2],
        },
        {
          id: 18,
          top: 27,
          add: -50 + leftOffset[2],
        },
        {
          id: 8,
          top: 27,
          add: -35 + leftOffset[2],
        },
        {
          id: 6,
          top: 27,
          add: -15 + leftOffset[2],
        },
        {
          id: 20,
          top: 27,
          add: 5 + leftOffset[2],
        },
        // -------
        {
          id: 13,
          top: 27,
          add: 35 + leftOffset[2],
        },
        {
          id: 15,
          top: 27,
          add: 55 + leftOffset[2],
        },
        {
          id: 12,
          top: 27,
          add: 75 + leftOffset[2],
        },
        {
          id: 27,
          top: 27,
          add: 95 + leftOffset[2],
        },
      ];
    },
    animateAnagram() {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      for (let i = 0; i < this.coordinates.length; i++) {
        const elemId = `A${this.coordinates[i].id}`;
        const elem = document.getElementById(elemId);

        const { top, left, add } = this.coordinates[i];
        const targetX = (50 / 100) * window.innerWidth;
        const targetY = (top / 100) * window.innerHeight;
        const rect = elem.getBoundingClientRect();

        const x = targetX - rect.left + add;
        const y = targetY - rect.top;

        const duration = Math.random() * 2.5 + 1;
        this.$gsap.to(elem, { x, y, duration });
        setTimeout(() => {
          this.$emit("animationEnded");
        }, duration * 1000);

        const repeat = Math.floor(Math.random(20) + 20);

        for (let j = 0; j < repeat; j++) {
          setTimeout(() => {
            this.animateStars(elem, i, j);
          }, (j / repeat) * duration * 1000);
        }
      }
    },

    animateStars(elem, i, j) {
      const container = document.getElementById("animation-container");
      if (!container) return;
      const star = document.createElement("div");
      star.id = `star-${i}-${j}`;
      const rect = elem.getBoundingClientRect();
      // star.classList.add("fa");
      // star.classList.add("fa-stars");
      star.style.height = "5px";
      star.style.width = "5px";
      star.style.position = "absolute";
      star.style.top = `${rect.top}px`;
      star.style.left = `${rect.left}px`;
      star.style.color = "yellow";
      star.style.opacity = 0.5;
      star.innerText = "🌟";

      container.appendChild(star);

      this.$gsap.to(star, {
        y: 1024,
        fontSize: Math.random() * 96,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    },
  },
};

/**
A   0     0

T  26     1
A  28     2
L  21     3
E  19     4

G  14     5
A  10     6
L   4     7
O   3     8
R  17     9
E  22    10

----------

I   9    11
N   2    12

A  25    13

G  24    14
R   7    15
A  23    16
N  11    17
D   5    18

------------

B  16    19
R   1    20
I  18    21
D   8    22
A   6    23 
L  20    24

O  13    25
A  15    26
T  12    27
H  27    28

 */
</script>

<style scoped>
#A0 {
  top: 45%;
  left: calc(50% - 7 * 1rem);
}

#A1 {
  top: 45%;
  left: calc(50% - 6 * 1rem);
}

#A2 {
  top: 45%;
  left: calc(50% - 5 * 1rem);
}

#A3 {
  top: 45%;
  left: calc(50% - 4 * 1rem);
}

#A4 {
  top: 45%;
  left: calc(50% - 3 * 1rem);
}

#A5 {
  top: 45%;
  left: calc(50% - 2 * 1rem);
}

#A6 {
  top: 45%;
  left: calc(50% + 0 * 1rem);
}
#A7 {
  top: 45%;
  left: calc(50% + 1 * 1rem);
}
#A8 {
  top: 45%;
  left: calc(50% + 2 * 1rem);
}
#A9 {
  top: 45%;
  left: calc(50% + 3.3 * 1rem);
}
#A10 {
  top: 45%;
  left: calc(50% + 4 * 1rem);
}
#A11 {
  top: 45%;
  left: calc(50% + 5 * 1rem);
}
#A12 {
  top: 45%;
  left: calc(50% + 6 * 1rem);
}
#A13 {
  top: 45%;
  left: calc(50% + 7 * 1rem);
}

/* --------------------- */

#A14 {
  top: 50%;
  left: calc(50% - 7.5 * 1rem);
}
#A15 {
  top: 50%;
  left: calc(50% - 6.5 * 1rem);
}
#A16 {
  top: 50%;
  left: calc(50% - 5.5 * 1rem);
}
#A17 {
  top: 50%;
  left: calc(50% - 4.3 * 1rem);
}
#A18 {
  top: 50%;
  left: calc(50% - 3.3 * 1rem);
}
#A19 {
  top: 50%;
  left: calc(50% - 2.5 * 1rem);
}
#A20 {
  top: 50%;
  left: calc(50% - 1.5 * 1rem);
}
#A21 {
  top: 50%;
  left: calc(50% - 0.5 * 1rem);
}
#A22 {
  top: 50%;
  left: calc(50% + 0.5 * 1rem);
}
#A23 {
  top: 50%;
  left: calc(50% + 2.5 * 1rem);
}
#A24 {
  top: 50%;
  left: calc(50% + 3.5 * 1rem);
}
#A25 {
  top: 50%;
  left: calc(50% + 4.5 * 1rem);
}
#A26 {
  top: 50%;
  left: calc(50% + 5.5 * 1rem);
}
#A27 {
  top: 50%;
  left: calc(50% + 6.5 * 1rem);
}
#A28 {
  top: 50%;
  left: calc(50% + 7.5 * 1rem);
}
</style>
