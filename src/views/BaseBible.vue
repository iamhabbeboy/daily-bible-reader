<template>
  <div class="container mx-auto">
    <CurrentDate />
    <BaseBibleVerse />
    <Setting />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseBibleVerse from "@/components/BaseBibleVerse";
import CurrentDate from "@/components/CurrentDate";
import Setting from "@/components/Setting";

export default {
  components: {
    BaseBibleVerse,
    CurrentDate,
    Setting
  }
};
</script>
