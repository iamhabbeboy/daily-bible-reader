<template>
  <div class="px-0 my-20 mx-auto w-8/12 sm:text-right text-center">
    <div class="text-lg text-white">
      <a href="#" class="cursor-pointer" @click="openModal">
        <h1>
          Setting
          <font-awesome-icon :icon="['fa', 'cog']" />
        </h1>
      </a>
    </div>
    <!-- <Modal> -->
    <modal v-if="status">
      <template #header>
        Setting
      </template>
      <template #body>
        <form>
          <label>Read verse </label>
          <select class="rounded-md w-full border-2 border-gray-500 p-2">
            <option>select</option>
            <option> 2x daily</option>
            <option> 3x daily</option>
          </select>
        </form>
        <div class="mt-10 pt-5 border-t-2 border-blue-100">
          <h4 class="pb-2">Images</h4>
          <div class="flex flex-wrap">
            <ImageLoader
              v-for="index in backgroundImageNumber"
              :key="index"
              :changeBackgroundImage="changeBackgroundImage"
              :imagePrefix="index"
            />
          </div>
          <h4 class="pb-2">Colors</h4>
          <div class="flex flex-wrap">
            <div class="px-5 py-5 bg-red-500 mr-2 ">
              &nbsp;
            </div>
            <div class="px-5 py-5 bg-blue-500 mr-2 cursor-pointer">&nbsp;</div>
            <div class="px-5 py-5 bg-gray-500 mr-2 cursor-pointer">&nbsp;</div>
            <div class="px-5 py-5 bg-gray-900 mr-2 cursor-pointer">&nbsp;</div>
          </div>
        </div>
      </template>
      <template #footer :status="status">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Search
          <span class="pl-2">
            <font-awesome-icon :icon="['fa', 'search']" />
          </span>
        </button>
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          @click="closeModal"
        >
          Cancel
        </button>
      </template>
    </modal>
  </div>
</template>

<script>
import mixinModal from "@/mixins/modal";
import { FETCH_IMAGE_SELECTED } from "../store/action.type";
import { mapGetters } from "vuex";

export default {
  mixins: [mixinModal],
  components: {
    ImageLoader: () => import(/* webpackPrefetch: true */ "./ImagePreview")
  },
  data: () => ({
    backgroundImageNumber: 5
  }),
  computed: {
    ...mapGetters(["imageNumber"])
  },
  methods: {
    changeBackgroundImage(e) {
      const imageSelected = e.target.getAttribute("alt");
      this.$store.dispatch(FETCH_IMAGE_SELECTED, imageSelected);
    }
  }
};
</script>
<style scoped>
img {
  transition: 1s all;
}
img:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
