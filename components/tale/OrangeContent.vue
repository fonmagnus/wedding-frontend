<template>
  <div
    class="flex flex-col h-full w-full items-center bg-orange-600 py-8 text-white gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 bg-orange-600 py-3 z-20">
      <h3 class="text-center">ORANGE</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/orange/DSC08251 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08286 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08305 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08314 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08328 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08335 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08350 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08357 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08423 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC08431 Large.jpeg'),
            require('~/assets/images/spectrum/orange/DSC09411 Large.jpeg'),
          ]"
        />
      </div>

      <div class="flex flex-col gap-2 px-4">
        <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
          {{ poem }}
        </h3>
      </div>

      <SwipeDown :page="page" :on-page="3" variant="orange" />
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
        <OrangeActivity />
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
          :name="`orange-content-image-${i}`"
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
        "It delivered us to a sunset that grows orange",
        "Fondness grew as evening sky dwell in the horizon range",
        "Everything feels so real yet so strange",
        'You asked "will this fragments of our life will never change?"',
        'I smiled, "The presence of your soul can never be exchanged"',
      ],

      contentSectionTitle: [
        {
          EN: "Orange",
          ID: "Oranye",
        },
        {
          EN: "He or She?",
          ID: "He or She?",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "When uncertanties meets faith",
          ID: "Ketika ketidakpastian bertemu iman",
        },
        {
          EN: "Who is the more ...",
          ID: "Siapa yang lebih ...",
        },
      ],

      content: [
        {
          prologue: {
            EN: "Relationship is full of uncertanties. It's a challenging moment for us when we live in the same country yet sometimes feel so far. We live our working life separately so we need to make it work by giving each other time. Only then we face all of the uncertanties with faith that our relationship will eventually grows in its pace",
            ID: "Hubungan cinta penuh dengan ketidakpastian. Saat itu begitu menantang bagi kami ketika meski kami tinggal di kota yang sama, namun terkadang terasa jauh. Dunia kerja kami cukup berbeda sehingga kami memperjuangkan hubungan kami dengan memberi waktu satu sama lain. Ketika kami menghadapi ketidakpastian dengan iman, disitulah hubungan kami bertumbuh sesuai dengan waktunya",
          },
          children: [],
          epilogue: {},
          images: [
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08249 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08293 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08412 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08316 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08263 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08344 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08396 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08394 Large.jpeg"),
            require("~/assets/images/spectrum/orange/Bawah (Portrait)/DSC08406 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "Let's have fun with us. In this game, we will be an otter 🦦. Arnold will be an Otter Boy, Gaby will be an Otter Girl, and you'll give us fishes 🐟. We will give you a question. And for each question, pick the one who is the more suitable with the question.",
            ID: "Ayo kita bersenang-senang. Dalam game ini, kami akan menjadi otter 🦦. Arnold menjadi Otter jantan, Gaby menjadi Otter betina, dan kamu akan memberi kita ikan 🐟. Kita akan memberimu pernyataan dan untuk setiap pernyataannya, pilih salah satu yang lebih cocok.",
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
