import { SET_BIBLE_TEXT, SET_ERROR } from "../mutations.type";

export default {
  [SET_BIBLE_TEXT](state, verses) {
    state.verses = verses;
  },

  [SET_ERROR](state, error) {
    state.errors = error;
  }
};
