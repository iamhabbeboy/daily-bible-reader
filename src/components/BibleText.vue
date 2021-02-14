<template>
  <div
    class="px-6 my-20 mx-auto p-10 rounded-md bg-gray-700 w-8/12 bg-opacity-40 "
  >
    <h3 class="uppercase">
      <font-awesome-icon :icon="['fas', 'bible']" />
      Verse of the day
    </h3>
    <h1 class="text-xl text-gray-300">
      In the beginning, the Lord created the heaven and the earth
    </h1>
    <bible-verse />
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBible,
  faChevronCircleLeft,
  faChevronCircleRight,
  faVolumeUp,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBible,
  faChevronCircleLeft,
  faChevronCircleRight,
  faVolumeUp,
  faSearch
);
import BibleVerse from "@/components/BibleVerse";

export default {
  components: {
    "bible-verse": BibleVerse
  }
};
</script>
