<template>
  <div
    id="app"
    :style="imageNumber === 0 ? getBackgroundColor : getBackgroundImage"
  >
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
  faSearch,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { mapGetters } from "vuex";
library.add(
  faBible,
  faChevronLeft,
  faChevronRight,
  faVolumeUp,
  faSearch,
  faCog
);
export default {
  components: {
    BaseBible
  },
  computed: {
    ...mapGetters(["imageNumber"]),
    getBackgroundImage() {
      const image = {};
      const imagePath = require(`@/assets/bg-${this.imageNumber}.jpg`);
      image.backgroundImage = `url('${imagePath}')`;
      image.backgroundPosition = "center center";
      image.backgroundSize = "cover";
      image.backgroundRepeat = "no-repeat";
      image.backgroundAttachment = "fixed";
      return image;
    }
  },
  data: () => ({
    getBackgroundColor: {
      backgroundColor: "#000"
    }
  })
};
</script>
<style>
#app {
  height: 100vh;
}
</style>
