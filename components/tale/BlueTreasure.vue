<template>
  <div class="flex flex-col py-12 px-4 bg-blue-900 items-center justify-center">
    <Swipe @enter="$emit('endTale')" />
  </div>
</template>

<script>
export default {};
</script>