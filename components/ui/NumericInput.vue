<template>
  <div class="flex flex-col items-center justify-center gap-2 w-full">
    <span class="text-sm">{{ label }}</span>
    <input
      type="number"
      id="numInput"
      :value="value"
      @input="updateValue($event.target.value)"
      class="form-input w-full max-w-xs border-2 border-gray-300 focus:border-black rounded-md text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-0 transition duration-150 ease-in-out"
      placeholder="Number of people (max 10)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    label: String,
  },
  methods: {
    updateValue(value) {
      let numericValue = value === "" ? null : Number(value);
      this.$emit("input", numericValue);
    },
  },
};
</script>

<style>
</style>
