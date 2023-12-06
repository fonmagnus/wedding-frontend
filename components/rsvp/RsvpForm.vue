<template>
  <div class="flex flex-col">
    <form v-if="!formSubmitted" class="flex flex-col gap-2 text-center">
      <span
        >Dear <b class="font-black">{{ invitee.name }}</b></span
      >
      <span class="text-sm"
        >Please confirm your attendance by filling up the form below</span
      >

      <Radio
        class="flex justify-center"
        :options="attendanceOptions"
        v-model="formData.is_attended"
      />

      <NumericInput v-model="formData.quota" label="Number of People" />

      <TextArea v-model="formData.message" label="Drop us your message" />

      <Button
        class="hover:bg-black hover:text-black border-2 border-black text-white bg-black transition-all"
        @click="submitRsvp"
      >
        <h6>Submit</h6>
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
        { label: "Attending", value: true },
        { label: "Not attending", value: false },
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