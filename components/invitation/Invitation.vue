<template>
  <div
    class="flex flex-col absolute top-0 h-screen w-full overflow-auto items-center justify-between gap-4 px-8 py-10"
  >
    <div class="flex flex-col text-center">
      <span>Dear Our Beloved,</span>
      <h4 class="text-2xl italic">
        {{ invitee && invitee.name ? invitee.name : "Guest" }}
      </h4>
      <span class="text-sm mt-4" v-html="renderedMarkdown"></span>
    </div>

    <div class="flex flex-col gap-2 w-full">
      <Button
        class="w-full border border-white hover:bg-black transition-all"
        @click="$router.push(`tale?code=${$route.query.code}`)"
      >
        <h6>Our Tale</h6>
      </Button>
      <Button
        class="w-full border border-white hover:bg-black transition-all"
        @click="$router.push(`rsvp?code=${$route.query.code}`)"
      >
        <h6>RSVP</h6>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MarkdownIt from "markdown-it";

const defaultMessage = `We are very happy to have you attend to our Holy Matrimony.
<br/><br/>
Your presence is really appreciated and shows support for our marriage life that soon will come
`;

export default {
  data() {
    return {
      defaultMessage,
    };
  },
  computed: {
    ...mapGetters({
      invitee: "data/getInvitee",
    }),
    renderedMarkdown() {
      const md = new MarkdownIt({
        html: true,
      });
      const message = this.invitee.message_from_bride
        ? this.invitee.message_from_bride
        : this.defaultMessage;
      return md.render(message);
    },
  },
};
</script>