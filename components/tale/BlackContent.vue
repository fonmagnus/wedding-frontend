<template>
  <div
    class="flex flex-col h-full w-full items-center bg-black py-8 text-white gap-6 overflow-auto"
  >
    <div class="w-full fixed top-0 bg-black py-4 z-20">
      <h3 class="text-center">BLACK</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <img
        src="@/assets/images/tale/foot.png"
        alt=""
        class="w-36 object-fit absolute top-12 left-1/2 -translate-x-1/2"
      />
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/black/Atas/DSC08914 Large.jpeg'),
            require('~/assets/images/spectrum/black/Atas/DSC09238 Large.jpeg'),
            require('~/assets/images/spectrum/black/Atas/DSC09248 Large.jpeg'),
            require('~/assets/images/spectrum/black/Atas/Picsart_24-01-29_06-38-34-350 Large.jpeg'),
            require('~/assets/images/spectrum/black/Atas/Picsart_24-01-29_06-59-36-511 Large.jpeg'),
          ]"
        />
      </div>

      <div class="flex flex-col gap-2 px-4">
        <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
          {{ poem }}
        </h3>
      </div>

      <SwipeDown :page="page" :on-page="2" variant="black" />
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
      <ImageCollection
        v-if="_content.images && _content.images.length > 0"
        :images="_content.images"
      />
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
      hasScrolledDown: false,
      poemLines: [
        "I remember the times when the landscape was flooded in black",
        "An unsung past chimes in a dull flashback",
        "When the bland taste of life causes futility to attack",
        "Desolation where the heart asked for what's lacked",
        "Where soul scattered, mind dispersed, and heart cracked",
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
          EN: "A sea of emptiness",
          ID: "Lautan kekosongan",
        },
      ],

      content: [
        {
          prologue: {
            EN: "Just like a symphony of spectrum that has many stories to tell, so do our love story. These themes were brought upon our marriage concept which uses 9 different colors that merge into one. In this journey, each color strikes its own beauty in the blank canvas of our story",
            ID: "Seperti simfoni spektrum warna yang memiliki banyak kisah untuk diceritakan, begitu pula dengan kisah kami. Hal inilah yang diusung dalam konsep pernikahan kami yang menggunakan 9 warna berbeda. Dalam perjalanannya, satu per satu warna berpadu menghiasi kanvas yang semula kosong",
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
              ID: "🧡 **Jingga** : kebimbangan dan keyakinan",
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
              ID: "💙 **Biru** : kepercayaan dan kedalaman",
            },
            {
              EN: "💜 **Violet** : elegance and beauty",
              ID: "💜 **Ungu** : elegan dan keindahan",
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
            EN: "In tones of rainbow and joyful light, the stroke of a love brush draws in our canvas as we draw it together. Every color has a poem that visualize our emotions toward its meaning. Each line of the poem is designed with rhyming words",
            ID: "Sesuai dengan warna pelangi dan cahaya, kuas cinta melukis kanvas kami sebagaimana kami melukisnya. Setiap warna memiliki puisi yang menggambarkan suasana perasaan yang berhubungan dengan makna warna tersebut. Bait per bait puisi dirangkai dengan rima yang sama dalam bahasa inggris",
          },
          images: [
            require("~/assets/images/spectrum/black/Bawah/DSC09231 Large.jpeg"),
            require("~/assets/images/spectrum/black/Bawah/DSC09257 Large.jpeg"),
            require("~/assets/images/spectrum/black/Bawah/DSC09279 Large.jpeg"),
            require("~/assets/images/spectrum/black/Bawah/DSC09289 Large.jpeg"),
            require("~/assets/images/spectrum/black/Bawah/DSC09293 Large.jpeg"),
            require("~/assets/images/spectrum/black/Bawah/DSC09324 Large.jpeg"),
          ],
        },

        {
          prologue: {
            EN: "The hashtag uses the anagram of our name (Arnold Ardianto & Gabrielle Agatha).",
            ID: "Hashtag tersusun dari anagram nama kami berdua (Arnold Ardianto & Gabrielle Agatha).",
          },

          children: [
            {
              EN: "A Tale Galore: Means a lot of stories in our relationship journey",
              ID: "A Tale Galore: Sebuah kisah yang berlimpah",
            },
            {
              EN: "In A Grand Bridal Oath: Those stories shaped us to a marriage life that starts with the wedding vow",
              ID: "In A Grand Bridal Oath: yang digenapi lewat janji pernikahan",
            },
          ],

          epilogue: {
            EN: "The converging letters (A Tale Galore) that comes from our name means of a previously two separated lives that is united through the sacred marriage (A Grand Bridal Oath)",
            ID: "Huruf-huruf acak (A Tale Galore) yang digabungkan memaknai dua kehidupan terpisah yang disatukan dalam ikatan pernikahan kudus (A Grand Bridal Oath)",
          },
        },

        {
          prologue: {
            EN: "Once upon a time, two souls are separated live their own lives. The monotonous and bland routines, wounds, and grief. Black emphasized vagueness, sorrows, and nothingness. Life of these two souls feel so bland before love comes and give its meaning",
            ID: "Pada suatu ketika, kedua manusia terpisah menjalani bagian kehidupannya masing-masing. Rutinitas sehari-hari yang monoton, luka, dan duka. Hitam menggambarkan kehampaan, ketiadaan. Hidup dua insan terasa hambar sebelum cinta datang memberi makna",
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
