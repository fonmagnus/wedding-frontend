<template>
  <div class="flex flex-col items-center justify-center w-full">
    <span class="text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </span>
    <textarea
      id="message"
      v-model="inputValue"
      @input="updateValue($event.target.value)"
      class="form-textarea h-48 w-full border-2 border-gray-300 focus:border-black rounded-md text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:ring-0 transition duration-150 ease-in-out resize-none"
      placeholder="Type your message here..."
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: String,
  },
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.inputValue = newValue;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
/* Optionally add custom styles or override Tailwind styles here */
</style>
