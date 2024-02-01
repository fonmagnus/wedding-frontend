<template>
  <div
    id="ocean"
    class="flex flex-col h-full bg-gradient-to-b from-blue-400 via-blue-900 to-blue-900 ocean relative"
  >
    <!-- <h6 class="text-3xl text-white fixed bottom-0">
        {{ depth }}
      </h6> -->
    <h6
      id="current-date-mark"
      class="text-xl left-1/2 -translate-x-1/2 text-white bg-blue-700 w-full text-center py-2 opacity-0"
      :style="{
        position: 'fixed',
        bottom: '0px',
        zIndex: '30',
      }"
    >
      {{ currentIdx >= 0 ? moments[currentIdx].date : "" }}
    </h6>

    <div
      class="flex flex-col gap-4 mx-4 my-36 blue-photo photo-container text-center"
      v-for="(moment, i) in moments"
      :key="i"
    >
      <h6>{{ moment.date }}</h6>
      <ImageCollection :images="moment.photos" orientation="portrait" />
      <h6>
        {{ moment.caption[lang] }} <br />

        <span v-if="moment.subcaption" class="text-xs">
          {{ moment.subcaption[lang] }}
        </span>
      </h6>
    </div>
  </div>
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
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-05-07-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-05-07-2.jpg"),
          ],
          caption: {
            EN: "Memutuskan untuk berpacaran.",
            ID: "Memutuskan untuk berpacaran.",
          },
        },
        {
          date: "21 May 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-05-20-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-05-20-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-05-20-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-05-20-4.jpg"),
          ],
          caption: {
            EN: "Naik bianglala bersama.",
            ID: "Naik bianglala bersama.",
          },
          subcaption: {
            EN: "(baru tahu Bekasi sejauh itu)",
            ID: "(baru tahu Bekasi sejauh itu)",
          },
        },
        {
          date: "June 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-06-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-06-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-06-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-06-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-06-5.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-06-6.jpg"),
          ],
          caption: {
            EN: "Bermain Escape Room bersama di Pandora",
            ID: "Bermain Escape Room bersama di Pandora",
          },
        },
        {
          date: "July 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-07-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-07-2.jpg"),
          ],
          caption: {
            EN: "Gaby terserang Covid sehingga kami tidak bertemu untuk waktu yang lama",
            ID: "Gaby terserang Covid sehingga kami tidak bertemu untuk waktu yang lama",
          },
          subcaption: {
            EN: "(kami berkomunikasi lewat telepon dan surat).",
            ID: "(kami berkomunikasi lewat telepon dan surat).",
          },
        },
        {
          date: "19-22 October 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-10-19-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-19-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-19-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-19-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-19-5.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-19-6.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-19-7.jpg"),
          ],
          caption: {
            EN: "Jalan-jalan keluarga pertama",
            ID: "Jalan-jalan keluarga pertama",
          },
          subcaption: {
            EN: "(kami melihat panda).",
            ID: "(kami melihat panda).",
          },
        },
        {
          date: "24 October 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-10-24-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-10-24-2.jpg"),
          ],
          caption: {
            EN: "Ulang tahun Gaby.",
            ID: "Ulang tahun Gaby.",
          },
        },
        {
          date: "8 November 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-11-8-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-11-8-2.jpg"),
          ],
          caption: {
            EN: "Gaby mengirim surat untuk Arnold melalui kantor pos, hingga saat ini suratnya tidak sampai.",
            ID: "Gaby mengirim surat untuk Arnold melalui kantor pos, hingga saat ini suratnya tidak sampai.",
          },
        },
        {
          date: "6 December 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-12-6.jpg"),
          ],
          caption: {
            EN: "Pandora & Seluncur Es",
            ID: "Pandora & Seluncur Es",
          },
          subcaption: {
            EN: "(Gaby terpacu belajar berjalan di es karena mau mengimbangi Arnold yang bisa ice skating)",
            ID: "(Gaby terpacu belajar berjalan di es karena mau mengimbangi Arnold yang bisa ice skating)",
          },
        },
        {
          date: "7 December 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-12-7-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-12-7-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-12-7-3.jpg"),
          ],
          caption: {
            EN: "Kafe Anjing",
            ID: "Kafe Anjing",
          },
          subcaption: {
            EN: "(Arnold & Gaby senang mengelus bulu binatang yang fluffy dan melihat kelakuan kami yang lucu).",
            ID: "(Arnold & Gaby senang mengelus bulu binatang yang fluffy dan melihat kelakuan kami yang lucu).",
          },
        },
        {
          date: "25 December 2021",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2021-12-25-1.webp"),
            require("~/assets/images/spectrum/blue/activity/2021-12-25-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-12-25-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-12-25-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2021-12-25-5.jpg"),
          ],
          caption: {
            EN: "Natal pertama",
            ID: "Natal pertama",
          },
        },
        {
          date: "1 February 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-02-01-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-02-01-2.jpg"),
          ],
          caption: {
            EN: "Imlek pertama",
            ID: "Imlek pertama",
          },
        },
        {
          date: "14 February 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-02-14-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-02-14-2.jpg"),
          ],
          caption: {
            EN: "Valentine pertama",
            ID: "Valentine pertama",
          },
          subcaption: {
            EN: "(Kami membuat bola-bola cokelat dan mengisi buku aktivitas khusus pasangan).",
            ID: "(Kami membuat bola-bola cokelat dan mengisi buku aktivitas khusus pasangan).",
          },
        },
        {
          date: "April 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-04-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-5.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-6.jpg"),
          ],
          caption: {
            EN: "Arnold berencana pindah ke Singapura karena pekerjaan",
            ID: "Arnold berencana pindah ke Singapura karena pekerjaan",
          },
          subcaption: {
            EN: "(tetapi akhirnya batal walau sudah sedih dan saling menangis).",
            ID: "(tetapi akhirnya batal walau sudah sedih dan saling menangis).",
          },
        },
        {
          date: "27 April 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-04-27-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-27-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-27-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-27-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-04-27-5.jpg"),
          ],
          caption: {
            EN: "Ulang tahun Arnold.",
            ID: "Ulang tahun Arnold.",
          },
        },
        {
          date: "2 May 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-05-02-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-05-02-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-05-02-3.jpg"),
          ],
          caption: {
            EN: "Ziarek bersama umat Stella Maris",
            ID: "Ziarek bersama umat Stella Maris",
          },
        },
        {
          date: "7 May 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-05-07.webp"),
          ],
          caption: {
            EN: "Perayaan hari jadi pertama",
            ID: "Perayaan hari jadi pertama",
          },
          subcaption: {
            EN: "(sejauh ini kami belum pernah merayakan hari jadi).",
            ID: "(sejauh ini kami belum pernah merayakan hari jadi).",
          },
        },
        {
          date: "19 June 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-06-19-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-06-19-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-06-19-3.jpg"),
          ],
          caption: {
            EN: "Kafe kucing",
            ID: "Kafe kucing",
          },
          subcaption: {
            EN: "(kami suka melihat kelakuan kucing yang unik dan sombong). ",
            ID: "(kami suka melihat kelakuan kucing yang unik dan sombong). ",
          },
        },
        {
          date: "25-29 July 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-07-25-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-5.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-6.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-7.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-8.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-9.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-10.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-11.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-07-25-12.jpg"),
          ],
          caption: {
            EN: "Singapore",
            ID: "Singapore",
          },
          subcaption: {
            EN: "(kami mengobrol sampai malam di sungai depan Clarke Quay hingga melewatkan kereta terakhir dan harus berjalan kaki sampai hotel tanpa berbekal peta).",
            ID: "(kami mengobrol sampai malam di sungai depan Clarke Quay hingga melewatkan kereta terakhir dan harus berjalan kaki sampai hotel tanpa berbekal peta).",
          },
        },
        {
          date: "24 October 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-10-24-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-10-24-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-10-24-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-10-24-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-10-24-5.jpg"),
          ],
          caption: {
            EN: "Ulang tahun Gaby dan Kencan ke Aquarium",
            ID: "Ulang tahun Gaby dan Kencan ke Aquarium",
          },
        },
        {
          date: "December 2022",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2022-12-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-12-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-12-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2022-12-4.jpg"),
          ],
          caption: {
            EN: "Ke Bandung",
            ID: "Ke Bandung ",
          },
        },
        {
          date: "March 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-03-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-03-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-03-3.jpg"),
          ],
          caption: {
            EN: "Tiba-tiba pergi ke Henshin",
            ID: "Tiba-tiba pergi ke Henshin",
          },
          subcaption: {
            EN: "(tidak ada momen khusus).",
            ID: "(tidak ada momen khusus).",
          },
        },
        {
          date: "27 April 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-04-27-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-04-27-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-04-27-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-04-27-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-04-27-5.jpg"),
          ],
          caption: {
            EN: "Ulang tahun Arnold",
            ID: "Ulang tahun Arnold",
          },
          subcaption: {
            EN: "(Sengaja ke Angus Plaza Indonesia demi bertemu Mbak Pelayan dengan ingatan fotografis ini).",
            ID: "(Sengaja ke Angus Plaza Indonesia demi bertemu Mbak Pelayan dengan ingatan fotografis ini).",
          },
        },
        {
          date: "May 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-05-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-5.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-6.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-7.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-8.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-9.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-10.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-11.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-12.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-13.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-14.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-15.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-16.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-17.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-05-18.jpg"),
          ],
          caption: {
            EN: "Pergi naik kapal pesiar dan Keliling Singapura.",
            ID: "Pergi naik kapal pesiar dan Keliling Singapura.",
          },
        },
        {
          date: "June 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-06-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-06-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-06-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-06-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-06-5.jpg"),
          ],
          caption: {
            EN: "Kafe Anjing",
            ID: "Kafe Anjing",
          },
          subcaption: {
            EN: "(kami suka melihat binatang).",
            ID: "(kami suka melihat binatang).",
          },
        },
        {
          date: "28 June 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-06-27.jpg"),
          ],
          caption: {
            EN: "Bu Nanik",
            ID: "Bu Nanik",
          },
          subcaption: {
            EN: "(Tak sengaja bertemu dan diajak berfoto oleh Bu Nanik).",
            ID: "(Tak sengaja bertemu dan diajak berfoto oleh Bu Nanik).",
          },
        },
        {
          date: "16 September 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-09-16-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-16-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-16-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-16-4.jpg"),
          ],
          caption: {
            EN: "Jalan-jalan ke gunung.",
            ID: "Jalan-jalan ke gunung.",
          },
        },
        {
          date: "24 September 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-09-24-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-5.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-6.png"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-7.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-09-24-8.jpg"),
          ],
          caption: {
            EN: "Van Gogh & Jakarta Aquarium",
            ID: "Van Gogh & Jakarta Aquarium",
          },
          subcaption: {
            EN: "(Jalan-jalan bersama Mami Gaby).",
            ID: "(Jalan-jalan bersama Mami Gaby).",
          },
        },
        {
          date: "24 October 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-10-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-10-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-10-3.jpg"),
          ],
          caption: {
            EN: "Ulang Tahun Gaby",
            ID: "Ulang Tahun Gaby",
          },
          subcaption: {
            EN: "(Ditemani oleh Le Petit Chef)",
            ID: "(Ditemani oleh Le Petit Chef)",
          },
        },
        {
          date: "5 November 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-11-4-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-4-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-4-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-4-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-4-5.jpg"),
          ],
          caption: {
            EN: "Sunset Dinner",
            ID: "Sunset Dinner",
          },
          subcaption: {
            EN: "(Seharusnya makan di taman ditemani Alpaca, tapi hujan ☹)",
            ID: "(Seharusnya makan di taman ditemani Alpaca, tapi hujan ☹)",
          },
        },
        {
          date: "25-26 November 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-11-25-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-25-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-25-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-25-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-11-25-5.jpg"),
          ],
          caption: {
            EN: "Ziarah Rekreasi ke Semarang",
            ID: "Ziarah Rekreasi ke Semarang",
          },
        },
        {
          date: "8-10 December 2023",
          photos: [
            require("~/assets/images/spectrum/blue/activity/2023-12-8-1.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-12-8-2.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-12-8-3.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-12-8-4.jpg"),
            require("~/assets/images/spectrum/blue/activity/2023-12-8-5.jpg"),
          ],
          caption: {
            EN: "Ret-ret ke Biara",
            ID: "Ret-ret ke Biara",
          },
          subcaption: {
            EN: "(Arnold melamar Gaby di Gua Maria)",
            ID: "(Arnold melamar Gaby di Gua Maria)",
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