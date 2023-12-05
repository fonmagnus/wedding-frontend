<template>
  <div
    v-if="message && message.invitee"
    class="flex flex-col rounded-lg bg-slate-50 p-2"
  >
    <h5 class="font-bold">{{ message.invitee.name }}</h5>
    <h6 class="italic text-sm">{{ message.message }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    message: Object,
  },
};
</script>