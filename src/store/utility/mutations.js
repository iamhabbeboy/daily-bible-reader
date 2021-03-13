import { SET_IMAGE_SELECTED, SET_MODAL_STATUS } from "../mutations.type";

export default {
  [SET_MODAL_STATUS](state, status) {
    state.status = status;
  },
  [SET_IMAGE_SELECTED](state, imageNumber) {
    state.imageNumber = imageNumber;
  }
};
