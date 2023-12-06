<template>
  <div
    class="flex flex-col h-full w-full items-center bg-black py-8 text-white gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 bg-black py-4 z-20">
      <h3 class="text-center">BLACK</h3>
    </div>
    <div class="w-full">
      <ImageCollection
        :images="[
          'https://miro.medium.com/v2/resize:fit:1400/1*NvQM_lGjGcd0ER4LMJKcoQ.jpeg',
          'https://images.unsplash.com/photo-1543495843-1a119fbbb2fe?q=80&w=1000',
        ]"
      />
    </div>

    <div class="flex flex-col gap-2 px-4">
      <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
        {{ poem }}
      </h3>
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
    </div>
    <Swipe />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MarkdownIt from "markdown-it";
export default {
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  data() {
    return {
      poemLines: [
        "I remember the times when the landscape was flooded in black",
        "An unsung past chimes in a dull flashback",
        "When the bland taste of life causes futility to attack",
        "Desolation where the heart asked for what's lacked",
        "Where soul scettered, mind dispersed, and heart cracked",
      ],

      contentSectionTitle: [
        {
          EN: "Philosophy",
          ID: "Filosofi",
        },
        {
          EN: "Wedding Hashtag",
          ID: "Tagar (Hashtag) Pernikahan",
        },
        {
          EN: "Black",
          ID: "Hitam",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "The Theme",
          ID: "Konsep dan Tema",
        },
        {
          EN: "#ATaleGaloreInAGrandBridalOath",
          ID: "#ATaleGaloreInAGrandBridalOath",
        },
        {
          EN: "Meaning of Black",
          ID: "Makna Hitam",
        },
      ],

      content: [
        {
          prologue: {
            EN: "The main concept of our wedding is a spectrum of colors. Where we use 9 different colors to represent the story in our relationships",
            ID: "Konsep utama dari tema pernikahan kami adalah spektrum warna. Dimana kami menggunakan 9 warna berbeda untuk menggambarkan cerita yang penuh warna dalam hubungan cinta kami",
          },
          children: [
            {
              EN: "🖤 **Black** : blandness dan vagueness",
              ID: "🖤 **Hitam** : kehambaran dan kekosongan",
            },
            {
              EN: "❤️ **Red** : passion and spark",
              ID: "❤️ **Merah** : gairah dan semangat",
            },
            {
              EN: "🧡 **Orange** : faith and uncertainty",
              ID: "🧡 **Jingga** : keyakinan dan ketidakpastian",
            },
            {
              EN: "💛 **Yellow** : hope and joy",
              ID: "💛 **Kuning** : harapan dan sukacita",
            },
            {
              EN: "💚 **Green** : peace and comfort",
              ID: "💚 **Hijau** : kedamaian dan kenyamanan",
            },
            {
              EN: "💙 **Blue** : trust and tranquility",
              ID: "💙 **Biru** : kepercayaan dan ketenangan",
            },
            {
              EN: "💜 **Violet** : elegance and beauty",
              ID: "💜 **Ungu** : keindahan dan kecantikan",
            },
            {
              EN: "💖 **Pink** : love and affection",
              ID: "💖 **Pink** : cinta dan kasih sayang",
            },
            {
              EN: "🤍 **White** : holiness and sacred",
              ID: "🤍 **Putih** : kesucian dan kekudusan",
            },
          ],
          epilogue: {
            EN: "Each color have a poem that resembles the state of our feeling related to the color. The poem is designed to be rhymed with the color theme",
            ID: "Setiap warna memiliki puisi yang menggambarkan kondisi suasana hati yang berhubungan dengan warna tersebut. Bait di setiap puisi dibuat berima dalam bahasa inggris sesuai dengan warna tersebut",
          },
        },

        {
          prologue: {
            EN: "The hashtag uses the anagram of our name (Arnold Ardianto & Gabrielle Agatha). Anagram is a sentence that composed with the same letters",
            ID: "Hashtag tersusun dari anagram nama kami berdua (Arnold Ardianto & Gabrielle Agatha). Anagram adalah kalimat yang memiliki huruf penyusun yang sama",
          },

          children: [
            {
              EN: "A Tale Galore: Means a lot of stories in our relationship journey",
              ID: "A Tale Galore: Banyak kisah dan cerita dalam hubungan kami",
            },
            {
              EN: "In A Grand Bridal Oath: Those stories shaped us to a marriage life that starts with the wedding vow",
              ID: "In A Grand Bridal Oath: Kisah itu membentuk kami dalam menuju hubungan pernikahan kami yang diawali dengan janji pernikahan",
            },
          ],

          epilogue: {
            EN: "The letter union from our name resembles our life that previously separated now have become one through marriage",
            ID: "Penggabungan huruf huruf dari nama kami bermakna hidup kami yang tadinya terpisahkan sekarang menjadi satu melalui pernikahan",
          },
        },

        {
          prologue: {
            EN: "Black resembles the color when life feels dull and bland before love give its meaning. When we busy to work with routines and daily lives day by day.",
            ID: "Hitam menggambarkan warna ketika hidup terasa membosankan dan hambar sebelum cinta memberinya makna. Ketika kami sibuk bekerja dan menjalankan kegiatan sehari-hari dengan biasa",
          },
          children: [],
          epilogue: {},
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
