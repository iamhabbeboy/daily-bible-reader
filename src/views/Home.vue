<template>
  <div class="container mx-auto">
    <bible-text />
  </div>
</template>

<script>
// @ is an alias to /src
import BibleText from "@/components/BibleText";
export default {
  name: "Home",
  components: {
    "bible-text": BibleText
  }
};
</script>
