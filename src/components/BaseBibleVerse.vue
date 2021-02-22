<template>
  <div
    class=" px-6 my-20 mx-auto p-10 rounded-md 
    bg-gray-700 w-8/12 bg-opacity-30 shadow-md "
  >
    <Header />
    <Content :verses="verses" />
    <div class="flex mt-5">
      <Pagination />
      <Option />
    </div>
  </div>
</template>
<script>
import Header from "@/components/verse/Header";
import Content from "@/components/verse/Content";
import Pagination from "@/components/verse/Pagination";
import Option from "@/components/verse/Option";
import { FETCH_BIBLE_TEXT } from "../store/action.type";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Content,
    Pagination,
    Option
  },
  computed: {
    ...mapGetters(["verses"])
  },
  mounted() {
    this.$store.dispatch(FETCH_BIBLE_TEXT);
    console.log(this.$store.state);
  }
};
</script>
