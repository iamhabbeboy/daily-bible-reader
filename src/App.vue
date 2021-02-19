<template>
  <div id="app">
    <BaseBible />
  </div>
</template>
<script>
import BaseBible from "@/views/BaseBible";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBible,
  faChevronLeft,
  faChevronRight,
  faVolumeUp,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
library.add(faBible, faChevronLeft, faChevronRight, faVolumeUp, faSearch);
export default {
  components: {
    BaseBible
  }
};
</script>
