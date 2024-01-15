<template>
  <intersect @enter="enterHandler" @leave="leaveHandler" :threshold="[0.1]">
    <div
      id="ocean"
      class="flex flex-col h-full bg-gradient-to-b from-blue-400 via-blue-800 to-blue-900 ocean relative"
    >
      <!-- <h6 class="text-3xl text-white fixed bottom-0">
        {{ depth }}
      </h6> -->
      <h6
        id="current-date-mark"
        class="text-xl fixed bottom-0 left-1/2 -translate-x-1/2 text-white opacity-0 bg-blue-700 w-full text-center py-2"
      >
        {{ currentIdx >= 0 ? moments[currentIdx].date : "" }}
      </h6>

      <div
        class="flex flex-col gap-4 mx-4 my-36 blue-photo photo-container"
        v-for="(moment, i) in moments"
        :key="i"
      >
        <img class="h-72" :id="`blue-photo-${i}`" :src="moment.photo" alt="" />
        <h6>{{ moment.caption[lang] }}</h6>
      </div>
    </div>
  </intersect>
</template>

<script>
import { mapGetters } from "vuex";
import Intersect from "vue-intersect";
export default {
  components: {
    Intersect,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  data() {
    return {
      observer: {},
      animateFish: false,
      startY: 0,
      depth: 0,
      prevIdx: -1,
      currentIdx: -1,
      moments: [
        {
          date: "07 May 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Memutuskan untuk berpacaran.",
            ID: "Memutuskan untuk berpacaran.",
          },
        },
        {
          date: "21 May 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Naik bianglala bersama (Note: baru tahu Bekasi sejauh itu).",
            ID: "Naik bianglala bersama (Note: baru tahu Bekasi sejauh itu).",
          },
        },
        {
          date: "July 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Gaby terserang Covid sehingga kami tidak bertemu untuk waktu yang lama (Note: kami berkomunikasi lewat telepon dan surat).",
            ID: "Gaby terserang Covid sehingga kami tidak bertemu untuk waktu yang lama (Note: kami berkomunikasi lewat telepon dan surat).",
          },
        },
        {
          date: "19-22 October 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Jalan-jalan keluarga pertama (Note: kami melihat panda).",
            ID: "Jalan-jalan keluarga pertama (Note: kami melihat panda).",
          },
        },
        {
          date: "24 October 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ulang tahun Gaby.",
            ID: "Ulang tahun Gaby.",
          },
        },
        {
          date: "8 November 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Gaby mengirim surat untuk Arnold melalui kantor pos, hingga saat ini suratnya tidak sampai.",
            ID: "Gaby mengirim surat untuk Arnold melalui kantor pos, hingga saat ini suratnya tidak sampai.",
          },
        },
        {
          date: "6 December 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Pandora & Seluncur Es (Note: Gaby terpacu belajar berjalan di es karena mau mengimbangi Arnold yang bisa ice skating)",
            ID: "Pandora & Seluncur Es (Note: Gaby terpacu belajar berjalan di es karena mau mengimbangi Arnold yang bisa ice skating)",
          },
        },
        {
          date: "7 December 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Kafe Anjing (Note: Arnold & Gaby senang mengelus bulu binatang yang fluffy dan melihat kelakuan kami yang lucu).",
            ID: "Kafe Anjing (Note: Arnold & Gaby senang mengelus bulu binatang yang fluffy dan melihat kelakuan kami yang lucu).",
          },
        },
        {
          date: "25 December 2021",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Natal pertama",
            ID: "Natal pertama",
          },
        },
        {
          date: "1 February 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Imlek pertama",
            ID: "Imlek pertama",
          },
        },
        {
          date: "14 February 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Valentine pertama (Note: Kami membuat bola-bola cokelat dan mengisi buku aktivitas khusus pasangan).",
            ID: "Valentine pertama (Note: Kami membuat bola-bola cokelat dan mengisi buku aktivitas khusus pasangan).",
          },
        },
        {
          date: "April 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Arnold berencana pindah ke Singapura karena pekerjaan (Note: tetapi akhirnya batal walau sudah sedih dan saling menangis).",
            ID: "Arnold berencana pindah ke Singapura karena pekerjaan (Note: tetapi akhirnya batal walau sudah sedih dan saling menangis).",
          },
        },
        {
          date: "27 April 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ulang tahun Arnold.",
            ID: "Ulang tahun Arnold.",
          },
        },
        {
          date: "7 May 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Perayaan hari jadi pertama (Note: sejauh ini kami belum pernah merayakan hari jadi).",
            ID: "Perayaan hari jadi pertama (Note: sejauh ini kami belum pernah merayakan hari jadi).",
          },
        },
        {
          date: "19 June 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Kafe kucing (Note: kami suka melihat kelakuan kucing yang unik dan sombong). ",
            ID: "Kafe kucing (Note: kami suka melihat kelakuan kucing yang unik dan sombong). ",
          },
        },
        {
          date: "25-29 July 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Singapore (Note: kami mengobrol sampai malam di sungai depan Clarke Quay hingga melewatkan kereta terakhir dan harus berjalan kaki sampai hotel tanpa berbekal peta).",
            ID: "Singapore (Note: kami mengobrol sampai malam di sungai depan Clarke Quay hingga melewatkan kereta terakhir dan harus berjalan kaki sampai hotel tanpa berbekal peta).",
          },
        },
        {
          date: "24 October 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ulang tahun Gaby dan Kencan ke Aquarium",
            ID: "Ulang tahun Gaby dan Kencan ke Aquarium",
          },
        },
        {
          date: "December 2022",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ke Bandung",
            ID: "Ke Bandung ",
          },
        },
        {
          date: "March 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Tiba-tiba pergi ke Henshin (Note: tidak ada momen khusus).",
            ID: "Tiba-tiba pergi ke Henshin (Note: tidak ada momen khusus).",
          },
        },
        {
          date: "27 April 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ulang tahun Arnold (Note: Sengaja ke Angus Plaza Indonesia demi bertemu Mbak Pelayan dengan ingatan fotografis ini).",
            ID: "Ulang tahun Arnold (Note: Sengaja ke Angus Plaza Indonesia demi bertemu Mbak Pelayan dengan ingatan fotografis ini).",
          },
        },
        {
          date: "May 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Pergi naik kapal pesiar dan Keliling Singapura.",
            ID: "Pergi naik kapal pesiar dan Keliling Singapura.",
          },
        },
        {
          date: "10 June 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Kafe Anjing (Note: kami suka melihat binatang).",
            ID: "Kafe Anjing (Note: kami suka melihat binatang).",
          },
        },
        {
          date: "28 June 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Bu Nanik (Note: Tak sengaja bertemu dan diajak berfoto oleh Bu Nanik).",
            ID: "Bu Nanik (Note: Tak sengaja bertemu dan diajak berfoto oleh Bu Nanik).",
          },
        },
        {
          date: "29 June 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Kafe Anjing (lagi).",
            ID: "Kafe Anjing (lagi).",
          },
        },
        {
          date: "20 August 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Pandora (Note: kami senang bermain dan beberapa kali menghabiskan seharian untuk main Pandora).",
            ID: "Pandora (Note: kami senang bermain dan beberapa kali menghabiskan seharian untuk main Pandora).",
          },
        },
        {
          date: "16 September 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Jalan-jalan ke gunung.",
            ID: "Jalan-jalan ke gunung.",
          },
        },
        {
          date: "24 September 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Van Gogh & Jakarta Aquarium (Note: Jalan-jalan bersama Mami Gaby).",
            ID: "Van Gogh & Jakarta Aquarium (Note: Jalan-jalan bersama Mami Gaby).",
          },
        },
        {
          date: "24 October 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ulang Tahun Gaby (Note: Ditemani oleh Le Petit Chef)",
            ID: "Ulang Tahun Gaby (Note: Ditemani oleh Le Petit Chef)",
          },
        },
        {
          date: "5 November 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Sunset Dinner (Note: Seharusnya makan di taman ditemani Alpaca, tapi hujan ☹)",
            ID: "Sunset Dinner (Note: Seharusnya makan di taman ditemani Alpaca, tapi hujan ☹)",
          },
        },
        {
          date: "25-26 November 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ziarah Rekreasi ke Semarang",
            ID: "Ziarah Rekreasi ke Semarang",
          },
        },
        {
          date: "3 December 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Sesi 1 Foto Pranikah",
            ID: "Sesi 1 Foto Pranikah",
          },
        },
        {
          date: "8-10 December 2023",
          photo: "https://picsum.photos/200/300",
          caption: {
            EN: "Ret-ret ke Biara (Note: Arnold melamar Gaby di Gua Maria)",
            ID: "Ret-ret ke Biara (Note: Arnold melamar Gaby di Gua Maria)",
          },
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("wheel", this.onTouchHold);
    window.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("touchmove", this.onTouchHold);
    window.addEventListener("touchend", this.onTouchEnd);
    this.animate();
  },
  destroyed() {
    window.removeEventListener("wheel", this.onTouchHold);
    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchmove", this.onTouchHold);
    window.removeEventListener("touchend", this.onTouchEnd);
  },
  watch: {
    depth(val) {
      // return;
      if (val > 0 && val <= 1) {
        this.$gsap.to("#current-date-mark", {
          opacity: 1,
          duration: 1,
        });
      } else {
        this.$gsap.to("#current-date-mark", {
          opacity: 0,
          duration: 1,
        });
      }
    },
  },
  methods: {
    animate() {},
    onTouchStart(e) {
      // if (!this.animateFish) return;
    },
    onTouchHold(e) {
      // if (!this.animateFish) return;

      const ele = document.getElementById("blue-activity");
      const curY = -ele.getBoundingClientRect().y + window.screen.height * 0.25;

      const yNow = Math.max(0, curY);

      const photo = document.querySelectorAll(".photo-container");
      let heightTotal = 0;
      for (let i = 0; i < photo.length; i++) {
        const photoHeight =
          photo[i].offsetHeight +
          parseInt(
            window.getComputedStyle(photo[i]).getPropertyValue("margin-top")
          ) +
          parseInt(
            window.getComputedStyle(photo[i]).getPropertyValue("margin-bottom")
          );
        heightTotal += photoHeight;
      }
      const len = heightTotal;
      const rat = yNow / len;

      const idx = Math.floor(rat * this.moments.length);
      this.depth = rat;
      this.currentIdx = idx;
    },
    onTouchEnd(e) {
      // if (!this.animateFish) return;
    },
    enterHandler() {
      this.animateFish = true;
    },
    leaveHandler() {
      this.animateFish = false;
    },
  },
};
</script>