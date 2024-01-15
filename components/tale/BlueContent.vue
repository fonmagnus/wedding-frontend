<template>
  <div
    class="flex flex-col h-full w-full items-center bg-blue-400 pt-8 text-white overflow-y-auto overflow-x-hidden"
  >
    <div class="w-full fixed top-0 bg-blue-400 py-3 z-20">
      <h3 class="text-center">BLUE</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            'https://img.freepik.com/premium-photo/asian-couple-blue-shirt-with-coffee-cup-vintage-camera-picnic-mountain-near-beach-sea-view-happy-smile-face_1286-3059.jpg?w=2000',
            'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Chevanon%20Photography,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1562905719/tmpusd6ix9kstgggl34b.jpg',
            'https://media.istockphoto.com/id/513549946/photo/young-romantic-asian-couple-in-paris-france.jpg?s=612x612&w=0&k=20&c=5yJTBG5Sr7LsPSq7PtniFKCxQiucH5reznvNT_3xelw=',
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
          'bg-blue-900': _content.componentName === 'blue-treasure',
        },
      ]"
      :id="_content.hasCustom ? 'blue-activity' : ''"
    >
      <divider :class="[{ 'px-4': _content.hasCustom }]" />
      <h2 class="text-center">{{ contentSectionTitle[j][lang] }}</h2>
      <h3 class="text-sm text-center italic font-bold">
        {{ contentSectionSubtitle[j][lang] }}
      </h3>
      <span :class="[{ 'px-4': _content.hasCustom }]">{{
        _content.prologue[lang]
      }}</span>
      <ul class="px-4">
        <li v-for="(c, i) in _content.children" :key="i">
          <span v-html="renderedMarkdown(c[lang])"> </span>
        </li>
      </ul>
      <span :class="[{ 'px-4': _content.hasCustom }]">{{
        _content.epilogue[lang]
      }}</span>
      <div v-if="_content.hasCustom" class="flex flex-col">
        <BlueActivity v-if="_content.componentName === 'blue-activity'" />
        <BlueTreasure v-if="_content.componentName === 'blue-treasure'" />
      </div>
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
        "We found tranquility like a sea that surrounds in blue",
        "The calmness makes uncertanties subdue",
        'When we walk you said that "I\'ll be with you"',
        "Overcome sadness with love that's true",
        "Slowly we truly see what we value",
      ],

      contentSectionTitle: [
        {
          EN: "BLUE",
          ID: "Biru",
        },
        {
          EN: "Let's dive",
          ID: "Mari menyelam",
        },
        {
          EN: "After a while ...",
          ID: "Setelah beberapa waktu ...",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "Like a deep sea",
          ID: "Menyelam Lebih Dalam",
        },
        {
          EN: "into a deeper part of our oceans of tale",
          ID: "ke dalam lautan kisah kami ",
        },
        {
          EN: "... we found a treasure",
          ID: "... kami menemukan harta karun",
        },
      ],

      content: [
        {
          prologue: {
            EN: "Blue is often associated with sadness. But for us, blue is the warmest color like a bright sky or glittering ocean in summer. Getting into a deeper part of the sea means discovering a world that we can never find elsewhere. Each day, Arnold and Gaby know each other deeper. Interest transforms into connection. Trust to share something that is invisible on the surface.",
            ID: "Biru sering diasosiasikan dengan kesedihan. Bagi kami, biru adalah warna terhangat, seperti cerahnya langit atau kilaunya lautan biru di musim panas. Menyelami dasar laut berarti menemukan ikan dan makhluk aneh yang tak akan kamu temukan di permukaan. Semakin hari, Arnold dan Gaby lebih mengenal secara mendalam. Ketertarikan berubah menjadi keterikatan. Kepercayaan untuk berbagi sesuatu yang tidak terlihat di permukaan laut. ",
          },
          children: [],
          epilogue: {},
        },
        {
          prologue: {
            EN: "Our story is like a multitude of waterdrops. We want to bring you deeper into the part of our ocean of story. Scroll down to go deeper or swipe left anytime to go to the next page",
            ID: "Kisah kita seperti milyaran tetes air. Kita mau mengajakmu lebih dalam untuk menyelami lautan kisah kami. Geser ke bawah untuk menyelam lebih dalam atau geser halaman ke kiri kapanpun untuk membuka halaman berikutnya",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "blue-activity",
        },
        {
          prologue: {
            EN: "As the time goes by, there are so many things we found and learn. Two people that are nurtured in a different way, having a different nature. But there's also similarities and connection between us that makes our trust grown deeper every day.",
            ID: "Setelah banyak bersama dan berinteraksi, ada banyak hal-hal yang kami temukan dan pelajari. Dua manusia yang dibesarkan secara berbeda, memiliki karakter bawaan yang berbeda pula. Namun, terdapat juga kemiripan dan koneksi di antara kami yang membuat semakin hari, rasa percaya bertumbuh semakin besar dan dalam. ",
          },
          children: [],
          epilogue: {},
          hasCustom: true,
          componentName: "blue-treasure",
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
