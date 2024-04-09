<template>
  <div
    class="flex flex-col relative justify-between px-4 py-4 bg-orange-500 gap-8 h-full"
  >
    <template v-for="(question, i) in questions">
      <h3 v-if="i === activeQuestion" :key="i" class="text-center">
        {{ question[`${lang}_text`] }}
      </h3>
    </template>
    <h3 v-if="activeQuestion === questions.length" class="text-center">
      {{ questionPlaceholder[lang] }}
    </h3>
    <div class="flex justify-center gap-4 items-start">
      <div class="flex flex-col w-1/2 gap-4">
        <div
          id="otter-boy"
          class="flex flex-col relative border rounded-xl border-white p-4 transition-all bg-orange-500"
          @click.stop="giveVote('he')"
        >
          <h2 class="text-2xl text-center">He</h2>
          <img
            id="otter-boy-image"
            src="@/assets/images/tale/otter-boy.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2">
          <h6 class="text-sm" v-for="(item, j) in he" :key="j">
            {{ getRandomFish() }} {{ item[`${lang}_adj`] }}
          </h6>
        </div>
      </div>
      <div class="flex flex-col w-1/2 gap-4">
        <div
          id="otter-girl"
          class="flex flex-col relative border rounded-xl border-white p-4 transition-all bg-orange-500"
          @click.stop="giveVote('she')"
        >
          <h2 class="text-2xl text-center">She</h2>
          <img
            id="otter-girl-image"
            src="@/assets/images/tale/otter-girl.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2">
          <h6 class="text-sm" v-for="(item, j) in she" :key="j">
            {{ getRandomFish() }} {{ item[`${lang}_adj`] }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      questions: [],
      activeQuestion: 0,
      he: [],
      she: [],
      fishes: ["🐟", "🐠", "🐡", "🦈"],
      questionPlaceholder: {
        EN: "Thanks for the fishes! Wuk wuk",
        ID: "Terima kasih ikannya! Wuk wuk",
      },
      formData: {
        response: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
      invitee: "data/getInvitee",
    }),
  },
  mounted() {
    fetch(`${process.env.API_URL}/main/activity/orange`)
      .then((res) => res.json())
      .then((data) => {
        this.questions = data.content;
      });
    
    this.getMyResponses();
  },
  methods: {
    giveVote(to) {
      if (this.activeQuestion === this.questions.length) {
        return;
      }
      if (to == "he") {
        this.$gsap.to("#otter-boy", {
          backgroundColor: "rgb(253 186 116)",
          color: "rgb(194 65 12)",
          duration: 0.2,
        });
        setTimeout(() => {
          this.$gsap.to("#otter-boy", {
            backgroundColor: "transparent",
            color: "white",
            duration: 0.2,
          });
        }, 500);
        const otterBoyImage = document.getElementById("otter-boy-image");
        this.makeHearts(otterBoyImage, "otter-boy", 40, -20);
        this.he.push(this.questions[this.activeQuestion]);
        console.log(this.he);
      }
      if (to == "she") {
        this.$gsap.to("#otter-girl", {
          backgroundColor: "rgb(253 186 116)",
          color: "rgb(194 65 12)",
          duration: 0.2,
        });
        setTimeout(() => {
          this.$gsap.to("#otter-girl", {
            backgroundColor: "rgb(249 115 22)",
            color: "white",
            duration: 0.2,
          });
        }, 500);
        const otterGirlImage = document.getElementById("otter-girl-image");
        this.makeHearts(otterGirlImage, "otter-girl", -10, -20);
        this.she.push(this.questions[this.activeQuestion]);
      }
      this.activeQuestion++;
      if (this.activeQuestion === this.questions.length) {
        this.he.forEach(item => {
          this.formData.response.push({
            slug: item.slug,
            he_or_she: 'he'
          });
        });
        this.she.forEach(item => {
          this.formData.response.push({
            slug: item.slug,
            he_or_she: 'she'
          });
        });

        fetch(
          `${process.env.API_URL}/main/respond-activity/orange/${this.$route.query.code}`,
          {
            method: "POST",
            body: JSON.stringify(this.formData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
      }
    },
    getRandomFish() {
      const idx = Math.floor(Math.random() * this.fishes.length);
      return this.fishes[idx];
    },

    makeHearts(elem, cardId, mx, my) {
      const card = document.getElementById(cardId);
      for (let i = 0; i < 5; i++) {
        const x =
          (elem.getBoundingClientRect().left /
            (elem.getBoundingClientRect().left +
              elem.getBoundingClientRect().right)) *
            100 +
          mx;
        const y =
          (elem.getBoundingClientRect().top /
            (elem.getBoundingClientRect().top +
              elem.getBoundingClientRect().bottom)) *
            100 +
          my;

        const love = document.createElement("div");
        love.style.position = "absolute";
        love.style.top = `${y}%`;
        love.style.left = `${x}%`;
        love.innerText = "❤️";

        setTimeout(() => {
          card.appendChild(love);
          this.$gsap.to(love, { y: -30, opacity: 0, duration: 1 });
        }, i * 1000);
      }
    },

    getMyResponses() {
      fetch(
        `${process.env.API_URL}/main/activity-response/orange/${this.invitee.code}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.formData.response = data.response;
        })
        .finally(() => {
          
        });
    },
  },
};
</script>