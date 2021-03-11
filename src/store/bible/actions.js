import { FETCH_BIBLE_BOOKS } from "../action.type";
import { SET_BIBLE_BOOK } from "../mutations.type";
import Bible from "@/services/Bible";

export default {
  async [FETCH_BIBLE_BOOKS]({ commit }) {
    const books = await new Bible().getChapters();
    commit(SET_BIBLE_BOOK, books);
  }
};
