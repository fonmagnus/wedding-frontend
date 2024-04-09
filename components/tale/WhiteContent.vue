
<template>
  <div
    class="flex flex-col h-full w-full items-center bg-gray-200 py-8 gap-6 text-black overflow-y-auto overflow-x-hidden"
  >
    <div class="w-full fixed top-0 bg-gray-200 py-3 z-20">
      <h3 class="text-center">WHITE</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <FallingFlower class="opacity-70" />
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/white/DSC07942 Large.jpeg'),
            require('~/assets/images/spectrum/white/PSFix_20240129_165637.jpg'),
            require('~/assets/images/spectrum/white/DSC08005 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC08516 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC08707 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC08002 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC08739 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC09162 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC08003 Large.jpeg'),
            require('~/assets/images/spectrum/white/DSC08813 Large.jpeg'),
          ]"
        />
      </div>

      <div class="flex flex-col gap-2 px-4">
        <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
          {{ poem }}
        </h3>
      </div>
      
      <SwipeDown :page="page" :on-page="3" variant="white" />
    </div>

    <div
      v-for="(_content, j) in content"
      :key="j"
      class="flex flex-col gap-2 w-full"
    >
      <FallingFlower class="opacity-70" />
      <divider class="px-4" />
      <h2 class="text-center px-4">{{ contentSectionTitle[j][lang] }}</h2>
      <h3 class="text-sm text-center italic font-bold px-4">
        {{ contentSectionSubtitle[j][lang] }}
      </h3>
      <span class="px-4">{{ _content.prologue[lang] }}</span>
      <ul class="px-4">
        <li v-for="(c, i) in _content.children" :key="i">
          <span v-html="renderedMarkdown(c[lang])"> </span>
        </li>
      </ul>
      <span class="px-4">{{ _content.epilogue[lang] }}</span>
      <div v-if="_content.hasCustom" class="flex flex-col px-4">
        <WhiteActivity v-if="_content.componentName === 'white-activity'" />
        <WhiteBride v-if="_content.componentName === 'white-bride'" />
      </div>
      <div
        v-if="_content.images && _content.images.length > 0"
        class="grid grid-cols-12 gap-4 w-full px-4"
      >
        <ZoomableImage
          v-for="(image, i) in _content.images"
          :key="i"
          :src="image"
          alt=""
          class="h-48 col-span-4"
          :name="`white-content-image-${i}`"
        />
      </div>
    </div>

    <div class="flex flex-col px-8 w-full gap-4">
      <divider class="px-4" />
      <h2 class="text-center px-4">
        🌹 {{ lang === "EN" ? "We Invite You" : "Kami Mengundangmu" }} 🌹
      </h2>
      <h3 class="text-sm text-center italic font-bold px-4">
        {{
          lang === "EN"
            ? "To follow the peak of our love tale"
            : "Untuk mengikuti puncak dari kisah cinta kami"
        }}
      </h3>
      <span class="px-4">{{
        lang === "EN"
          ? "We would be very eager for you to attend our wedding ceremony by clicking the RSVP button below to confirm your attendance and write your best wishes for us 👇👇"
          : "Kami dengan senang menunggu kehadiranmu dalam pesta pernikahan kami dengan mengeklik tombol RSVP dibawah ini untuk mengkonfirmasi kehadiranmu 👇👇"
      }}</span>
      <Button
        class="mt-8 w-full border border-black hover:bg-white text-white bg-black hover:text-black px-4 transition-all"
        @click="$router.push(`/rsvp?code=${$route.query.code}`)"
      >
        <h6>RSVP</h6>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MarkdownIt from "markdown-it";
export default {
  props: {
    page: Number,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  data() {
    return {
      poemLines: [
        "The spectrums we walk upon merge into a bright white",
        "Captivated by journey that comes into the light",
        "Its beauty fascinates the sight",
        "Like stars shine upon the darkest night",
        "Today we decide to hold each others tight",
        "",
        'I look into your face within the veil and said "how beautiful is my bride"',
        'You replied "I\'m glad that I stand by your side"',
        "An everlasting covenant is sealed within the sacred rite",
        "Our fleshes, our minds, our hearts, our souls will forever be abide",
      ],

      contentSectionTitle: [
        {
          EN: "WHITE",
          ID: "Putih",
        },
        {
          EN: "Thank you",
          ID: "Terima kasih",
        },
        {
          EN: "The Wedding of",
          ID: "Pernikahan dari",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "Where the journeys in all color spectrums united in the Holy Matrimony",
          ID: "Seluruh Kisah pada Spektrum Warna Bergabung dalam Janji Pernikahan yang Kudus",
        },
        {
          EN: "For being the witness of our everlasting love story",
          ID: "Karena telah menjadi saksi atas kisah cinta kami yang tiada akhir",
        },
        {
          EN: "the happy Husband and Wife to be",
          ID: "calon pasangan Suami-Istri yang berbahagia",
        },
      ],

      content: [
        {
          prologue: {
            EN: "The colorful tales united to create beauty in the blank canvas. All colors and the frequencies form a white light. The symphony of colorful tales is forever sealed in the holy matrimony",
            ID: "Warna-warna tersebut bergabung menghiasi kanvas yang semula kosong. Semua warna dan frekuensi spektrum membentuk cahaya putih. Simfoni spektrum warna penuh cerita yang disatukan dalam satu ikatan pernikahan yang suci dan kudus.",
          },
          children: [],
          epilogue: {},
          images: [
            // require("~/assets/images/spectrum/white/Portrait/DSC07939 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC07940 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/PSFix_20240130_091733 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC07988 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC07986 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC07998 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC08626 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC08618 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC08730-1 Large.jpeg"),
            require("~/assets/images/spectrum/white/Portrait/DSC08827 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "True love is like how God loves His Church. One and everlasting",
            ID: "Cinta sejati itu seperti bagaimana Tuhan mengasihi Gereja-Nya. Satu dan selamanya",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "white-activity",
        },
        {
          prologue: {
            EN: "",
            ID: "",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "white-bride",
        },
      ],
    };
  },

  methods: {
    renderedMarkdown(message) {
      const md = new MarkdownIt({
        html: true,
      });
      return md.render(message);
    },
  },
};
</script>
