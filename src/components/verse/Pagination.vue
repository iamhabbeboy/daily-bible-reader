<template>
  <div class="sm:w-10/12 sm:text-left text-center">
    <div class="text-lg">
      <span class="text-white cursor-pointer mr-5" @click.prevent="previous">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </span>
      <span
        class="text-gray-50 hover:text-gray-300 cursor-pointer"
        @click="openModal"
      >
        {{ verse.book | capitalize }}
        <span>{{ verse.chapter }}</span>
        :
        <span>{{ page }}{{ verseTo }}</span>
      </span>

      <span class="cursor-pointer text-white ml-3">
        <font-awesome-icon :icon="['fas', 'volume-up']" />
      </span>
      <span class="text-white cursor-pointer ml-5" @click.prevent="next">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </span>
    </div>
    <modal v-if="status" @clicked="closeModal">
      <template #header>
        Bible Look up
      </template>
      <template #body :status="status">
        <form>
          <label>Book</label>
          <select
            class="rounded-md w-full border-2 border-gray-500 p-2"
            @change="changeBook"
            v-model="book"
          >
            <option>select</option>
            <option
              v-for="(book, index) of books"
              :key="index"
              :value="`${index}-${book.alias}`"
            >
              {{ book.book }}
            </option>
          </select>
          <label>Chapter </label>
          <select
            class="rounded-md w-full border-2 border-gray-500 p-2"
            @change="changeChapter"
            v-model="chapter"
          >
            <option>select</option>
            <option v-for="index in chapters" :key="index" :value="index">
              {{ index }}
            </option>
          </select>
          <label>Verse </label>
          <select
            class="rounded-md w-full border-2 border-gray-500 p-2"
            v-model="verseStart"
          >
            <option v-for="index in verses" :key="index" :value="index">
              {{ index }}
            </option>
          </select>
        </form>
      </template>
      <template #footer :status="status">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          @click="searchBible"
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
import mixinTextCase from "@/filters/capitalize";
import {
  FETCH_BIBLE_BOOKS,
  FETCH_BIBLE_PAGE,
  FETCH_BIBLE_TEXT
} from "../../store/action.type";
import { mapGetters } from "vuex";

export default {
  mixins: [mixinTextCase, mixinModal],
  computed: {
    ...mapGetters(["books", "isLoading", "pagination"]),
    verseTo() {
      return this.verse.to ? " - " + (parseInt(this.verse.to) + 1) : "";
    }
  },
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
  data: () => ({
    page: 1,
    chapters: 0,
    verses: 0,
    verseStart: 0,
    book: "",
    alias: "",
    chapter: undefined,
    bookIndex: 0
  }),
  watch: {
    page: function(newPage) {
      this.$store.dispatch(FETCH_BIBLE_PAGE, newPage);
    },
    status: function(newStatus) {
      if (newStatus) {
        this.$store.dispatch(FETCH_BIBLE_BOOKS);
      }
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
    },
    changeBook(e) {
      const [bookIndex, alias] = e.target.value.split("-");
      const { chapters } = this.books[bookIndex];
      this.alias = alias;
      this.bookIndex = bookIndex;
      this.chapters = parseInt(chapters);
    },
    changeChapter(e) {
      const chapters = e.target.value;
      const bookIndex = this.bookIndex || 0;
      const { verses } = this.books[bookIndex];
      this.verses = parseInt(verses[chapters - 1]) || 0;
    },
    searchBible() {
      const verses = this.verseStart;
      const [alias] = this.book.split("-").slice(-1);
      const chapter = this.chapter;
      const data = { text: alias, chapter: chapter, verse: verses };
      this.$store.dispatch(FETCH_BIBLE_TEXT, data);
      this.status = false;
    },
    closeModal() {
      this.status = false;
    }
  }
};
</script>
