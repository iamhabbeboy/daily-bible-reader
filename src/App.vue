<template>
  <div id="app" :style="changeBackgroundImage">
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
import { BACKGROUND_IMAGE_KEY } from "@/common/config";
import storage from "@/services/Localstorage";

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
    changeBackgroundImage() {
      return this.getImageNumber === 0 && !this.imageNumber
        ? this.getBackgroundColor
        : this.getBackgroundImage;
    },
    getImageNumber() {
      return storage.getKey(BACKGROUND_IMAGE_KEY) || 0;
    },
    getBackgroundImage() {
      const image = {};
      let imageId = !this.imageNumber ? this.getImageNumber : this.imageNumber;
      const imagePath = require(`@/assets/bg-${imageId}.jpg`);
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
