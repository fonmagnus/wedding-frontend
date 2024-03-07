<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center">RSVP Form</h2>
    <form v-if="!formSubmitted" class="flex flex-col gap-2 text-center">
      <span
        >Dear <b class="font-black text-lg">{{ invitee.name }}</b></span
      >
      <span class="text-sm">{{
        lang === "EN"
          ? "Please confirm your attendance by filling up the form below"
          : "Konfirmasi kehadiranmu dengan mengisi form di bawah ini"
      }}</span>

      <Radio
        class="flex justify-center"
        :options="attendanceOptions"
        v-model="formData.is_attended"
      />

      <NumericInput
        v-model="formData.quota"
        :label="lang === 'EN' ? 'Number of People' : 'Jumlah Tamu'"
      />

      <TextArea
        v-model="formData.message"
        :label="
          lang === 'EN' ? 'Drop us your message' : 'Kirimkan pesan untuk kami'
        "
      />

      <Button
        class="border-2 border-black text-white bg-black transition-all"
        @click="submitRsvp"
      >
        <h6>
          {{ lang === "EN" ? "Send Message" : "Kirim Pesan" }}&nbsp;<i
            class="fa fa-paper-plane"
          ></i>
        </h6>
      </Button>
    </form>
    <div v-else class="flex flex-col gap-2">
      <h4>Thanks for filling the form!</h4>
      <span class="text-sm"
        >(if you wish to change your data, please refresh the page)</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      attendanceOptions: [
        { label: `${this.lang === "EN" ? "Attending" : "Hadir"}`, value: true },
        {
          label: `${this.lang === "EN" ? "Not Attending" : "Tidak Hadir"}`,
          value: false,
        },
      ],
      formData: {
        is_attended: true,
        quota: 1,
        message: "",
      },
      formSubmitted: false,
    };
  },
  created() {
    if (!this.invitee) return;
    this.formData = {
      ...this.formData,
      is_attended: this.invitee.is_attended,
      quota: this.invitee.quota,
    };
  },
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
      lang: "data/getLang",
    }),
  },
  methods: {
    ...mapActions({
      setInvitee: "data/setInvitee",
    }),
    submitRsvp() {
      fetch(`${process.env.API_URL}/main/rsvp/${this.$route.query.code}`, {
        method: "POST",
        body: JSON.stringify(this.formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.formSubmitted = true;
          this.setInvitee(data);
          this.$emit("refetchMessages");
        });
    },
  },
};
</script>