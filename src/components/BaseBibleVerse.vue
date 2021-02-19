<template>
  <div
    class=" px-6 my-20 mx-auto p-10 rounded-md 
    bg-gray-700 w-8/12 bg-opacity-30 shadow-md "
  >
    <Header />
    <Content />
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

export default {
  components: {
    Header,
    Content,
    Pagination,
    Option
  }
};
</script>
