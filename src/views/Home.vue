<template>
  <div class="container mx-auto">
    <bible-text />
    <div
      class="px-6 my-20 mx-auto p-10 rounded-md bg-gray-700 w-8/12 bg-opacity-40 flex"
    >
      <div class="w-6/12">
        <h3 class="uppercase">
          <font-awesome-icon :icon="['fas', 'search']" />
          Filter Category
        </h3>
        <bible-filter />
      </div>
      <div class="w-6/12">
        <h3 class="uppercase">
          <font-awesome-icon :icon="['fas', 'search']" />
          Setting
        </h3>
        <select
          class="border border-gray-300 text-gray-900 w-8/12 rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none my-3"
        >
          <option value="">Read out bible text</option>
          <option value="">None</option>
          <option value="">Once</option>
          <option value="">2 times</option>
          <option value="">3 times </option>
        </select>
        <button
          class="mx-3 border border-gray-300 rounded-md py-3 px-4 bg-gray-300 hover:bg-blue-600 hover:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BibleText from "@/components/BibleText";
import BibleFilter from "@/components/BibleFilter";
export default {
  name: "Home",
  components: {
    "bible-text": BibleText,
    "bible-filter": BibleFilter
  }
};
</script>
