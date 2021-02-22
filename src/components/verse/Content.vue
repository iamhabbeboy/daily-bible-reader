<template>
  <h1 class="text-xl text-white">
    <span v-if="loading">
      <img :src="imageLoader" />
    </span>
    {{ verse }}
  </h1>
</template>
<script>
export default {
  props: {
    verse: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      imageLoader: require("../../../public/golden.svg")
    };
  }
};
</script>
