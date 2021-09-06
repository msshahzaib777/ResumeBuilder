<template>
  <div class="select-section p-5 pb-0">
    <h1 class="mt-3">Sections to Include in Resume</h1>
    <ol class="py-3 mx-5">
      <li v-for="item in SectionsVisiblity" :key="item">
        <input
          type="checkbox"
          :id="item.section"
          :value="item.section"
          v-model="item.visbility"
          :disabled="defaults.includes(item.section) ? true : false"
        />
        <label class="mx-2" :for="item.section">{{ item.section }}</label>
      </li>
    </ol>
    <div class="pb-5 px-5">
      <MDBBtn
        style="display: block; margin-left: auto; margin-right: 5%"
        class="btn-custom"
        @click="setVisibleSections"
        >Next</MDBBtn
      >
    </div>
  </div>
</template>

<script>
import utils from "../utils/index";
import { MDBBtn } from "mdb-vue-ui-kit";
export default {
  name: "select-section",
  components: {
    MDBBtn,
  },

  data: () => {
    return {
      SectionsVisiblity: utils.sections.map((x) => {
        return {
          section: x,
          visbility: utils.defaults.includes(x) ? true : false,
        };
      }),
      defaults: utils.defaults,
    };
  },
  methods: {
    setVisibleSections() {
      console.log("Setting Visible Sections");
      this.$store.commit("UPDATE_SECTIONS", this.SectionsVisiblity);
      console.log(JSON.stringify(this.$store.state.Resume.SectionsVisiblity));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-section {
  height: 100%;
}
ol {
  text-align: left;
}
h1 {
  color: #1e1e24;
  text-align: "left";
}
.btn-custom {
  background-color: #111d4a;
  color: #fff8f0;
  align-self: flex-end;
}
</style>
