<template>
  <div
    class=" px-6 my-20 mx-auto p-10 rounded-md 
    bg-gray-700 sm:w-8/12 w-11/12 bg-opacity-30 shadow-md "
  >
    <Header />
    <Content :verse="getBibleText" :loading="isLoading" />
    <div class="sm:flex block mt-5">
      <Pagination :total-pages="getTotalPages" :verse="getVerse" />
      <Option />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Option from "@/components/verse/Option";
import Header from "@/components/verse/Header";
import Content from "@/components/verse/Content";
import Pagination from "@/components/verse/Pagination";
import { FETCH_BIBLE_TEXT, FETCH_BIBLE_PAGE } from "../store/action.type";

export default {
  components: {
    Header,
    Content,
    Pagination,
    Option
  },
  data: () => ({
    page: 0
  }),
  watch: {
    pagination: function(oldValue, newValue) {
      console.log(oldValue, newValue);
    }
  },
  computed: {
    ...mapGetters(["verses", "isLoading", "pagination"]),
    getBibleText() {
      let page = this.pagination || 1,
        pageIndex = page - 1;
      console.log(this.verses.contents[pageIndex]);
      console.log(pageIndex);
      return this.verses && this.verses.contents[pageIndex]
        ? this.verses.contents[pageIndex].text + " - " + pageIndex
        : "";
    },
    getTotalPages() {
      return this.verses.contents.length;
    },
    getVerse() {
      return this.verses;
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_BIBLE_TEXT, undefined);
    const currentPage = this.verses.chapter || 0;
    this.$store.dispatch(FETCH_BIBLE_PAGE, currentPage);
    console.log(this.pagination);
  }
};
</script>
