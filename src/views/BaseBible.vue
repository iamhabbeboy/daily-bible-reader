<template>
  <div class="container mx-auto">
    <CurrentDate />
    <BaseBibleText />
    <Setting />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseBibleText from "@/components/BaseBibleText";
import CurrentDate from "@/components/CurrentDate";
import Setting from "@/components/Setting";

export default {
  components: {
    BaseBibleText,
    CurrentDate,
    Setting
  }
};
</script>
