<template>
  <div>
    <h1 class="text-xxl text-gray-50 ">
      {{ getTime }}
    </h1>
    <h4 class="text-gray-100">Thur Feb. 18th</h4>
  </div>
</template>

<script>
export default {
  computed: {
    getTime() {
      const time = new Date();
      return `${time.getHours()}:${time.getMinutes()}`;
    }
  }
};
</script>
