<template>
  <div class="flex flex-col relative w-full">
    <HeroImage/>

    <div
      class="flex flex-col justify-between absolute top-0 py-20 text-white items-center h-screen w-full overflow-scroll"
    >
      <div class="flex flex-col gap-4">
        <span class="text-center">The Wedding of</span>

        <div class="flex items-center text-white">
          <h1>(Arnold & Gabrielle)</h1>
        </div>

        <h3 class="text-xs text-center text-white">
          #ATaleGaloreInAGrandBridalOath
        </h3>
      </div>
    </div>
    
    <div class="absolute inset-0 flex flex-col px-8 items-center justify-center gap-2 w-full text-white">
      <div class="flex flex-col items-center">
        <h6 class="">Silakan masukkan nama lengkap Anda</h6>
        <h6 class="text-xs">(Undangan khusus karyawan/ti BCA)</h6>
      </div>
      <input
        v-model="name"
        type="text"
        class="border border-black rounded-md p-2 w-full text-black outline-none"
        placeholder="Nama Lengkap"
      />
      <Button
        class="w-full  text-white bg-black transition-all"
        @click="register"
        @keyup.enter="register"
      >
        <h6>Lihat</h6>
      </Button>

      <h6 v-if="error && error.length" class="text-sm font-black text-red-500">{{ error }}</h6>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: '',
      error: '',
    }
  },
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
    }),
  },
  mounted() {
    if (this.invitee && this.invitee.code) {
      this.$router.replace({ path: '/', query: { code: this.invitee.code } });  
    }
  },
  methods: {
    ...mapActions({
      setInvitee: "data/setInvitee",
    }),
    register() {
      this.error = '';
      if (this.name.length === 0) {
        this.error = 'Mohon memasukkan nama lengkap Anda';
        return;
      }
      fetch(`${process.env.API_URL}/main/register-invitee`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          friend_group: 'BCA'
        })
      })
      .then((res) => res.json())
      .then((data) => {
        this.setInvitee(data);
        this.$router.replace({ path: '/', query: { code: data.code } });  
      });
    }
  }
}
</script>