import { SET_MODAL_STATUS } from "../mutations.type";

export default {
  [SET_MODAL_STATUS](state, status) {
    state.status = status;
  }
};
