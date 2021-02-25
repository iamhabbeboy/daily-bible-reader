import { FETCH_MODAL_STATUS } from "../action.type";
import { SET_MODAL_STATUS } from "../mutations.type";

export default {
  [FETCH_MODAL_STATUS]({ commit }, status) {
    commit(SET_MODAL_STATUS, status);
  }
};
