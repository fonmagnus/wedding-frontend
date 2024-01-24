<template>
  <div
    id="white-activity"
    class="flex flex-col py-4 px-4 bg-gray-200 relative items-center justify-center gap-2"
  >
    <ImageCollection
      :images="[
        'https://i0.wp.com/youarepursued.com/wp-content/uploads/2022/04/267i.gif?fit=1000%2C500&ssl=1',
        'https://i.pinimg.com/736x/71/9f/47/719f4783daf250d7460c3cb79f3284ca.jpg',
        'https://imageproxy.youversionapi.com/1280x1280/https://s3.amazonaws.com/static-youversionapi-com/images/base/574/1280x1280.jpg',
        'https://i.etsystatic.com/13427684/r/il/194817/1956664143/il_fullxfull.1956664143_7pkn.jpg',
      ]"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
  },
};
</script>

