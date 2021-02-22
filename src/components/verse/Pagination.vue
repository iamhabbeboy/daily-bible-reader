<template>
  <h3 class="text-lg bible-verse-nav w-10/12">
    <span class="text-white cursor-pointer mr-5" @click.prevent="previous">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </span>
    <span class="text-gray-50">
      {{ verse.book | capitalize }}
      <span>{{ verse.chapter }}</span>
      :
      <span>{{ page }}</span>
    </span>

    <span class="cursor-pointer text-white ml-3">
      <font-awesome-icon :icon="['fas', 'volume-up']" />
    </span>
    <span class="text-white cursor-pointer ml-5" @click.prevent="next">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </span>
  </h3>
</template>
<script>
import mixinTextCase from "@/filters/capitalize";
import { FETCH_BIBLE_PAGE } from "../../store/action.type";
export default {
  mixins: [mixinTextCase],
  props: {
    totalPages: {
      required: true,
      type: Number
    },
    verse: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      page: 1
    };
  },
  watch: {
    page: function(newPage) {
      this.$store.dispatch(FETCH_BIBLE_PAGE, newPage);
    }
  },
  methods: {
    previous() {
      let page = this.page <= 1 ? 1 : this.page - 1;
      this.page = page;
    },
    next() {
      const totalPage = this.totalPages;
      let page = this.page >= totalPage ? totalPage : this.page + 1;
      this.page = page;
    }
  }
};
</script>
