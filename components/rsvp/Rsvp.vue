<template>
  <div
    class="flex flex-col absolute top-0 h-screen w-full overflow-y-auto z-20 gap-6 px-8 py-10 items-center"
  >
    <h3 class="text-center">Holy Matrimony</h3>

    <div class="w-full">
      <ImageCollection
        :images="[
          'https://images.squarespace-cdn.com/content/5ac85e52266c07e4bc095c2c/1608198796086-SSR4CC21BM2CD9K3IW6S/Aloft_hotel_asian_wedding_ceremony_4b.jpg?content-type=image%2Fjpeg',
          'https://media.istockphoto.com/id/912075632/photo/portrait-of-an-asian-wedding-couple.jpg?s=612x612&w=0&k=20&c=YERAvuPug5EepdMSlf24STS21j7ySwfq9GyBM5b5-Qg=',
          'https://media.istockphoto.com/id/899308396/photo/portrait-of-newlywed-asian-couple.webp?b=1&s=170667a&w=0&k=20&c=LNzuBGreTRGG69MLlM0XpAxIaKGJ-pCXpktbCb3uYac=',
        ]"
      />
    </div>
    <div class="flex flex-col gap-2 items-center text-center px-8 text-sm">
      <!-- <span class="text-xl">Holy Matrimony</span> -->
      <span>
        <span class="fa fa-calendar"></span> &nbsp; Saturday, 4<sup>th</sup> May
        2024
      </span>
      <span> <span class="fa fa-clock"></span> &nbsp; 11.00 - 12.30 WIB </span>
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

    <RsvpForm v-if="invitee.name" @refetchMessages="fetchMessages" />
    <MessageToBride :messages="messages" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
    }),
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      fetch(`${process.env.API_URL}/main/messages`)
        .then((res) => res.json())
        .then((data) => {
          this.messages = data;
        });
    },
  },
};
</script>