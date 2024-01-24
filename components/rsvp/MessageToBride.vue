<template>
  <div class="flex flex-col w-full gap-4">
    <h2 class="text-center text-2xl">Wall of Wishes</h2>
    <div class="flex flex-col w-full gap-2 h-[70vh] overflow-auto">
      <MessageCard
        v-for="(message, i) in messages"
        :key="i"
        :message="message"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: Array,
  },
};
</script>