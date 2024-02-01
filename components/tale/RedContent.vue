<template>
  <div
    class="flex flex-col h-full w-full items-center bg-red-800 py-8 text-white gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 bg-red-800 py-3 z-20">
      <h3 class="text-center">RED</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/red/Atas (Landscape)/DSC07260 Large.jpeg'),
            require('~/assets/images/spectrum/red/Atas (Landscape)/DSC07264 Large.jpeg'),
            require('~/assets/images/spectrum/red/Atas (Landscape)/DSC07280 Large.jpeg'),
            require('~/assets/images/spectrum/red/Atas (Landscape)/DSC07353 Large.jpeg'),
            require('~/assets/images/spectrum/red/Atas (Landscape)/DSC07374 Large.jpeg'),
          ]"
        />
      </div>

      <div class="flex flex-col gap-2 px-4">
        <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
          {{ poem }}
        </h3>
      </div>

      <SwipeDown :page="page" :on-page="3" />
    </div>

    <div
      v-for="(_content, j) in content"
      :key="j"
      class="flex flex-col gap-2 px-4"
    >
      <divider />
      <h2 class="text-center">{{ contentSectionTitle[j][lang] }}</h2>
      <h3 class="text-sm text-center italic font-bold">
        {{ contentSectionSubtitle[j][lang] }}
      </h3>
      <span>{{ _content.prologue[lang] }}</span>
      <ul class="px-4">
        <li v-for="(c, i) in _content.children" :key="i">
          <span v-html="renderedMarkdown(c[lang])"> </span>
        </li>
      </ul>
      <span>{{ _content.epilogue[lang] }}</span>
      <div v-if="_content.hasCustom" class="flex flex-col gap-2">
        <RedMusics />
        <h6 class="text-xs">
          {{
            lang === "EN"
              ? "(or you can always change the music using the music button in the bottom right)"
              : "(atau kamu juga bisa mengganti musik sewaktu-waktu dengan tombol musik di kanan bawah)"
          }}
        </h6>
      </div>
      <div
        v-if="_content.images && _content.images.length > 0"
        class="grid grid-cols-12 gap-4 w-full"
      >
        <ZoomableImage
          v-for="(image, i) in _content.images"
          :key="i"
          :src="image"
          alt=""
          class="h-48 col-span-4"
          :name="`red-content-image-${i}`"
        />
      </div>
    </div>

    <Swipe />
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
        "Until a present came in the form of a living angel that glows red",
        "When affection kindled and passion led",
        "A spark of charm that makes the hungry heart is fed",
        "Connects the tip of our fingers with an invisible thread",
        "When the spell of a thing called love has spread",
      ],

      contentSectionTitle: [
        {
          EN: "Red",
          ID: "Merah",
        },
        {
          EN: "Set the Vibe!",
          ID: "Atur vibes cerita!",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "We fell in love",
          ID: "Kami jatuh cinta",
        },
        {
          EN: "Before you continue...",
          ID: "Sebelum kamu lanjut membaca ...",
        },
      ],

      content: [
        {
          prologue: {
            EN: "Just like a charming and alluring red color, our souls are destined to meet. Through our journey we know each other and decided to paint our canvas with colors. We decided to start a romantic relationship at 7 May 2021",
            ID: "Seperti warna merah yang tajam dan memikat, pertemuan dan masa perkenalan kami memunculkan semangat untuk memulai lembaran baru dan mengisi kanvas kami dengan warna. Kami memutuskan untuk memulai perjalanan cinta kami pada 7 Mei 2021",
          },
          children: [],
          epilogue: {},
          images: [
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07225 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07237 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07284 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07293 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07295 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07303-1 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07324 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07358 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07364 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07386 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/DSC07395 Large.jpeg"),
            require("~/assets/images/spectrum/red/Bawah (Portrait)/PSFix_20240130_111929 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "Reading our love story is personalized for you. Let's set the vibes to read this story according to your music taste and mood. We hope you are able to walk with us to see the kaleidoscope of our love story",
            ID: "Kisah kami dipersonalisasi untukmu. Ayo atur vibes untuk membaca kisah ini sesuai dengan selera mood dari musik yang kamu pilih. Kami berharap kamu bisa menjajaki kisah cinta kami secara lebih mendalam",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
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

<style scoped>
.image-portrait {
  height: auto; /* Adjust height as necessary */
  max-width: 100%; /* Ensures the image is not wider than its container */
}
</style>
