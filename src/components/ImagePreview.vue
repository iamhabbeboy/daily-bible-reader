<template>
  <img
    :src="image"
    :alt="imagePrefix"
    class="mr-3 mb-3"
    style="width: 100px;"
    @click="changeBackgroundImage"
  />
</template>
<script>
export default {
  props: {
    changeBackgroundImage: {
      type: Function
    },
    imagePrefix: {
      type: Number
    }
  },
  computed: {
    image() {
      return require(`@/assets/bg-${this.imagePrefix}.jpg`);
    }
  }
};
</script>
