<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <h3 class="text-2xl">Password</h3>
    <input
      v-model="password"
      type="text"
      class="px-4 py-2 rounded-xl focus:outline-none"
      @keyup.enter="authorize"
    />
    <div
      class="
        bg-red-800
        text-white
        hover:bg-red-900
        transition-all
        px-4
        py-2
        rounded-lg
        cursor-pointer
      "
      @click="authorize"
    >
      Enter
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      isAuthorized: false,
    };
  },
  computed: {
    redirectPath() {
      const path = this.$route.query.previousPath;
      return path || this.localePath("/");
    },
  },
  mounted() {
    this.removeAuthorisation();
    this.isAuthorised = this.$passwordProtect.isAuthorised();
  },
  methods: {
    authorize() {
      this.$passwordProtect.authorise(this.password);
      this.isAuthorised = this.$passwordProtect.isAuthorised();
      this.$router.push(this.redirectPath);
    },
    removeAuthorisation() {
      this.$passwordProtect.removeAuthorisation();
      this.isAuthorised = this.$passwordProtect.isAuthorised();
    },
  },
};
</script>