import BaseModal from "@/components/modal/BaseModal";

export default {
  components: {
    modal: BaseModal
  },
  data: () => ({
    status: false
  }),
  methods: {
    openModal() {
      this.status = true;
    }
  }
};
