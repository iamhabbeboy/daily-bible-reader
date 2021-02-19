import { FETCH_BIBLE_TEXTS } from "./action.type";
import { SET_BIBLE_TEXTS, FETCH_START } from "./mutations.type";
import { HelperService } from "@/common/api.service";

const initialState = {
  helper: {
    type: "",
    book: "",
    text: "",
    chapter: 0,
    verse: "",
    to: 0
  },
  isLoading: true
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_BIBLE_TEXTS]({ commit }) {
    const data = await HelperService.getBibleTextFromHelper();
    const { chapter, verse, to } = HelperService.getRandomVerses();
    const response = data.chapters[chapter - 1][verse - 1];
    const payload = {};
    payload.type = "";
    payload.book = data.name;
    payload.text = response;
    payload.chapter = chapter;
    payload.verse = verse;
    payload.to = to;
    commit(SET_BIBLE_TEXTS, payload);
  }
};

export const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [SET_BIBLE_TEXTS](state, helpers) {
    state.helper = helpers;
  }
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },

  helpers(state) {
    return state.helper;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
