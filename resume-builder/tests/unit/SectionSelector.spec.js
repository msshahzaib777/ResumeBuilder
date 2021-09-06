import { shallowMount } from "@vue/test-utils";
import SelectSelection from "../../src/components/selectSections.vue";
// import utils from "../utils/index";
import { MDBBtn } from "mdb-vue-ui-kit";

describe("SelectSection.vue", () => {
  beforeEach(() => {
    const wrapper = shallowMount(SelectSelection, {
      name: "select-section",
      global: {
        stubs: { MDBBtn },
      },
      data: () => {
        return {
          SectionsVisiblity: [
            {
              section: "Personal Info",
              visbility: true,
            },
            {
              section: "ProfilePic",
              visbility: false,
            },
            {
              section: "Aim/Objective",
              visbility: false,
            },
            {
              section: "Education",
              visbility: true,
            },
            {
              section: "Experience",
              visbility: false,
            },
            {
              section: "Project",
              visbility: false,
            },
            {
              section: "Publication",
              visbility: false,
            },
          ],
          defaults: ["Personal Info", "Education"],
        };
      },
      methods: {
        setVisibleSections() {
          console.log("Setting Visible Sections");
          this.$store.commit("UPDATE_SECTIONS", this.SectionsVisiblity);
          console.log(
            JSON.stringify(this.$store.state.Resume.SectionsVisiblity)
          );
        },
      },
    });

    it("Component renders Without error", () => {});

    expect(wrapper.exists()).toBe(true);
  });
});
