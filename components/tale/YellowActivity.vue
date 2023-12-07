<template>
  <div class="flex flex-col gap-8 bg-yellow-100 rounded-lg">
    <YellowQuizComponent
      v-if="
        activeQuestion >= 0 &&
        activeQuestion < questions.length &&
        doneFetchingResponses
      "
      :question="questions[activeQuestion]"
      :response="myResponses"
      :no="activeQuestion"
      :has-answered="hasAnswered"
      :answer-is-correct="answerIsCorrect"
      :is-last-question="activeQuestion === questions.length - 1"
      @answer="answerQuestion"
      @proceed="proceedQuestion"
    />
    <YellowQuizResult
      v-if="hasAnsweredAllQuestions"
      :correct-answer-count="correctAnswerCount"
      :question-count="questions.length"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      questions: [],
      myResponses: [],
      activeQuestion: -1,
      doneFetchingResponses: false,
      hasAnswered: false,
      answerIsCorrect: false,
      hasResponded: false,
      correctAnswerCount: 0,
      hasAnsweredAllQuestions: false,
    };
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
      invitee: "data/getInvitee",
    }),
  },
  mounted() {
    this.getQuestions();
    this.getMyResponses();
  },
  methods: {
    getQuestions() {
      fetch(`${process.env.API_URL}/main/activity/yellow`)
        .then((res) => res.json())
        .then((data) => {
          this.questions = data.content;
          this.activeQuestion = 0;
        });
    },

    getMyResponses() {
      fetch(
        `${process.env.API_URL}/main/activity-response/yellow/${this.invitee.code}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.myResponses = data.response ?? [];
          if (this.myResponses.length > 0) {
            this.hasResponded = true;
            this.hasAnswered = true;
            this.activeQuestion = 0;
            this.checkAnswer(
              this.activeQuestion,
              this.getMyAnswer(this.activeQuestion)
            );
          }
        })
        .finally(() => {
          this.doneFetchingResponses = true;
        });
    },
    answerQuestion({ no, answer }) {
      this.myResponses.push({
        slug: this.questions[no].slug,
        answer,
      });
      this.checkAnswer(no, answer);
    },
    checkAnswer(no, answer) {
      const correctAnswer = this.questions[no][this.lang].correct_answer;
      this.hasAnswered = true;
      this.answerIsCorrect = correctAnswer === answer;
      if (this.answerIsCorrect) {
        this.correctAnswerCount += 1;
      }
    },
    proceedQuestion() {
      this.activeQuestion++;
      if (!this.hasResponded) {
        this.hasAnswered = false;
        this.answerIsCorrect = false;
      } else if (this.activeQuestion < this.questions.length) {
        this.checkAnswer(
          this.activeQuestion,
          this.getMyAnswer(this.activeQuestion)
        );
      }

      if (this.activeQuestion === this.questions.length) {
        this.hasAnsweredAllQuestions = true;
        if (!this.hasResponded) {
          this.submitResponses();
        }
      }
    },
    getMyAnswer(no) {
      let result = "";
      this.myResponses.forEach((res) => {
        if (res.slug !== this.questions[no].slug) return;
        result = res.answer;
      });
      return result;
    },
    submitResponses() {
      const formData = {
        lang: this.lang,
        response: this.myResponses,
      };
      fetch(
        `${process.env.API_URL}/main/respond-activity/yellow/${this.$route.query.code}`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          this.myResponses = data.response;
        });
    },
  },
};
</script>