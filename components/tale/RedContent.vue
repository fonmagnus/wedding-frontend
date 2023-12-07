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
            'https://img.freepik.com/premium-photo/young-attractive-asian-couple-wearing-red-t-shirt-white-shorts-sitting-man-playing-ukulele-against-white-background-concept-pre-wedding-photography-isolated_102814-716.jpg?w=2000',
            'https://media.istockphoto.com/id/1097021538/photo/happy-asian-chinese-couple-wearing-cheongsam-traditional-red-dress-and-t-shirt-and-looking-on.jpg?s=170667a&w=0&k=20&c=HXddNfdu7v0N0RKBKLmJtLBTRQd2qmFm2tw2gMqrWpU=',
            'https://i.pinimg.com/736x/33/5b/fe/335bfe1d127c0be5b6536f1e0966748c.jpg',
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
        <RedMusics />
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
            EN: "Our journey starts when we meet each other at April 2021. When we get to know each other and our life story, we fell in love with each other and decide to start a romantic relationship at 7 May 2021",
            ID: "Perjalanan kami dimulai ketika kami bertemu bulan April 2021. Ketika kami mengenal satu sama lain dan mendengarkan kisah hidup satu sama lain, kami jatuh cinta dan memutuskan memulai hubungan pacaran di tanggal 7 Mei 2021",
          },
          children: [],
          epilogue: {},
        },
        {
          prologue: {
            EN: "Let's set the vibe for reading our tale so you can read the story that suits your mood best. We hope you can delve deeper into our love story together",
            ID: "Ayo kita atur vibe untuk membaca kisah kita supaya kamu bisa membaca cerita sesuai dengan moodmu. Kami berharap kamu bisa menjajaki kisah cinta kami lebih dalam bersama-sama",
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
