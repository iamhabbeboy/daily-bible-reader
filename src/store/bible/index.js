import { FETCH_BIBLE } from "./actions.type";
import Verse from "@/services/Verse";
import { GET_BIBLE } from "./mutations.type";

export const actions = {
  [FETCH_BIBLE]({ commit }) {
    const a = new Verse();
    a.getJson();
    commit(GET_BIBLE, "Hello world");
  }
};
