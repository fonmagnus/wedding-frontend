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
