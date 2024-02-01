<template>
  <div
    class="flex flex-col h-full w-full items-center bg-yellow-500 py-8 text-black gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 bg-yellow-500 py-3 z-20">
      <h3 class="text-center">YELLOW</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/yellow/DSC07623 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/DSC07637-1 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/DSC07671 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/DSC07686 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/DSC08029 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/DSC09352 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/PSFix_20240129_172549 Large.jpeg'),
            require('~/assets/images/spectrum/yellow/PSFix_20240130_091331 Large.jpeg'),
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
      <div v-if="_content.hasCustom" class="flex flex-col">
        <YellowActivity />
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
          :name="`yellow-content-image-${i}`"
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
        "From vagueness, a light shines bathed with yellow",
        "While uncertanties cover at what's in tomorrow",
        "Hope appears to erase all sorrow",
        "So doubt is replaced by the joy that follow",
        "Taking leap from a pit down low",
      ],

      contentSectionTitle: [
        {
          EN: "YELLOW",
          ID: "Kuning",
        },
        {
          EN: "Quiz Time!",
          ID: "Waktunya Kuis!",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "Hope is a light that shines in a mist",
          ID: "Harapan yang bersinar di dalam kabut",
        },
        {
          EN: "How well do you know us?",
          ID: "Seberapa baik kamu mengenal kami?",
        },
      ],

      content: [
        {
          prologue: {
            EN: "Even though relationship has many uncertanties, hope never fails to find its place. Yellow represents that through all the fun, joyful, and happy moments, our relationship is filled with laughs and bright moments",
            ID: "Meski hubungan memiliki banyak ketidakpastian, harapan tak pernah gagal menemukan tempatnya. Kuning menggambarkan suatu perasaan dimana melalui masa masa menyenangkan, sukacita, dan bahagia, hubungan kami dipenuhi dengan tawa dan masa masa indah",
          },
          children: [],
          epilogue: {},
          images: [
            require("~/assets/images/spectrum/yellow/Bawah (Portrait)/DSC07605 Large.jpeg"),
            require("~/assets/images/spectrum/yellow/Bawah (Portrait)/DSC07653 Large.jpeg"),
            require("~/assets/images/spectrum/yellow/Bawah (Portrait)/DSC08011 Large.jpeg"),
            require("~/assets/images/spectrum/yellow/Bawah (Portrait)/DSC08022 Large.jpeg"),
            require("~/assets/images/spectrum/yellow/Bawah (Portrait)/DSC09400 Large.jpeg"),
            require("~/assets/images/spectrum/yellow/Bawah (Portrait)/DSC09338 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "Let's test your knowledge about how do you know us better :) We will give you some questions about ourselves and answer it according to what you know",
            ID: "Mari uji pengetahuanmu tentang seberapa baik kamu mengenal kami :) Kami akan memberimu sejumlah pertanyaan tentang kami dan jawablah sesuai yang kamu tahu",
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
