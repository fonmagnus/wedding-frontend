<template>
  <div class="radio-buttons flex w-full justify-between gap-4">
    <label
      v-for="(option, index) in options"
      :key="index"
      class="flex items-center mb-2 border-2 border-black rounded-lg px-3 py-2 transition-all w-1/2"
      :class="[
        {
          'bg-black text-white': option.value === selectedValue,
        },
      ]"
    >
      <input
        type="radio"
        :value="option.value"
        v-model="selectedValue"
        class="radio-button appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-black checked:border-transparent focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer"
      />
      <span class="select-none">
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      default: null,
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  watch: {
    selectedValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>

<style>
/* Add custom styles for the checked state of the radio button */
.radio-button:checked {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%23ffffff"><circle cx="10" cy="10" r="6"/></svg>');
}
</style>
