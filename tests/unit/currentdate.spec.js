import { shallowMount } from "@vue/test-utils";
import CurrentDate from "@/components/CurrentDate";

describe("CurrentDate.vue", () => {
  it("take snapshot", () => {
    const wrapper = shallowMount(CurrentDate);
    expect(wrapper).toMatchSnapshot();
  });
});
