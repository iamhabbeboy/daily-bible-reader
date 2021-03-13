import { FETCH_IMAGE_SELECTED, FETCH_MODAL_STATUS } from "../action.type";
import { SET_IMAGE_SELECTED, SET_MODAL_STATUS } from "../mutations.type";

export default {
  [FETCH_MODAL_STATUS]({ commit }, status) {
    commit(SET_MODAL_STATUS, status);
  },
  [FETCH_IMAGE_SELECTED]({ commit }, imageNumber) {
    commit(SET_IMAGE_SELECTED, imageNumber);
  }
};
