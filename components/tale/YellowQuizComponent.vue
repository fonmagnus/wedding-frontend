<template>
  <div v-if="question" class="flex flex-col gap-12 px-4 py-6 rounded-lg">
    <div class="flex flex-col gap-2">
      <h6 class="text-center text-xl font-black">Question {{ no + 1 }} 🍿</h6>
      <div class="bg-yellow-300 rounded-xl justify-center px-3 py-6">
        <h6 class="text-center">
          {{ question[lang].text }}
        </h6>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div
        v-for="(option, i) in question[lang].options"
        :key="i"
        class="flex justify-between p-3 border border-black rounded-xl transition-all"
        :class="[
          {
            'bg-yellow-400 border-transparent shadow-lg':
              isSelected(option) && optionVariant(option) === 'default',
            'bg-green-700 text-white border-transparent':
              optionVariant(option) === 'correct',
            'bg-red-700 text-white border-transparent':
              optionVariant(option) === 'wrong',
          },
        ]"
        @click.stop="selectOption(option)"
      >
        <h6 class="text-sm">
          {{ option }}
        </h6>
        <h6
          v-if="optionVariant(option) === 'correct'"
          class="fa fa-check-circle text-green-400"
        ></h6>
        <h6
          v-if="optionVariant(option) === 'wrong'"
          class="fa fa-xmark-circle text-red-400"
        ></h6>
      </div>
      <h6 v-if="hasAnswered && answerIsCorrect" class="text-sm mt-2">
        {{
          lang === "EN" ? "Yay! You're right! 🥳" : "Horee jawabanmu benar! 🥳"
        }}
      </h6>
      <h6 v-if="hasAnswered && !answerIsCorrect" class="text-sm mt-2">
        {{
          lang === "EN"
            ? "Uh-oh, you didn't get that right 😞"
            : "Yah, jawabanmu salah 😞"
        }}
      </h6>
      <h6 v-if="hasAnswered" class="text-sm mt-2">
        {{ question[lang].fact }}
      </h6>
    </div>
    <Button
      @click="answerQuestion"
      v-if="selected && !hasSelected"
      class="bg-black text-white"
    >
      <h6 class="font-bold">
        {{ lang === "EN" ? "SUBMIT 🚀" : "JAWAB 🚀" }}
      </h6>
    </Button>

    <Button
      @click="proceedQuestion"
      v-if="hasAnswered"
      class="bg-black text-white"
    >
      <h6 v-if="!isLastQuestion" class="font-bold">
        {{ lang === "EN" ? "Next Question 👉" : "Lanjut 👉" }}
      </h6>
      <h6 v-else class="font-bold">
        {{ lang === "EN" ? "Finish 🏁" : "Selesai 🏁" }}
      </h6>
    </Button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    question: Object,
    response: Array,
    no: Number,
    hasAnswered: Boolean,
    answerIsCorrect: Boolean,
    isLastQuestion: Boolean,
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
  data() {
    return {
      selected: "",
      hasSelected: false,
      options: [],
    };
  },
  mounted() {
    this.question[this.lang].options.forEach((option) => {
      this.options.push({
        label: option,
        value: option,
      });
    });
  },
  methods: {
    isSelected(option) {
      let hasSelected = false;

      if (this.response) {
        this.response.forEach((res) => {
          if (res.slug !== this.question.slug) return;
          if (res.answer === option) hasSelected = res.answer;
        });
      }

      if (hasSelected) {
        this.selected = hasSelected;
        this.hasSelected = true;
        return true;
      }

      return this.selected === option;
    },
    selectOption(option) {
      if (this.hasSelected) return;
      this.selected = option;
    },
    answerQuestion() {
      this.$emit("answer", { no: this.no, answer: this.selected });
    },
    proceedQuestion() {
      this.selected = "";
      this.hasSelected = false;
      this.$emit("proceed");
    },

    optionVariant(option) {
      if (!this.hasAnswered) {
        return "default";
      }

      if (!this.answerIsCorrect && option === this.selected) {
        return "wrong";
      }

      if (
        (this.answerIsCorrect && option === this.selected) ||
        (!this.answerIsCorrect &&
          option === this.question[this.lang].correct_answer)
      ) {
        return "correct";
      }

      return "default";
    },
  },
};
</script>