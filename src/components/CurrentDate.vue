<template>
  <div class="sm:p-0 p-3">
    <h1 class="sm:text-xxl text-xl text-gray-50">
      {{ getTime }}
    </h1>
    <h2 class="text-gray-100">Thur Feb. 18th</h2>
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
