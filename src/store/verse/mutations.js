import {
  FETCH_START,
  SET_BIBLE_TEXT,
  SET_ERROR,
  SET_BIBLE_PAGE
} from "../mutations.type";

export default {
  [FETCH_START](state) {
    state.isLoading = true;
  },

  [SET_BIBLE_PAGE](state, page) {
    state.pagination = page;
  },

  [SET_BIBLE_TEXT](state, verse) {
    state.verse = verse;
    state.isLoading = false;
  },

  [SET_ERROR](state, error) {
    state.errors = error;
  }
};
