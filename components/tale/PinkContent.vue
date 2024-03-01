
<template>
  <div
    class="flex flex-col h-full w-full items-center bg-pink-300 py-8 gap-6 text-black overflow-y-auto overflow-x-hidden"
  >
    <div class="w-full fixed top-0 bg-pink-300 py-3 z-20">
      <h3 class="text-center">PINK</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/pink/DSC07496 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC07523 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC07533 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC07555 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC08980 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC08992 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC09014 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC09022 Large.jpeg'),
            require('~/assets/images/spectrum/pink/IMG_20240128_213238 Large.jpeg'),
            require('~/assets/images/spectrum/pink/DSC07478 Large.jpeg'),
          ]"
        />
      </div>

      <div class="flex flex-col gap-2 px-4">
        <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
          {{ poem }}
        </h3>
      </div>

      <SwipeDown :page="page" :on-page="3" variant="pink" />
    </div>

    <div
      v-for="(_content, j) in content"
      :key="j"
      class="flex flex-col gap-2 px-4"
      :class="[]"
      :id="_content.hasCustom ? 'blue-activity' : ''"
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
      <div v-if="_content.hasCustom" class="flex flex-col">
        <PinkActivity v-if="_content.componentName === 'pink-activity'" />
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
          :name="`pink-content-image-${i}`"
        />
      </div>
    </div>
    <Swipe @enter="$emit('endTale')" />
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
        "Sweetness of our intimacy breed blossoms in pink",
        "Reminiscence flows as we're only just blink",
        "Melody that resonates in a way we never think",
        "Into a profound contentment we slowly sink",
        "The mementos we collect makes us forever be linked",
      ],

      contentSectionTitle: [
        {
          EN: "PINK",
          ID: "Pink",
        },
        {
          EN: "Give Some Love",
          ID: "Berikan Sejumlah Cinta",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "A Sincere Love",
          ID: "Cinta dan Kasih Sayang yang Tulus",
        },
        {
          EN: "A true love is infinite, beyond time and space",
          ID: "Cinta sejati tak terbatas, melampaui waktu dan ruang",
        },
      ],

      content: [
        {
          prologue: {
            EN: "The days passed make us realized how we meant for each other. Memories are knitted down, canvas filled with more colors. The absence of it makes something is missing. It is love that transcends more than just a mere interests.",
            ID: "Hari-hari yang berlalu membuat kami semakin menyadari pentingnya arti satu sama lain. Satu per satu memori terajut, kanvas terisi dengan semakin banyak warna. Tanpanya, ada sesuatu yang kurang. Perasaan cinta dan sayang hadir lebih dalam dari sekadar ketertarikan.",
          },
          children: [],
          epilogue: {},
          images: [
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07474 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07498 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07546 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07559 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07589 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/IMG_20240128_213333 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07511 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/DSC07542 Large.jpeg"),
            require("~/assets/images/spectrum/pink/Bawah (Portrait)/IMG_20240301_211943 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "Tap this heart below to give us some love",
            ID: "Ketuk hati di bawah ini untuk memberi cinta bagi kami",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "pink-activity",
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
