import { SET_BIBLE_BOOK } from "../mutations.type";

export default {
  [SET_BIBLE_BOOK](state, books) {
    state.books = books;
  }
};
