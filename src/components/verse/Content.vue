<template>
  <h1 class="text-xl text-white">
    In the beginning, the Lord created the heaven and the earth
    {{ verses }}
  </h1>
</template>
<script>
export default {
  props: {
    verses: {
      required: true
    }
  }
};
</script>
