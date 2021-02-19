import { shallowMount } from "@vue/test-utils";
import BaseBibleVerse from "@/components/BaseBibleVerse";

describe("BaseBibleVerse.vue", () => {
  it("take snapshot", () => {
    const wrapper = shallowMount(BaseBibleVerse);
    expect(wrapper).toMatchSnapshot();
  });
});
