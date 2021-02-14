<template>
  <h3 class="text-lg bible-verse-nav">
    <!-- <span class="text-white cursor-pointer">
      <font-awesome-icon :icon="['fas', 'chevron-circle-left']" />
    </span> -->
    Genesis 1:1
    <!-- <span class="text-white cursor-pointer">
      <font-awesome-icon :icon="['fas', 'chevron-circle-right']" />
    </span> -->
    <span class="cursor-pointer text-white ml-3" @click="speak">
      <font-awesome-icon :icon="['fas', 'volume-up']" />
    </span>
  </h3>
</template>
<script>
export default {
  data() {
    return {
      speech: new window.SpeechSynthesisUtterance(),
      synth: window.speechSynthesis
    };
  },
  methods: {
    speak() {
      this.speech.text = "Hello, whats up";
      this.synth.speak(this.speech);
    }
  }
};
</script>
