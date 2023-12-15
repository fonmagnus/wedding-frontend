<template>
  <div id="flower" ref="flower" class="overflow-hidden w-full h-full"></div>
</template>

<script>
import { TweenLite, TweenMax, Linear, Sine } from "gsap";

export default {
  props: {
    variant1: {
      type: String,
      default:
        "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Flowers-PNG/Flower_PNG_White_Transparent_Clipart.png?m=1618826388",
    },
    variant2: {
      type: String,
      default:
        "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Flowers-PNG/Flower_PNG_White_Transparent_Clipart.png?m=1618826388",
    },
    variant3: {
      type: String,
      default:
        "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Flowers-PNG/Flower_PNG_White_Transparent_Clipart.png?m=1618826388",
    },
  },
  mounted() {
    const container = this.$refs.flower;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const total = 10;

    for (let i = 0; i < total; i++) {
      let Div = document.createElement("div");
      this.setStyle(Div, "dot", this.variant1);

      let Div2 = document.createElement("div");
      this.setStyle(Div2, "dot2", this.variant2);

      let Div3 = document.createElement("div");
      this.setStyle(Div3, "dot3", this.variant3);

      container.appendChild(Div);
      container.appendChild(Div2);
      container.appendChild(Div3);

      this.animm(Div);
      this.animm2(Div2);
      this.animm3(Div3);
    }
  },
  methods: {
    setStyle(elm, className, bgUrl) {
      elm.style.background = `url(${bgUrl})`;
      TweenLite.set(elm, {
        attr: { class: className },
        x: this.R(0, window.innerWidth),
        y: this.R(-200, -150),
        z: this.R(-200, 200),
        backgroundSize: "100% 100%",
      });
    },
    animm(elm) {
      TweenMax.to(elm, this.R(6, 15), {
        y: window.innerHeight + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      TweenMax.to(elm, this.R(4, 8), {
        x: "+=100",
        rotationZ: this.R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, this.R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    },
    animm2(elm) {
      TweenMax.to(elm, this.R(6, 15), {
        y: window.innerHeight + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -25,
      });
      TweenMax.to(elm, this.R(4, 8), {
        x: "+=100",
        rotationZ: this.R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, this.R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    },
    animm3(elm) {
      TweenMax.to(elm, this.R(6, 15), {
        y: window.innerHeight + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -5,
      });
      TweenMax.to(elm, this.R(4, 8), {
        x: "+=100",
        rotationZ: this.R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, this.R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    },
    R(min, max) {
      return min + Math.random() * (max - min);
    },
  },
};
</script>

<style>
.dot {
  width: 20px;
  height: 20px;
  position: absolute;
  /* background: url(http://img.babathe.com/upload/specialDisplay/htmlImage/2019/20190104_rose2.png); */
  background-size: 100% 100%;
}
.dot2 {
  width: 20px;
  height: 20px;
  position: absolute;
  /* background: url(http://img.babathe.com/upload/specialDisplay/htmlImage/2019/20190104_rose.png); */
  background-size: 100% 100%;
}
.dot3 {
  width: 20px;
  height: 20px;
  position: absolute;
  /* background: url(http://img.babathe.com/upload/specialDisplay/htmlImage/2019/20190104_rose3.png); */
  background-size: 100% 100%;
}
html,
body,
#flower {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
