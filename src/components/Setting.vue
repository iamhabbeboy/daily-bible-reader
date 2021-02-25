<template>
  <div class="px-0 my-20 mx-auto w-8/12 text-right ">
    <h4 class="text-lg text-white">
      <a href="#" class="cursor-pointer" @click="openModal">
        Setting
        <font-awesome-icon :icon="['fa', 'cog']" />
      </a>
    </h4>
    <!-- <Modal> -->
    <modal>
      <template slot="header">
        Setting
      </template>
      <template slot="body">
        <form>
          <label>Read verse </label>
          <input
            type="text"
            class="rounded-md w-full border-2 border-gray-500 p-2"
          />
        </form>
      </template>
    </modal>
    <!-- </Modal> -->
  </div>
</template>

<script>
import { FETCH_MODAL_STATUS } from "@/store/action.type";
import Modal from "./modal/Index";
export default {
  components: {
    modal: Modal
  },
  data() {
    return {
      status: false
    };
  },
  methods: {
    openModal() {
      this.status = true;
      this.$store.dispatch(FETCH_MODAL_STATUS, this.status);
    }
  }
};
</script>
