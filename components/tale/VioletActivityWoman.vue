<template>
  <div class="flex flex-col py-4 px-4 bg-violet-800">
    <div class="flex flex-col gap-2 violet-bg relative px-4 py-8 rounded-lg">
      <span class="italic text-sm" v-for="(line, i) in lines[lang]" :key="i">
        {{ line }}
      </span>
      <img class="w-36" src="@/assets/images/tale/gaby-sign.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      lines: {
        EN: [
          '"The moment I spent together with Arnold increases my happiness, whether we do activities together or just sitting still in silence',
          "There was a saying that we can know someone's true character from how they live. Seeing his daily routine, I can tell that Arnold is an inspiring person that inspires me in so many things. There are lots of things I learnt from him like the way he thinks, his personal development, good habits, and spiritual even though sometimes we have our mutual disagreement toward few things",
          "For me, Arnold can be a mentor/big brother that gives constructive suggestions. He opened my eyes to new ideas toward various problems. On the other hand, sometimes he can becomes so clingy, child-like, warm, and acting weird. It is a special thing for me to have someone that doesn't hesitate to show his vulnerable side by being himself.",
          "He is somebody to talk to when I have something in my mind. Talking with him feels likeseeing myself in the mirror. For me, Arnold is a wonderful person and he didn't have to put any effort to show his goodness within him. Day by day, I become more faithful to choose him as my lifelong partner. This marriage is our new beginning. I trust that with God's help, we are able to walk through it",
        ],
        ID: [
          '"Kebersamaan dengan Arnold menambah kebahagiaan, baik ketika melakukan aktivitas ataupun hanya duduk diam berdua.',
          "Ada yang bilang, kita dapat membaca karakter seseorang dari cara mereka menjalani hidup. Melihat kesehariannya, Arnold adalah sosok inspiratif yang menginspirasiku dalam banyak hal. Banyak hal-hal baik yang kupelajari darinya seperti cara pikir, perkembangan pribadi, kebiasaan baik, serta spiritual meskipun kami tidak selalu sepakat dalam semua hal.",
          "Suatu waktu, Arnold bisa menjadi mentor/kakak yang dewasa ketika membutuhkan saran. Banyak ide baru yang solutif. Namun di sisi lain, ia juga bisa menjadi sosok yang manja, bergantung, hangat, dan bertingkah aneh. Sebuah hal yang spesial ketika ada seseorang yang tak ragu menunjukkan sisi lemahnya dan menjadi dirinya sendiri di depanmu.",
          'Seseorang yang mau bertukar pikiran dan mendengarkan. Terkadang rasanya seperti melihat ke dalam cermin. Bagiku, Arnold adalah sosok yang mengagumkan tanpa ia berusaha untuk menunjukkan kelebihannya. Hari demi hari yang kami lalui, membuatku semakin yakin untuk menjadikannya teman sefrekuensi, teman seumur hidup. Ini adalah permulaan yang baru dalam kehidupan kami dan kami percaya dengan penyertaan Tuhan, kami sanggup."',
        ],
      },
    };
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
};
</script>

<style scoped>
.violet-bg {
  background-image: url("~@/assets/images/tale/violet-2.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>