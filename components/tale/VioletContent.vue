
<template>
  <div
    class="flex flex-col h-full w-full items-center bg-violet-800 py-8 gap-6 text-white overflow-y-auto overflow-x-hidden"
  >
    <div class="w-full fixed top-0 bg-violet-800 py-3 z-20">
      <h3 class="text-center">VIOLET</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/violet/DSC07816 Large.jpeg'),
            require('~/assets/images/spectrum/violet/DSC07794 Large.jpeg'),
            require('~/assets/images/spectrum/violet/DSC07821 Large.jpeg'),
            require('~/assets/images/spectrum/violet/DSC07786 Large.jpeg'),
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
      class="flex flex-col gap-2"
      :class="[
        {
          ' px-4': !_content.hasCustom,
        },
      ]"
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
        <VioletActivityMan
          v-if="_content.componentName === 'violet-activity-arnold'"
        />
        <VioletActivityWoman
          v-if="_content.componentName === 'violet-activity-gaby'"
        />
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
          :name="`violet-content-image-${i}`"
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
        "A mixture of emotions blooms flowers of violet",
        "Emits a blissful scent like intangible droplet",
        "Love comes on its petal drop as its facet",
        'It\'s unfathomable, so you say "this is our little secret?"',
        'And I answered, "Yes!" as we put them inside a casket',
      ],

      contentSectionTitle: [
        {
          EN: "VIOLET",
          ID: "Violet",
        },
        {
          EN: "What he said",
          ID: "Apa yang dikatakan mempelai pria",
        },
        {
          EN: "What she said",
          ID: "Apa yang dikatakan mempelai wanita",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "A Rare and Mysterious Elegance",
          ID: "Keindahan yang Langka dan Misterius",
        },
        {
          EN: "What does Arnold say about Gaby?",
          ID: "Apa yang dikatakan Arnold tentang Gaby?",
        },
        {
          EN: "What does Gaby say about Arnold?",
          ID: "Apa yang dikatakan Gaby tentang Arnold?",
        },
      ],

      content: [
        {
          prologue: {
            EN: "There was a time when no artificial dye has not found, where the color violet is the rarest one and only used by royal families because the difficulties to extract them. Just as the difficulties of how to obtain the violet color in ancient times, our journey is a special one because there's only one soulmate dedicated for us for a lifetime. Yet, by miracle we've found and understood each other, revealing our true self and taking off our mask to each other embracing each other weirdnesses",
            ID: "Pada zaman ketika pewarna buatan belum ditemukan, warna ungu merupakan warna terlangka dan hanya dipakai oleh penguasa kerajaan karena cara pembuatannya yang sulit dan mahal. Kami menganggap perjalanan ini langka dan spesial, karena di antara miliaran manusia hanya ada satu orang seperti itu dan ajaibnya, dapat saling menemukan dan memahami. Kami bisa melepas topeng misterius yang ditunjukkan di luar dan menjadi diri sendiri yang eksentrik.",
          },
          children: [],
          epilogue: {},
          images: [
            require("~/assets/images/spectrum/violet/DSC07784 Large.jpeg"),
            require("~/assets/images/spectrum/violet/DSC07809 Large.jpeg"),
            require("~/assets/images/spectrum/violet/DSC07799 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "",
            ID: "",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "violet-activity-arnold",
        },
        {
          prologue: {
            EN: "",
            ID: "",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "violet-activity-gaby",
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
