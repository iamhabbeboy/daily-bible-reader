import { shallowMount } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Setting from "@/components/Setting";

describe("Setting.vue", () => {
  //   beforeEach(() => {
  //     localVue = createLocalVue();
  //     localVue.use(library);
  //   });
  //   it("should take snapshot", () => {
  //     const wrapper = shallowMount(Setting);
  //     expect(wrapper).toMatchSnapshot();
  //   });

  it("should register font awesome icon", () => {
    // const wrapper = shallowMount(Setting);
    // const fontAwesome = FontAwesomeIcon();
    const wrapper = shallowMount(Setting, {
      FontAwesomeIcon
    });
    expect(wrapper).toMatchSnapshot();
  });
});
