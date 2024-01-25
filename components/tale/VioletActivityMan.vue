<template>
  <div class="flex flex-col py-4 px-4 bg-violet-800">
    <div class="flex flex-col gap-2 violet-bg relative px-4 py-8 rounded-lg">
      <span class="italic text-sm" v-for="(line, i) in lines[lang]" :key="i">
        {{ line }}
      </span>
      <img class="w-36" src="@/assets/images/tale/arnold-sign.png" alt="" />
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
          "As a cold person, I often see this world in the lens of skepticism. But when Gaby comes to my life, I learn a lot of things to see this world in warmth, love, and gentleness",
          "Her feelings is as soft as silk. Her heart is full of kindness, and her constant action to put a sincere care melts my heart. Not only towards me as her partner, but she also has a soft spot towards people. Through that gentleness, I'm not afraid to open up with her and being vulnerable in her eyes. Gaby is the one who makes me safe, comfortable, and a shoulder to lean on",
          "She is also an amazing listener and full of understanding. In the beginning, it's hard for me - especially as an introverted person - to open myself up. But with Gaby that never judges me and always listen to me, I slowly trust her to tell my life story and my vulnerabilities. She is a lovely listener",
          "It is a miracle from God so I can find someone who sparks the same vibe like Gaby. And without a doubt, after a plenty of journey that we walk together, I choose her to be my lifelong partner. My otter half (pun intended)"
        ],
        ID: [
          "Sebagai seorang yang dingin dan cuek, aku seringkali memandang dunia dengan dingin dan skeptis. Namun dengan hadirnya Gaby di hidupku, aku banyak belajar untuk melihat banyak hal dengan kehangatan, cinta, dan lemah lembut",
          "Perasaan Gaby yang lembut seperti kain sutera, hatinya yang penuh kebaikan, serta kepeduliannya yang terus menerus pelan-pelan meluluhkan hati. Bukan hanya terhadap pasangannya, namun ia juga memiliki perhatian yang sangat lembut terhadap banyak orang. Karena kelemahlembutannya itu, aku tidak takut untuk bersikap terbuka dan lemah di hadapannya karena Gaby merupakan seseorang yang membuatku merasa aman dan nyaman untukku bersandar",
          "Selain itu, ia juga adalah pendengar yang sangat baik dan penuh pengertian. Awalnya sangat sulit bagiku yang tertutup untuk mau membuka diri, tetapi di depan Gaby yang tidak pernah menghakimiku dan mau mendengarkanku bercerita, pelan-pelan aku merasa nyaman untuk menceritakan kisah-kisahku dan membuka diri padanya. Ia adalah seorang pendengar yang baik",
          "Bagiku, merupakan sebuah mujizat dari Tuhan bisa dipertemukan dengan orang yang sefrekuensi denganku seperti Gaby. Dan tak ragu lagi, setelah perjalanan yang telah kita lalui bersama, aku memilihnya untuk menjadi pasangan hidupku. My otter half (pun intended)"
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
  background-image: url("~@/assets/images/tale/violet-5.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>