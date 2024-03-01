<template>
  <div
    class="flex flex-col h-full w-full items-center bg-green-700 py-8 text-white gap-6 overflow-y-auto overflow-x-hidden"
  >
    <div class="w-full fixed top-0 bg-green-700 py-3 z-20">
      <h3 class="text-center">GREEN</h3>
    </div>
    <div
      class="w-full flex flex-col min-h-[96dvh] justify-center gap-8 relative"
    >
      <div class="w-full">
        <ImageCollection
          :images="[
            require('~/assets/images/spectrum/green/DSC07423 Large.jpeg'),
            require('~/assets/images/spectrum/green/DSC07705 Large.jpeg'),
            require('~/assets/images/spectrum/green/DSC07715 Large.jpeg'),
            require('~/assets/images/spectrum/green/DSC09423 Large.jpeg'),
            require('~/assets/images/spectrum/green/IMG_20240129_151016 Large.jpeg'),
          ]"
        />
      </div>

      <div class="flex flex-col gap-2 px-4">
        <h3 v-for="(poem, i) in poemLines" :key="i" class="italic text-sm">
          {{ poem }}
        </h3>
      </div>

      <SwipeDown :page="page" :on-page="3" variant="green" />
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
        <GreenActivity />
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
          :name="`green-content-image-${i}`"
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
        "With hope, we wander in a meadow with scenery of green",
        "Walking with peace as our dream has seen",
        "A sense of home as it always has been",
        "Fears vanished, no anguish, only serene",
        "Your shoulder is a place where I want to lean",
      ],

      contentSectionTitle: [
        {
          EN: "GREEN",
          ID: "Hijau",
        },
        {
          EN: "Help the Groom",
          ID: "Bantu mempelai pria!",
        },
      ],

      contentSectionSubtitle: [
        {
          EN: "It feels like going home",
          ID: "Rasanya Seperti Menemukan Jalan Pulang",
        },
        {
          EN: "to find his bride",
          ID: "untuk pergi ke mempelai wanitanya",
        },
      ],

      content: [
        {
          prologue: {
            EN: "Let's lie down under the comforting tree and a wide sereneful meadow. Green represents moment where we found peace and shelter on each other. Together, we trust that we are made for each other to provide safety and being our true self. Having someone beside ourselves, a hand to hold, and a shoulder to lean on. Our soul find its own way to home",
            ID: "Mari berbaring bersama di bawah keteduhan pohon dan luasnya rumput hijau. Warna ini melambangkan momen di mana kami menemukan kedamaian dan perlindungan. Keyakinan bahwa kami ada untuk satu sama lain memberikan rasa aman untuk menjadi diri sendiri. Ada teman yang duduk di sebelah. Ada tangan untuk digenggam. Ada bahu untuk bersandar. Jiwa kami menemukan jalan untuk pulang ke rumah. ",
          },
          children: [],
          epilogue: {},
          images: [
            require("~/assets/images/spectrum/green/Bawah (Portrait)/PSFix_20240206_091621 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07449 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07761 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07413 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07697 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07723 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07735 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07759 Large.jpeg"),
            require("~/assets/images/spectrum/green/Bawah (Portrait)/DSC07434 Large.jpeg"),
          ],
        },
        {
          prologue: {
            EN: "Love is when we find a way to home. Use an arrow button below to move the groom. Or press 'Give Up' if you want to let the groom find his own way",
            ID: "Cinta adalah dimana kita menemukan jalan untuk kembali ke rumah. Gunakan panah untuk menggerakan mempelai pria. Atau tekan 'Menyerah' kalau kamu ingin membiarkan sang pria mencari jalannya sendiri",
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
