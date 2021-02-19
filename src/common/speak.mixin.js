export default {
  data() {
    return {
      speech: new window.SpeechSynthesisUtterance(),
      synth: window.speechSynthesis
    };
  },
  methods: {
    processSynthesis(text) {
      this.speech.text = text;
      this.synth.speak(this.speech);
    }
  }
};
