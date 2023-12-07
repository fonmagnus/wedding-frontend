<template>
  <div class="radio-buttons grid grid-cols-2 w-full justify-between gap-4">
    <label
      v-for="(option, index) in options"
      :key="index"
      class="flex items-center mb-2 border-2 border-black rounded-lg px-3 py-2 transition-all"
      :class="[
        {
          'bg-black text-white':
            option.value === selectedValue && variant === 'black',
          'bg-yellow-400 text-black border:transparent':
            option.value === selectedValue && variant === 'yellow',
        },
      ]"
    >
      <input
        type="radio"
        :value="option.value"
        v-model="selectedValue"
        class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer"
        :class="[
          {
            'checked:bg-black checked:border-transparent': variant === 'black',
            'radio-button': showRadio,
          },
        ]"
      />
      <span class="select-none">
        <h6>
          {{ option.label }}
        </h6>
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
    variant: {
      type: String,
      default: "black",
    },
    showRadio: {
      type: Boolean,
      default: true,
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
