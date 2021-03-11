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
          <h4 class="pb-2">Background</h4>
          <div class="flex flex-wrap">
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
            <img
              src="https://placeholder.pics/svg/100"
              alt=""
              class="mr-3 mb-3"
            />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import mixinModal from "@/mixins/modal";
export default {
  mixins: [mixinModal]
};
</script>
