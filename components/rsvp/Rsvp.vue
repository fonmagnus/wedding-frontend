<template>
  <div
    class="flex flex-col absolute top-0 h-screen w-full overflow-y-auto z-20 gap-6 px-8 py-10 items-center"
  >
    <h3 class="text-center">Holy Matrimony</h3>
    <span class="text-center text-sm italic">{{
      lang === "EN"
        ? "Notes: We only have a holy matrimony and do not host any wedding reception. Thanks for your understanding"
        : "Catatan: Kami hanya mengadakan pemberkatan saja dan tidak mengadakan resepsi nikah. Terima kasih untuk pengertiannya"
    }}</span>

    <div class="w-full">
      <ImageCollection
        :images="[
          require('~/assets/images/spectrum/white/DSC08518 Large.jpeg'),
          require('~/assets/images/spectrum/white/DSC08774 Large.jpeg'),
          require('~/assets/images/spectrum/white/DSC08816 Large.jpeg'),
          require('~/assets/images/spectrum/white/DSC09186 Large.jpeg'),
          require('~/assets/images/spectrum/white/DSC08606 Large.jpeg'),
          require('~/assets/images/spectrum/white/DSC08001 Large.jpeg'),
        ]"
      />
    </div>
    <div class="flex flex-col gap-12 items-center text-center px-8 text-sm">
      <div class="flex flex-col gap-4 items-center text-center text-sm">
        <span>Countdown</span>
        <div class="flex">
          <h6 class="text-2xl">
            <span class="bg-black text-white px-4 py-2 rounded-lg">{{
              countdown.months
            }}</span>
            <span class="text-base">{{
              lang === "EN" ? "months" : "bulan"
            }}</span>
            <span class="bg-black text-white px-4 py-2 rounded-lg">{{
              countdown.days
            }}</span>
            <span class="text-base">{{ lang === "EN" ? "days" : "hari" }}</span>
            <span class="bg-black text-white px-4 py-2 rounded-lg">{{
              countdown.hours
            }}</span>
            <span class="text-base">{{ lang === "EN" ? "hours" : "jam" }}</span>
          </h6>
        </div>
      </div>
      <div class="flex flex-col gap-0.5 items-center text-center text-base">
        <h2>Save the Date</h2>
        <span class="mt-1">
          <span class="fa fa-calendar"></span> &nbsp;
          {{ lang === "EN" ? "Saturday" : "Sabtu" }}, 4<sup>{{
            lang === "EN" ? "th" : ""
          }}</sup>
          {{ lang === "EN" ? "May" : "Mei" }} 2024
        </span>
        <span>
          <span class="fa fa-clock"></span> &nbsp; 11.00 - 12.30 WIB
        </span>
        <span>
          <a
            class="text-blue-600"
            href="https://maps.app.goo.gl/5mCNn4YnmDBN1HZN8"
            target="_blank"
            ><span class="fa fa-location-dot"></span> &nbsp; Stella Maris Pluit
            Catholic Church <br
          /></a>
          <span class="text-xs leading-3">
            Jl. Taman Pluit Permai Timur No. 17, Kel. Pluit, Kec. Penjaringan,
            Kota Jakarta Utara, Prov. DKI Jakarta, Indonesia 14450
          </span>
          <br />
        </span>
      </div>
    </div>
    <WeddingGift />
    <RsvpForm v-if="invitee.name" @refetchMessages="fetchMessages" />
    <MessageToBride :messages="messages" />
    <span class="text-sm text-center"
      >This wedding invitation is made with ❤️ <br />
      by
      <a href="https://kokocoder.com" class="text-blue-500" target="_blank"
        >Kokocoder</a
      ></span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      messages: [],
      countdown: {
        months: 0,
        days: 0,
        hours: 0,
      },
      timer: null,
    };
  },
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
      lang: "data/getLang",
    }),
  },
  mounted() {
    this.fetchMessages();
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  methods: {
    fetchMessages() {
      fetch(`${process.env.API_URL}/main/messages`)
        .then((res) => res.json())
        .then((data) => {
          this.messages = data;
        });
    },
    updateCountdown() {
      const now = this.$moment();
      const targetDate = this.$moment("2024-05-04");
      if (now.isBefore(targetDate)) {
        const duration = this.$moment.duration(targetDate.diff(now));
        let countdownText = "";

        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();

        this.countdown = {
          months,
          days,
          hours,
        };
      } else {
        this.countdown = {
          months: 0,
          days: 0,
          hours: 0,
        };
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>